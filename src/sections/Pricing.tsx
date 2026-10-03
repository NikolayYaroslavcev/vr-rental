"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useInView } from "@/hooks/useInView";
import { fadeUp, scaleIn } from "@/lib/motion";
import { TOTAL_GAMES } from "@/sections/PopularGames";

const TG_BOT = "vrental_demo_bot";

const plans = [
  {
    name: "Один день",
    price: "40",
    period: "сутки",
    description: "Попробовать, не переплачивая",
    features: [
      "Meta Quest 3 (512 ГБ)",
      "Крепление M2 Pro",
      "B2 Battery pack",
      "2 контроллера",
      `${TOTAL_GAMES}+ игр`,
      "Зарядка в комплекте",
      "Инструкция по настройке",
    ],
    popular: false,
    tgText: "Здравствуйте! Хочу забронировать Meta Quest 3, тариф «Один день» (40 Br)",
  },
  {
    name: "Выходные",
    price: "70",
    period: "2 дня",
    description: "Два дня, вся семья играет",
    features: [
      "Meta Quest 3 (512 ГБ)",
      "Крепление M2 Pro",
      "B2 Battery pack",
      "2 контроллера",
      `${TOTAL_GAMES}+ игр`,
      "Бесплатная доставка",
      "Техподдержка в чате",
    ],
    popular: true,
    tgText: "Здравствуйте! Хочу забронировать Meta Quest 3, тариф «Выходные» (70 Br за 2 дня)",
  },
  {
    name: "Неделя",
    price: "150",
    period: "7 дней",
    description: "Неделя за цену пяти дней",
    features: [
      "Meta Quest 3 (512 ГБ)",
      "Крепление M2 Pro",
      "B2 Battery pack",
      "2 контроллера",
      `${TOTAL_GAMES}+ игр`,
      "Бесплатная доставка",
      "Скидка 30% от суточной",
    ],
    popular: false,
    tgText: "Здравствуйте! Хочу забронировать Meta Quest 3, тариф «Неделя» (150 Br за 7 дней)",
  },
  {
    name: "Месяц",
    price: "350",
    period: "30 дней",
    description: "Для тех, кто хочет VR дома постоянно",
    features: [
      "Meta Quest 3 (512 ГБ)",
      "Крепление M2 Pro",
      "B2 Battery pack",
      "2 контроллера",
      `${TOTAL_GAMES}+ игр`,
      "Бесплатная доставка",
      "Скидка 70% от суточной",
    ],
    popular: false,
    tgText: "Здравствуйте! Хочу забронировать Meta Quest 3, тариф «Месяц» (350 Br за 30 дней)",
  },
];

const VISIBLE_FEATURES = 4;

export function Pricing() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [expanded, setExpanded] = useState<boolean[]>(() =>
    plans.map(() => false)
  );

  const toggleExpanded = (index: number) => {
    setExpanded((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-32 relative section-teal">
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
            Цены на VR-аренду.
            <br />
            <span className="text-white/70">Всё прозрачно.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`relative flex flex-col p-6 md:p-8 rounded-[20px] border transition-all duration-500 ${
                plan.popular
                  ? "border-aurora-teal/30 bg-aurora-teal/[0.04]"
                  : "border-white/8 bg-white/[0.02] hover:border-white/15"
              }`}
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-aurora-teal/20 border border-aurora-teal/30 text-[10px] font-medium text-aurora-teal uppercase"
                  style={{
                    letterSpacing: "0.16em",
                    fontFamily: "var(--font-label)",
                  }}
                >
                  Популярное
                </span>
              )}

              <div className="mb-6">
                <h3
                  className="text-lg font-extralight text-polar-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-white/50 font-light">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl md:text-5xl font-extralight text-polar-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/50 font-light">
                    Br
                  </span>
                </div>
                <p
                  className="text-[10px] text-white/40 mt-2 uppercase"
                  style={{
                    letterSpacing: "0.16em",
                    fontFamily: "var(--font-label)",
                  }}
                >
                  за {plan.period}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-3">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={feature}
                    className={`items-start gap-3 flex ${
                      featureIndex >= VISIBLE_FEATURES
                        ? expanded[i]
                          ? "flex"
                          : "hidden sm:flex"
                        : "flex"
                    }`}
                  >
                    <Check
                      size={14}
                      strokeWidth={1.5}
                      className="text-aurora-teal/70 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-white/70 font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.features.length > VISIBLE_FEATURES && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(i)}
                  className="sm:hidden flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition-colors mb-6 font-light"
                >
                  {expanded[i] ? "Свернуть" : "Показать ещё"}
                  <ChevronDown
                    size={12}
                    strokeWidth={1.5}
                    className={`transition-transform duration-300 ${
                      expanded[i] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              <a
                href={`https://t.me/${TG_BOT}?text=${encodeURIComponent(plan.tgText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                  icon={<Send size={12} strokeWidth={1.5} />}
                >
                  Заказать
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/50 font-light max-w-lg mx-auto">
            Доставка по Минску бесплатна.
            Все цены указаны в белорусских рублях. Оплата наличными или картой при получении.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
