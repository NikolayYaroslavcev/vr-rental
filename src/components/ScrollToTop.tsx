"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 700);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          aria-label="Наверх"
          className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-[#162e46]/85 backdrop-blur-xl flex items-center justify-center text-white/70 transition-colors duration-200 hover:border-aurora-teal/40 hover:text-aurora-teal interactive-press cursor-pointer"
        >
          <ArrowUp size={18} strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
