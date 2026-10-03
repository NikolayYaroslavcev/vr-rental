"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp } from "@/lib/motion";

const testimonials = [
  {
    id: "1",
    name: "Анна К.",
    role: "День рождения, 10 лет",
    quote:
      "Десятый день рождения сына прошёл на ура. Все дети визжали от восторга, играя в Beat Saber и Gorilla Tag.",
    avatar: "АК",
  },
  {
    id: "2",
    name: "Максим и Дарья",
    role: "Свидание",
    quote:
      "Играли в Beat Saber вместе и так смеялись, что соседи стучали. Самый весёлый вечер за последние месяцы. Уже забронировали снова на выходные.",
    avatar: "МД",
  },
  {
    id: "3",
    name: "Сергей В.",
    role: "Вечер с друзьями",
    quote:
      "Шестеро друзей, шесть шлемов, два часа. Соревновались в Superhot, играли в мини-гольф. Лучший вечер за долгое время.",
    avatar: "СВ",
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 lg:py-32 relative section-teal-deep">
      <Container ref={ref}>
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-extralight tracking-[-0.03em] max-w-3xl mx-auto text-polar-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Что говорят
            <br />
            <span className="text-white/70">наши клиенты.</span>
          </motion.h2>
        </div>

        <div className="overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max mx-auto gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="relative shrink-0 w-[85vw] sm:w-[380px] snap-start p-6 sm:p-8 md:p-10 rounded-[20px] border border-white/8 bg-white/[0.02] transition-all duration-200 ease-out hover:border-white/15 flex flex-col min-h-[240px]"
            >
              <span
                className="text-[60px] leading-none text-aurora-teal/20 mb-4 select-none"
                aria-hidden="true"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;
              </span>

              <blockquote className="text-[15px] leading-[1.7] mb-8 text-white/70 font-light flex-1">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <span
                    className="text-[10px] font-light text-aurora-teal/60 tracking-wider"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p
                    className="text-[13px] font-light text-polar-white tracking-wide"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[10px] text-white/40 uppercase"
                    style={{ letterSpacing: "0.16em", fontFamily: "var(--font-label)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
