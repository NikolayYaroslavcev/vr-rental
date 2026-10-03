"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { withBase } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, #75cdd6 0%, #5ab8c4 20%, #2d7a8a 40%, #1a4a5c 60%, #0d2a3a 80%, #0a1a2a 100%)",
        }}
      />

      <div className="hidden xl:block absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[60vw] h-[100vh]"
          style={{
            background:
              "radial-gradient(ellipse at 75% 35%, rgba(132,205,238,0.5) 0%, rgba(117,205,214,0.2) 30%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,26,42,0.85) 0%, rgba(10,26,42,0.4) 30%, transparent 55%)",
          }}
        />
      </div>

      <div
        className="xl:hidden absolute inset-0 pointer-events-none"
        style={{ background: "rgba(10,26,42,0.45)" }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,26,42,0.7) 0%, transparent 100%)",
        }}
      />

      <div className="hidden xl:block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-0 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative"
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(132,205,238,0.3) 0%, transparent 50%)",
                }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div
                  className="absolute inset-0 scale-[1.8] opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(132,205,238,0.4) 0%, transparent 50%)",
                    filter: "blur(50px)",
                  }}
                />
                <div
                  className="relative w-[380px] h-[380px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px]"
                  style={{
                    maskImage: "radial-gradient(ellipse at 50% 50%, black 55%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 55%, transparent 85%)",
                  }}
                >
                  <Image
                    src={withBase("/images/image.webp")}
                    alt="Шлем виртуальной реальности Meta Quest 3"
                    fill
                    sizes="(max-width: 639px) 380px, 620px"
                    className="relative z-10 object-contain"
                    style={{
                      filter: "drop-shadow(0 0 60px rgba(117,205,214,0.25))",
                    }}
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Container className="relative z-10 flex flex-col min-h-[100dvh] py-24 md:py-32 lg:py-40">
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="mb-8"
            >
              <span
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-medium text-white/70 uppercase"
                style={{ letterSpacing: "0.32em", fontFamily: "var(--font-label)" }}
              >
                Минск
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.1 }}
              className="text-[clamp(2.8rem,7.5vw,5rem)] leading-[1] font-extralight tracking-[-0.04em] mb-10 text-polar-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              VR напрокат
              <br />
              <span className="text-white/70">в Минске</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", duration: 0.5, bounce: 0, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 leading-[1.7] max-w-lg mb-14 font-light"
            >
              Meta Quest 3 с доставкой по Минску. Игры загружены,
              шлем настроен, залога нет. Звоните или пишите.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", duration: 0.5, bounce: 0, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="tel:+375290000000" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<Phone size={14} strokeWidth={1.5} />}
                >
                  Заказать по телефону
                </Button>
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Как это работает
                </Button>
              </a>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
