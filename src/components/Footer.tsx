"use client";

import Link from "next/link";
import { useCallback } from "react";
import { Container } from "./Container";
import { isHomePath, withBase } from "@/lib/site";

const TG_LINK =
  "https://t.me/vrental_demo_bot?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20Meta%20Quest%203";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Сервис: [
    { label: "Как это работает", href: withBase("/#how-it-works") },
    { label: "Цены", href: withBase("/#pricing") },
    { label: "Игры", href: withBase("/#games") },
  ],
  Впечатления: [
    { label: "С друзьями", href: withBase("/#why-vr") },
    { label: "С семьёй", href: withBase("/#why-vr") },
    { label: "Для праздников", href: withBase("/#why-vr") },
  ],
  Поддержка: [
    { label: "Вопросы", href: withBase("/#faq") },
    { label: "Позвонить", href: "tel:+375290000000" },
    { label: "Telegram", href: TG_LINK },
  ],
};

export function Footer() {
  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      isHomePath(window.location.pathname) &&
      e.button === 0 &&
      !e.ctrlKey &&
      !e.metaKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="border-t border-white/5 section-teal-deep">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div>
            <Link href="/" onClick={handleLogoClick} className="inline-flex items-center mb-6" aria-label="VRental home">
              <span
                className="text-sm uppercase font-medium"
                style={{
                  letterSpacing: "0.2em",
                  fontFamily: "var(--font-label)",
                }}
              >
                <span className="text-aurora-teal">VR</span>
                <span className="text-polar-white">ental</span>
              </span>
            </Link>
            <p className="text-sm text-white/55 leading-[1.7] max-w-[240px] font-light">
              Аренда Meta Quest 3 в Минске. Доставка бесплатная,
              игры загружены, залога нет.
            </p>
            <p className="text-sm text-white/55 mt-4 font-light">
              Минск
            </p>
            <a
              href="tel:+375290000000"
              className="text-sm text-aurora-teal/70 mt-2 font-light inline-block hover:text-aurora-teal transition-colors"
            >
              +375 (29) 000-00-00
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-[11px] font-medium text-white/50 mb-5 uppercase"
                style={{
                  letterSpacing: "0.2em",
                  fontFamily: "var(--font-label)",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs text-white/45 hover:text-polar-white transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-[11px] text-white/40 uppercase"
              style={{
                letterSpacing: "0.16em",
                fontFamily: "var(--font-label)",
              }}
            >
              &copy; {new Date().getFullYear()} VRental. Все права защищены.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy"
                className="text-[11px] text-white/45 hover:text-polar-white transition-colors duration-300 uppercase"
                style={{
                  letterSpacing: "0.16em",
                  fontFamily: "var(--font-label)",
                }}
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="text-[11px] text-white/45 hover:text-polar-white transition-colors duration-300 uppercase"
                style={{
                  letterSpacing: "0.16em",
                  fontFamily: "var(--font-label)",
                }}
              >
                Условия использования
              </Link>
            </div>
          </div>
          <p className="text-xs text-white/30 font-light text-center sm:text-left">
            Демо-проект. Контакты и реквизиты вымышленные.
          </p>
        </div>
      </Container>
    </footer>
  );
}
