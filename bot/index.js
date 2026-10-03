import { readFileSync, appendFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
try {
  const env = readFileSync(join(__dirname, ".env"), "utf8");
  for (const line of env.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch {}

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
  console.error("Установи переменную окружения BOT_TOKEN");
  process.exit(1);
}

const API = `https://api.telegram.org/bot${TOKEN}`;
const OWNER_ID = process.env.OWNER_ID || null;

async function api(method, body = {}) {
  const res = await fetch(`${API}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

async function send(chatId, text, extra = {}) {
  const res = await api("sendMessage", { chat_id: chatId, text, parse_mode: "HTML", ...extra });
  if (!res.ok) {
    console.error(`Telegram sendMessage failed for chat ${chatId}: ${res.description || JSON.stringify(res)}`);
  }
  return res;
}

function isValidDateText(text) {
  const t = text.trim().toLowerCase();
  if (["сегодня", "завтра", "послезавтра"].includes(t)) return true;

  const numeric = t.match(/^(\d{1,2})[.\-\/](\d{1,2})(?:[.\-\/](\d{2,4}))?$/);
  if (numeric) {
    const day = parseInt(numeric[1], 10);
    const month = parseInt(numeric[2], 10);
    return day >= 1 && day <= 31 && month >= 1 && month <= 12;
  }

  const months = "январ|феврал|март|апрел|ма[йя]|июн|июл|август|сентябр|октябр|ноябр|декабр";
  const named = t.match(new RegExp(`^(\\d{1,2})\\s+(${months})`));
  if (named) {
    const day = parseInt(named[1], 10);
    return day >= 1 && day <= 31;
  }

  return false;
}

function isValidPhone(text) {
  const digits = text.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

const TARIFFS = [
  { name: "Один день", price: "40 Br / сутки" },
  { name: "Выходные", price: "70 Br / 2 дня" },
  { name: "Неделя", price: "150 Br / 7 дней" },
  { name: "Месяц", price: "350 Br / 30 дней" },
];

function findTariff(text) {
  const t = text.trim().toLowerCase();
  return TARIFFS.find((tf) => tf.name.toLowerCase() === t);
}

function tariffKeyboard() {
  return {
    keyboard: TARIFFS.map((tf) => [{ text: tf.name }]),
    resize_keyboard: true,
    one_time_keyboard: true,
  };
}

const ORDERS_FILE = join(__dirname, "orders.jsonl");

try {
  mkdirSync(dirname(ORDERS_FILE), { recursive: true });
} catch (e) {
  console.error("Не удалось создать директорию для orders.jsonl:", e.message);
}

let orderCounter = 0;
try {
  const lines = readFileSync(ORDERS_FILE, "utf8").split("\n").filter((l) => l.trim());
  orderCounter = lines.length;
} catch {}

function nextBookingNumber() {
  orderCounter += 1;
  return `VR-${String(orderCounter).padStart(5, "0")}`;
}

function saveOrder(order) {
  const line = JSON.stringify({ ...order, savedAt: new Date().toISOString() });
  try {
    appendFileSync(ORDERS_FILE, line + "\n", "utf8");
  } catch (e) {
    console.error("Не удалось сохранить заявку в файл:", e.message);
  }
}

const sessions = new Map();

function getSession(chatId) {
  if (!sessions.has(chatId)) {
    sessions.set(chatId, { state: "idle", data: {} });
  }
  return sessions.get(chatId);
}

function resetSession(chatId) {
  sessions.set(chatId, { state: "idle", data: {} });
}

async function askTariff(chatId) {
  const s = getSession(chatId);
  s.state = "ask_tariff";

  const list = TARIFFS.map((tf) => `• <b>${tf.name}</b> — ${tf.price}`).join("\n");
  await send(
    chatId,
    `Сначала выберите тариф 🎯\n\n${list}\n\nНапишите название тарифа или выберите на клавиатуре:`,
    { reply_markup: tariffKeyboard() }
  );
}

async function startBooking(chatId, tariff) {
  const s = getSession(chatId);

  if (!tariff) {
    await askTariff(chatId);
    return;
  }

  s.state = "ask_date";
  s.data.tariff = tariff;

  await send(
    chatId,
    `Отлично, тариф <b>«${tariff}»</b>! 🎯\n\n📅 Напишите дату, на которую хотите забронировать:`,
    { reply_markup: { remove_keyboard: true } }
  );
}

async function handleTariff(chatId, text) {
  const tariff = findTariff(text);
  if (!tariff) {
    await send(chatId, `⚠️ Не нашёл такой тариф. Выберите один из вариантов на клавиатуре ниже.`, {
      reply_markup: tariffKeyboard(),
    });
    return;
  }
  await startBooking(chatId, tariff.name);
}

async function handleDate(chatId, text) {
  if (!isValidDateText(text)) {
    await send(chatId, `⚠️ Не могу распознать дату. Напишите, например: <b>21.07</b>, <b>21.07.2026</b> или <b>завтра</b>.`);
    return;
  }
  const s = getSession(chatId);
  s.data.date = text;
  s.state = "ask_address";
  await send(chatId, `📅 ${text} — записал!\n\n📍 Теперь напишите адрес доставки:`);
}

async function handleAddress(chatId, text) {
  const s = getSession(chatId);
  s.data.address = text;
  s.state = "ask_phone";
  await send(chatId, `📍 ${text} — отлично!\n\n📱 Последнее — напишите номер телефона для связи:`);
}

async function handlePhone(chatId, text) {
  if (!isValidPhone(text)) {
    await send(chatId, `⚠️ Похоже, это не номер телефона. Напишите номер цифрами, например: <b>+375 29 123-45-67</b>.`);
    return;
  }
  const s = getSession(chatId);
  s.data.phone = text;
  s.state = "done";

  const bookingNumber = nextBookingNumber();
  const d = s.data;
  const summary = `✅ <b>Заявка оформлена!</b>

🔖 Номер брони: <b>${bookingNumber}</b>
🎯 Тариф: ${d.tariff}
📅 Дата: ${d.date}
📍 Адрес: ${d.address}
📱 Телефон: ${d.phone}

Мы свяжемся с вами в ближайшее время для подтверждения. Сохраните номер брони — он пригодится при обращении к нам. Спасибо! 🙌`;

  await send(chatId, summary);

  saveOrder({ chatId, bookingNumber, ...d });

  if (OWNER_ID) {
    const ownerMsg = `🔔 <b>Новая заявка!</b>

🔖 Номер брони: ${bookingNumber}
От: ${s.data.from || "Клиент"} (${chatId})
🎯 Тариф: ${d.tariff}
📅 Дата: ${d.date}
📍 Адрес: ${d.address}
📱 Телефон: ${d.phone}`;
    await send(OWNER_ID, ownerMsg);
  }

  console.log("─── НОВАЯ ЗАЯВКА ───");
  console.log(JSON.stringify(d, null, 2));
  console.log("────────────────────");

  resetSession(chatId);
}

async function handleMessage(msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (!text) return;
  const command = text.trim().split("@")[0];

  const from = msg.from;
  const firstName = from?.first_name || "Unknown";

  if (command === "/start") {
    resetSession(chatId);
    await send(chatId, `🎮 <b>Добро пожаловать в VRental!</b>

Meta Quest 3 с доставкой по Минску. Игры загружены, шлем настроен, залога нет.

Давайте оформим бронирование!`);
    const s = getSession(chatId);
    s.data.from = firstName;
    await askTariff(chatId);
    return;
  }

  if (command === "/cancel") {
    resetSession(chatId);
    await send(chatId, "❌ Бронирование отменено. Начните заново: /start");
    return;
  }

  if (command === "/help") {
    await send(chatId, "Напишите /start чтобы начать бронирование.\nДля отмены: /cancel");
    return;
  }

  if (text.includes("забронировать") || text.includes("Забронировать")) {
    const tariffMatch = text.match(/тариф\s*[«"]([^»"]+)[»"]/i);
    const tariff = tariffMatch ? tariffMatch[1].trim() : null;
    resetSession(chatId);
    const s = getSession(chatId);
    s.data.from = firstName;
    await startBooking(chatId, tariff);
    return;
  }

  const s = getSession(chatId);
  switch (s.state) {
    case "ask_tariff":
      await handleTariff(chatId, text);
      break;
    case "ask_date":
      await handleDate(chatId, text);
      break;
    case "ask_address":
      await handleAddress(chatId, text);
      break;
    case "ask_phone":
      await handlePhone(chatId, text);
      break;
    default:
      await send(chatId, `Напишите /start чтобы забронировать VR-шлем.`);
      break;
  }
}

let offset = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function poll() {
  try {
    const { result, ok, description } = await api("getUpdates", {
      offset,
      timeout: 30,
      allowed_updates: ["message"],
    });
    if (!ok) {
      console.error("getUpdates failed:", description || "unknown error");
      await sleep(3000);
      return;
    }
    for (const update of result) {
      offset = update.update_id + 1;
      try {
        await handleMessage(update.message);
      } catch (e) {
        console.error("Ошибка обработки сообщения:", e.message);
      }
    }
  } catch (e) {
    console.error("Poll error:", e.message);
    await sleep(3000);
  }
}

process.on("uncaughtException", (e) => console.error("Uncaught exception:", e));
process.on("unhandledRejection", (e) => console.error("Unhandled rejection:", e));

await api("setMyCommands", {
  commands: [
    { command: "start", description: "Забронировать VR-шлем" },
    { command: "cancel", description: "Отменить бронирование" },
    { command: "help", description: "Помощь" },
  ],
});

console.log("Бот запущен. Ожидаю заявки...");
while (true) await poll();
