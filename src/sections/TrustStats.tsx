"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { TOTAL_GAMES } from "@/sections/PopularGames";

const stats = [
  { value: `${TOTAL_GAMES}+`, label: "Игр загружено" },
  { value: "от 40 Br", label: "В сутки" },
  { value: "0 Br", label: "Доставка по Минску" },
  { value: "Без ПК", label: "Шлем полностью автономный" },
];

export function TrustStats() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section className="relative border-y border-white/8 section-teal-deep">
      <Container ref={ref} className="py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "flex flex-col items-center text-center px-2 sm:px-8 border-white/8",
                i % 2 === 1 && "border-l sm:border-l-0",
                i >= 2 && "border-t sm:border-t-0",
                i > 0 && "sm:border-l",
                i === 0 && "sm:pl-0",
                i === stats.length - 1 && "sm:pr-0"
              )}
            >
              <p
                className="text-2xl md:text-3xl font-extralight text-polar-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-[11px] text-white/60 uppercase mt-2 max-w-[160px] leading-[1.4]"
                style={{ letterSpacing: "0.16em", fontFamily: "var(--font-label)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
