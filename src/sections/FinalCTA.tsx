"use client";

import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useInView } from "@/hooks/useInView";
import { fadeUp } from "@/lib/motion";

export function FinalCTA() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden section-cta">
      <Container ref={ref} className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 text-[11px] font-medium text-white/70 uppercase mb-8"
              style={{
                letterSpacing: "0.2em",
                fontFamily: "var(--font-label)",
              }}
            >
              Готовы играть
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1] font-extralight tracking-[-0.04em] mb-8 text-polar-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Готовы попробовать
            <br />
            <span className="text-aurora-teal">виртуальную реальность?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-12 font-light"
          >
            Позвоните или напишите нам, привезём Meta Quest 3 к вам в Минск.
            Доставка бесплатная, игры загружены, залога нет.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:+375290000000" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Phone size={14} strokeWidth={1.5} />}
              >
                +375 (29) 000-00-00
              </Button>
            </a>
            <a
              href="https://t.me/vrental_demo_bot?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Meta%20Quest%203"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" icon={<Send size={14} strokeWidth={1.5} />}>
                Написать в Telegram
              </Button>
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="mt-8 text-[10px] text-white/55 uppercase"
            style={{
              letterSpacing: "0.32em",
              fontFamily: "var(--font-label)",
            }}
          >
            Бесплатная доставка по Минску, без залога, оплата при получении
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
