"use client";

import { motion } from "framer-motion";
import { Glasses, Zap, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp } from "@/lib/motion";

const reasons = [
  {
    icon: Glasses,
    title: "Другие миры",
    description:
      "Встаньте на вершину горы или исследуйте космос. Это не экран, а полностью другое место.",
  },
  {
    icon: Users,
    title: "Весело в компании",
    description:
      "Играйте с друзьями или семьёй в мультиплеере. Beat Saber, Gorilla Tag, мини-гольф. Найдётся игра для каждого.",
  },
  {
    icon: Zap,
    title: "Попробуйте без рисков",
    description:
      "Meta Quest 3 стоит от 1500 Br. Арендуйте на день и проверьте, стоит ли оно того. Без залога.",
  },
  {
    icon: Sparkles,
    title: "Для праздников",
    description:
      "День рождения, корпоратив, вечеринка. VR точно запомнят все гости.",
  },
];

export function WhyVR() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="why-vr" className="py-20 md:py-28 lg:py-32 relative section-teal">
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
            Почему именно VR?
            <br />
            <span className="text-white/70">
              Потому что это по-другому.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="group relative p-8 md:p-10 rounded-[20px] border border-white/8 bg-white/[0.02] transition-all duration-200 ease-out hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 mb-6 transition-colors duration-200 ease-out group-hover:border-aurora-teal/40">
                  <Icon size={20} strokeWidth={1.2} className="text-aurora-teal/70" />
                </div>
                <h3
                  className="text-xl md:text-2xl font-extralight mb-3 tracking-[-0.01em] text-polar-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-[15px] text-white/70 leading-[1.7] font-light">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
