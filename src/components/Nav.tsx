"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Sobre", hash: "sobre" },
  { label: "Skills", hash: "skills" },
  { label: "Projetos", hash: "projetos" },
  { label: "Contato", hash: "contato" },
];

/** Ids de todas as seções da home, na ordem em que aparecem (inclui o hero). */
const SECTION_IDS = ["hero", ...LINKS.map((link) => link.hash)];

/** Link de rota (não âncora) — destacado por ser o CTA comercial. */
const CTA = { label: "Contrate seu serviço", href: "/contrate" };

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("hero");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const isHome = pathname === "/";

  // Scroll-spy: acompanha qual seção está em foco e mantém a URL (hash)
  // sincronizada com ela, sem disparar navegação/re-render de rota.
  useEffect(() => {
    if (!isHome) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const id = visible.target.id;
          setActiveHash(id);
          const nextHash = id === "hero" ? "" : `#${id}`;
          const current = window.location.hash;
          if (current !== nextHash) {
            window.history.replaceState(null, "", `${window.location.pathname}${nextHash}`);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <motion.nav
      animate={{ paddingTop: scrolled ? "0.9rem" : "1.4rem", paddingBottom: scrolled ? "0.9rem" : "1.4rem" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-100 flex flex-col items-center gap-2 border-b border-terracota/10 bg-perola/85 px-6 backdrop-blur-md sm:flex-row sm:justify-between sm:gap-0 sm:px-12"
    >
      <Link
        href={isHome ? "#hero" : "/#hero"}
        className="inline-flex items-center gap-1.5 whitespace-nowrap font-display text-base tracking-wide text-terracota sm:text-lg"
      >
        <span className="inline-flex min-w-[1.2em] items-center justify-center font-mono text-[0.85em] text-azul">
          {"{}"}
        </span>
        Arthur Souza
      </Link>
      <ul className="flex w-full flex-wrap justify-center gap-x-4 gap-y-1 sm:w-auto sm:gap-x-10">
        {LINKS.map((link) => {
          const isActive = isHome && activeHash === link.hash;
          return (
            <li key={link.hash}>
              <Link
                href={isHome ? `#${link.hash}` : `/#${link.hash}`}
                aria-current={isActive ? "location" : undefined}
                className={`text-[0.72rem] tracking-[0.12em] uppercase transition-colors hover:text-terracota hover:opacity-100 ${
                  isActive ? "text-terracota" : "text-texto/60"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={CTA.href}
            aria-current={pathname.startsWith(CTA.href) ? "page" : undefined}
            className="border-b border-terracota/40 text-[0.72rem] tracking-[0.12em] text-terracota uppercase transition-colors hover:border-terracota"
          >
            {CTA.label}
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
