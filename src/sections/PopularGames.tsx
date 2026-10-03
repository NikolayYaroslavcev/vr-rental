"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { Container } from "@/components/Container";
import { useInView } from "@/hooks/useInView";
import { fadeUp } from "@/lib/motion";
import { games, TOTAL_GAMES } from "@/lib/games";
import { withBase } from "@/lib/site";

export { TOTAL_GAMES };

function useInitialVisibleCount() {
  const [count, setCount] = useState(8);

  useEffect(() => {
    const compute = () => {
      if (window.innerWidth >= 1024) {
        setCount(8);
      } else if (window.innerWidth >= 768) {
        setCount(9);
      } else {
        setCount(8);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return count;
}

const sortedGames = [...games].sort((a, b) => b.rating - a.rating);

const AGE_TABS = ["Все", "Для детей", "Для взрослых"] as const;

function GameCover({ image, title }: { image: string; title: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-aurora-teal/25 via-[#0f2235] to-[#0f2235]">
        <Gamepad2 className="w-10 h-10 text-white/20" strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        className={`absolute inset-0 animate-pulse bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.06] transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        ref={imgRef}
        src={withBase(image)}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </>
  );
}

export function PopularGames() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Все");
  const initialVisibleCount = useInitialVisibleCount();

  const filteredGames =
    activeTab === "Все"
      ? sortedGames
      : sortedGames.filter((g) => g.ageGroup === activeTab);
  const visibleGames = showAll ? filteredGames : filteredGames.slice(0, initialVisibleCount);

  return (
    <section id="games" className="py-20 md:py-28 lg:py-32 relative section-teal-deep">
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
            Популярные игры
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-extralight tracking-[-0.03em] max-w-3xl mx-auto text-polar-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {TOTAL_GAMES}+ игр.
            <br />
            <span className="text-white/70">
              Уже загружены и готовы к игре. Полный каталог по запросу.
            </span>
          </motion.h2>
        </div>

        <div className="flex justify-center gap-2 mb-10 md:mb-12">
          {AGE_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowAll(false); }}
              className={`whitespace-nowrap px-3 sm:px-5 py-2.5 min-h-11 rounded-full text-[10px] sm:text-[11px] uppercase font-medium tracking-[0.06em] sm:tracking-[0.14em] transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-aurora-teal/20 border border-aurora-teal/30 text-aurora-teal"
                  : "border border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
              }`}
              style={{ fontFamily: "var(--font-label)" }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {visibleGames.map((game, i) => (
            <motion.div
              key={game.id}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="group relative overflow-hidden aspect-[4/5] sm:aspect-video rounded-[20px] border border-white/6 transition-all duration-200 ease-out hover:border-white/12 hover:scale-[1.02]"
              role="article"
              aria-label={`${game.title} - ${game.genre}`}
            >
              <GameCover image={game.image} title={game.title} />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2235] via-[#0f2235]/20 to-transparent" />

              <div className="absolute inset-0 p-3.5 sm:p-5 md:p-6 flex flex-col justify-between">
                <span
                  className="inline-flex max-w-full self-start truncate px-2.5 sm:px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-[10px] font-medium text-white/70 uppercase"
                  style={{
                    letterSpacing: "0.16em",
                    fontFamily: "var(--font-label)",
                  }}
                >
                  {game.genre}
                </span>

                <div>
                  <h3
                    className="text-sm sm:text-base md:text-lg font-extralight tracking-[-0.01em] text-polar-white mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {game.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/50 font-light line-clamp-2">
                    {game.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredGames.length > initialVisibleCount && (
          <div className="mt-10 md:mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-3 rounded-full border border-white/15 text-sm text-white/80 uppercase transition-colors duration-200 hover:border-white/30 hover:text-white cursor-pointer"
              style={{ letterSpacing: "0.14em", fontFamily: "var(--font-label)" }}
            >
              {showAll ? "Свернуть список" : "Показать все игры"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
