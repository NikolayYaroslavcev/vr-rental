"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp } from "@/lib/motion";
import { faqItems } from "@/lib/faq";

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/6 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 md:py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className="text-base md:text-lg font-extralight pr-8 group-hover:text-aurora-teal/80 transition-colors duration-300 tracking-[-0.01em] text-polar-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {item.question}
        </span>
        <span className="w-10 h-10 rounded-full border border-white/8 flex items-center justify-center flex-shrink-0 group-hover:border-white/15 transition-colors duration-200 ease-out">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Minus size={12} strokeWidth={1.2} className="text-white/50" />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={12} strokeWidth={1.2} className="text-white/50" />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-white/70 leading-[1.7] max-w-xl font-light text-[14px]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 relative section-teal-indigo">
      <Container ref={ref}>
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          <div className="lg:w-2/5 mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] font-extralight tracking-[-0.03em] text-polar-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Вопросы?
              <br />
              <span className="text-white/70">Ответы.</span>
            </motion.h2>
          </div>

          <div className="lg:w-3/5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="border-t border-white/6"
              role="list"
            >
              {faqItems.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
