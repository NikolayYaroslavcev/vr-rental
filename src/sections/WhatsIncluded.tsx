"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Gamepad,
  Battery,
  BookOpen,
  Grid3X3,
  Headset,
} from "lucide-react";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp, scaleIn } from "@/lib/motion";
import { TOTAL_GAMES } from "@/sections/PopularGames";

const items = [
  {
    icon: Headset,
    name: "Meta Quest 3 (512 ГБ)",
    description: "Шлем нового поколения с разрешением 4K+ и частотой 120 Гц",
  },
  {
    icon: Headphones,
    name: "Крепление M2 Pro",
    description: "Жёсткое крепление для долгих сессий без усталости",
  },
  {
    icon: Battery,
    name: "B2 Battery pack",
    description: "Дополнительный аккумулятор для увеличения времени игры",
  },
  {
    icon: Gamepad,
    name: "Два контроллера",
    description: "Беспроводные Touch-контроллеры с тактильной отдачей",
  },
  {
    icon: Battery,
    name: "Зарядка и кабель",
    description: "Блок питания и USB-C кабель",
  },
  {
    icon: Grid3X3,
    name: `${TOTAL_GAMES}+ игр`,
    description: "Beat Saber, Superhot, Gorilla Tag и десятки других. Уже загружены.",
  },
  {
    icon: BookOpen,
    name: "Инструкция",
    description: "Пошаговое руководство и поддержка по телефону",
  },
];

export function WhatsIncluded() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 lg:py-32 relative section-teal">
      <Container ref={ref}>
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[11px] font-medium uppercase text-white/70 mb-5 block"
            style={{
              letterSpacing: "0.2em",
              fontFamily: "var(--font-label)",
            }}
          >
            Что входит
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-extralight tracking-[-0.03em] max-w-3xl mx-auto text-polar-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Всё, что нужно.
            <br />
            <span className="text-white/70">
              Ничего лишнего.
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4 md:space-y-5">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 p-8 md:p-10 rounded-[20px] border border-aurora-teal/20 bg-aurora-teal/[0.04] transition-all duration-200 ease-out hover:border-aurora-teal/30"
          >
            <div className="w-16 h-16 rounded-full border border-aurora-teal/30 flex items-center justify-center flex-shrink-0">
              <Headset size={26} strokeWidth={1.2} className="text-aurora-teal" />
            </div>
            <div>
              <h3
                className="text-lg sm:text-xl font-light mb-1.5 tracking-wide text-polar-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {items[0].name}
              </h3>
              <p className="text-sm text-white/60 leading-[1.6] font-light">
                {items[0].description}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {items.slice(1).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  variants={scaleIn}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="group flex items-start gap-5 p-8 md:p-10 rounded-[20px] border border-white/8 bg-white/[0.02] transition-all duration-200 ease-out hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ease-out group-hover:border-aurora-teal/40">
                    <Icon size={18} strokeWidth={1.2} className="text-aurora-teal/70" />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-light mb-1.5 tracking-wide text-polar-white"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-[13px] text-white/60 leading-[1.6] font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
