import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { SITE_URL, withBase } from "@/lib/site";

const title = "Условия использования";
const description =
  "Условия аренды Meta Quest 3 в Минске: доставка, оплата, ответственность и порядок возврата оборудования.";
const url = `${SITE_URL}/terms/`;

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

export default function TermsPage() {
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
            Условия использования
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
                Договор аренды оборудования регулируется главой 34 Гражданского кодекса
                Республики Беларусь и Законом Республики Беларусь от 9 января 2002 г. № 90-З
                «О защите прав потребителей». Обработка персональных данных, необходимых для
                заключения договора, осуществляется в соответствии с Законом Республики Беларусь
                от 7 мая 2021 г. № 99-З «О защите персональных данных» — подробнее в{" "}
                <a href={withBase("/privacy/")} className="text-aurora-teal hover:text-aurora-teal/80 transition-colors">
                  Политике конфиденциальности
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                1. Предмет аренды
              </h2>
              <p>
                VRental предоставляет в аренду комплект Meta Quest 3 (512 ГБ) с креплением M2 Pro,
                дополнительным аккумулятором B2, двумя контроллерами, зарядным устройством и
                предустановленными играми. Комплектация может обновляться, актуальный список
                смотрите на странице «Что входит».
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                2. Доставка
              </h2>
              <p>
                Бесплатная доставка и забор оборудования доступны только по Минску. Если
                вы находитесь за пределами города, забрать шлем можно самостоятельно. Уточните
                детали по телефону или в Telegram.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                3. Оплата и залог
              </h2>
              <p>
                Оплата: наличными или картой при получении оборудования. Предоплата и залог
                не требуются. Тарифы и цены указаны на странице «Цены» в белорусских рублях.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                4. Оформление договора
              </h2>
              <p>
                Для оформления договора аренды нужны паспортные данные. Оформление занимает
                пару минут по телефону или в мессенджере. Порядок обработки этих данных описан
                в{" "}
                <a href={withBase("/privacy/")} className="text-aurora-teal hover:text-aurora-teal/80 transition-colors">
                  Политике конфиденциальности
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                5. Ответственность за оборудование
              </h2>
              <p>
                Активное использование VR предполагает естественный износ: небольшие потёртости
                или царапины в процессе игры считаются нормой. При серьёзных повреждениях или
                утере оборудования стоимость ремонта или замены обсуждается индивидуально до
                момента возврата.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                6. Возрастные ограничения
              </h2>
              <p>
                Производитель (Meta) рекомендует использовать VR-шлем детям от 10 лет. Для
                детей младше рекомендуемого возраста ответственность за использование несут
                родители или сопровождающие взрослые.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light text-polar-white mb-3" style={{ fontFamily: "var(--font-body)" }}>
                7. Отмена и перенос брони
              </h2>
              <p>
                Отменить или перенести бронирование можно, написав нам в Telegram или позвонив
                по телефону. Предупредите заранее, чтобы мы могли скорректировать график доставки.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
