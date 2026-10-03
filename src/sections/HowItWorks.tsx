"use client";

import { motion } from "framer-motion";
import { Package, Truck, Gamepad2, RotateCcw } from "lucide-react";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp } from "@/lib/motion";

const steps = [
  {
    icon: Package,
    step: "01",
    title: "Оставьте заявку",
    description:
      "Позвоните или напишите. Выберите даты и на какое время нужен шлем.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Доставим бесплатно",
    description:
      "Привезём VR-набор к вам в Минск. Шлем уже настроен, игры загружены.",
  },
  {
    icon: Gamepad2,
    step: "03",
    title: "Играйте",
    description:
      "Надевайте шлем и играйте. Если что-то непонятно, пишите нам, поможем.",
  },
  {
    icon: RotateCcw,
    step: "04",
    title: "Заберём",
    description:
      "Когда закончите, приедем и заберём. Никаких доплат.",
  },
];

export function HowItWorks() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-20 md:py-28 lg:py-32 relative section-teal-indigo">
      <Container ref={ref} className="relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-extralight tracking-[-0.03em] max-w-3xl mx-auto text-polar-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Четыре шага в
            <br />
            <span className="text-white/70">другое измерение.</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px" aria-hidden="true">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.15 + i * 0.12 }}
                  className="relative text-center group"
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-200 ease-out group-hover:border-aurora-teal/30 bg-white/[0.03]">
                      <Icon size={20} strokeWidth={1.2} className="text-aurora-teal/70" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 text-[9px] font-light text-white/40 tracking-wider"
                      style={{ fontFamily: "var(--font-label)" }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-extralight mb-3 tracking-[-0.01em] text-polar-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-white/70 leading-[1.7] max-w-[260px] mx-auto font-light">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
