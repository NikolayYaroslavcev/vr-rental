import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { SITE_URL } from "@/lib/site";

const title = "Политика конфиденциальности";
const description =
  "Как VRental собирает, использует и хранит персональные данные клиентов при аренде Meta Quest 3 в Минске.";
const url = `${SITE_URL}/privacy/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `${title} | VRental`,
    description,
    url,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${title} | VRental`,
    description,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cosmic-violet focus:text-white focus:rounded-[20px] focus:text-[10px] focus:uppercase focus:tracking-[0.15em]"
      >
        К содержимому
      </a>
      <Header />
      <main id="main-content" className="flex-1 section-teal-deep">
        <Container className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-3xl">
          <h1
            className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-extralight tracking-[-0.03em] mb-4 text-polar-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Политика конфиденциальности
          </h1>
          <p className="text-sm text-white/40 mb-12 font-light">
            Действует с 22 июля 2026 года
          </p>

          <div className="space-y-10 text-[15px] leading-[1.8] text-white/70 font-light">
            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Правовая основа
              </h2>
              <p>
                Настоящая Политика составлена в соответствии с Законом Республики Беларусь от
                7 мая 2021 г. № 99-З «О защите персональных данных» и Законом Республики Беларусь
                от 9 января 2002 г. № 90-З «О защите прав потребителей». Оператором персональных
                данных является плательщик, указанный в подвале сайта.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                1. Какие данные мы собираем
              </h2>
              <p>
                При оформлении аренды мы просим: имя, номер телефона, адрес доставки в Минске
                и паспортные данные, необходимые для заключения договора аренды оборудования.
                Без этих данных мы не можем оформить бронирование.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                2. Как мы используем данные
              </h2>
              <p>
                Данные используются исключительно для оформления договора аренды, доставки
                Meta Quest 3 по указанному адресу и связи с вами по вопросам брони. Мы не
                передаём ваши данные третьим лицам и не используем их в рекламных целях.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                3. Хранение данных
              </h2>
              <p>
                Паспортные данные хранятся только на срок действия договора аренды и
                необходимого по закону срока хранения документов, после чего удаляются.
                Контактные данные (телефон) могут сохраняться дольше для повторных броней,
                если вы не попросите их удалить.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                4. Ваши права
              </h2>
              <p>
                Вы можете в любой момент запросить, какие данные о вас хранятся, попросить
                их исправить или удалить: напишите нам в Telegram или позвоните по телефону
                ниже.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                5. Контакты
              </h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, пишите на{" "}
                <a
                  href="https://t.me/vrental_demo_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aurora-teal hover:text-aurora-teal/80 transition-colors"
                >
                  Telegram
                </a>{" "}
                или звоните по номеру{" "}
                <a
                  href="tel:+375290000000"
                  className="text-aurora-teal hover:text-aurora-teal/80 transition-colors"
                >
                  +375 (29) 000-00-00
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
