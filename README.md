# VRental

Сайт для проката VR-шлемов Meta Quest 3 и Telegram-бот, который принимает заявки. Сначала я делал его для своего проката, потом закрыл проект и оставил код как пример работы. Название, телефон, город и реквизиты в нём вымышленные.

Демо: https://nikolayyaroslavcev.github.io/vr-rental/

## Что есть на сайте

Одна большая посадочная страница: тарифы, каталог из 80 с лишним игр с фильтром по возрасту, блок «как это работает», FAQ и отзывы. Плюс две служебные страницы, политика конфиденциальности и условия аренды.

Сайт собирается в статику (`output: "export"`), поэтому его можно залить на любой хостинг без Node. Раньше он так и жил на обычном shared-хостинге под Apache, отсюда `.htaccess` в `public/`.

С SEO я тоже повозился: у каждой страницы свои canonical и Open Graph, в разметке есть JSON-LD (LocalBusiness, WebSite, FAQPage), а sitemap, robots и web manifest генерируются через файловые конвенции Next.

Стек: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion.

## Бот

Лежит в `bot/`. Зависимостей у него нет, только `fetch` и long polling Telegram API. Бот по шагам спрашивает тариф, дату, адрес и телефон, проверяет ввод, присваивает заявке номер вида `VR-00001`, дописывает её в `orders.jsonl` и пересылает владельцу.

На кнопках сайта стоят ссылки с заранее заполненным текстом, например «хочу забронировать тариф „Неделя“». Бот вытаскивает тариф из такого сообщения и сразу переходит к выбору даты.

## Запуск

```bash
npm install
npm run dev
```

Статическая сборка попадает в `out/`:

```bash
npm run build
```

Чтобы собрать сайт под подпапку, как на GitHub Pages, задайте переменные:

```bash
NEXT_PUBLIC_BASE_PATH=/vr-rental NEXT_PUBLIC_SITE_URL=https://example.github.io/vr-rental npm run build
```

Бот:

```bash
cd bot
echo "BOT_TOKEN=токен от @BotFather" > .env
echo "OWNER_ID=ваш chat id" >> .env
node index.js
```

Для автоперезапуска есть конфиг pm2: `pm2 start ecosystem.config.cjs`.
