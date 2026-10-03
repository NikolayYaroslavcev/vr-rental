"use client";

import { motion } from "framer-motion";
import { Users, Home, PartyPopper, Briefcase, Heart, Gift } from "lucide-react";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp, scaleIn } from "@/lib/motion";

const experiences = [
  {
    id: "friends",
    title: "Вечер с друзьями",
    description: "Соревнуйтесь в Beat Saber, играйте в мини-гольф или вместе исследуйте виртуальные миры.",
    tag: "Популярное",
    icon: Users,
    pattern:
      "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 18px)",
  },
  {
    id: "family",
    title: "Семейный досуг",
    description: "Игры, которые понравятся и детям, и взрослым. VR собирает всю семью за одним занятием.",
    tag: "Для всех",
    icon: Home,
    pattern: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
    patternSize: "18px 18px",
  },
  {
    id: "kids",
    title: "День рождения",
    description: "Дети обожают VR. Gorilla Tag, Beat Saber, аттракционы. Такой день рождения точно запомнят.",
    tag: "Праздник",
    icon: PartyPopper,
    pattern:
      "repeating-radial-gradient(circle at 25% 75%, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 20px)",
  },
  {
    id: "corporate",
    title: "Корпоратив",
    description: "VR-тимбилдинг запомнится коллегам больше, чем квест-рум. Попробуйте.",
    tag: "Тимбилдинг",
    icon: Briefcase,
    pattern:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px)",
  },
  {
    id: "date",
    title: "Свидание",
    description: "Co-op VR с партнёром. Можно поиграть вместе или по очереди. В любом случае будет весело.",
    tag: "Для пар",
    icon: Heart,
    pattern:
      "repeating-radial-gradient(circle at 75% 30%, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 22px)",
  },
  {
    id: "gift",
    title: "Подарок",
    description: "VR-аренда на несколько дней в подарок. Необычно и точно запомнится.",
    tag: "Подарок",
    icon: Gift,
    pattern: "radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
    patternSize: "26px 26px",
  },
];

export function Experiences() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experiences" className="py-20 md:py-28 lg:py-32 relative section-teal-indigo">
      <Container ref={ref} className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 md:mb-16 gap-6 lg:gap-12">
          <div className="max-w-2xl">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-extralight tracking-[-0.03em] text-polar-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              VR для любого
              <br />
              <span className="text-white/70">повода.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-md leading-[1.7] font-light text-[15px]"
          >
            Хотите отпраздновать, провести время с близкими или просто попробовать что-то новое.
            Смотрите, что подходит именно вам.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
            <motion.div
              key={exp.id}
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.15 + i * 0.08 }}
              className={`group relative overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.02] transition-all duration-200 ease-out hover:border-white/15 hover:bg-white/[0.04] ${
                i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              role="article"
              aria-label={`${exp.title} experience`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage: exp.pattern,
                  backgroundSize: exp.patternSize,
                }}
              />

              <Icon
                aria-hidden="true"
                strokeWidth={0.75}
                className={`absolute -bottom-6 -right-6 text-aurora-teal/[0.14] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:text-aurora-teal/[0.22] pointer-events-none ${
                  i === 0 ? "w-44 h-44 md:w-56 md:h-56" : "w-32 h-32 md:w-36 md:h-36"
                }`}
              />

              <div className="relative p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[280px]">
                <div>
                  <span
                    className="inline-flex px-3 py-1 rounded-full border border-white/10 text-[10px] font-medium text-white/70 uppercase"
                    style={{
                      letterSpacing: "0.16em",
                      fontFamily: "var(--font-label)",
                    }}
                  >
                    {exp.tag}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-extralight mb-3 tracking-[-0.01em] text-polar-white group-hover:text-aurora-teal transition-colors duration-500"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-[15px] text-white/70 leading-[1.7] max-w-[260px] font-light">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out translate-y-2 group-hover:translate-y-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-polar-white"
                  aria-hidden="true"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
