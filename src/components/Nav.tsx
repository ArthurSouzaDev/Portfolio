"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const LINKS = [
  { label: "Sobre", hash: "sobre" },
  { label: "Skills", hash: "skills" },
  { label: "Projetos", hash: "projetos" },
  { label: "Contato", hash: "contato" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const isHome = pathname === "/";

  return (
    <motion.nav
      animate={{ paddingTop: scrolled ? "0.9rem" : "1.4rem", paddingBottom: scrolled ? "0.9rem" : "1.4rem" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-100 flex items-center justify-between border-b border-terracota/10 bg-perola/85 px-6 backdrop-blur-md sm:px-12"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 whitespace-nowrap font-display text-lg tracking-wide text-terracota"
      >
        <span className="inline-flex min-w-[1.2em] items-center justify-center font-mono text-[0.85em] text-azul">
          {"{}"}
        </span>
        Arthur Souza
      </Link>
      <ul className="flex gap-6 sm:gap-10">
        {LINKS.map((link) => (
          <li key={link.hash}>
            <Link
              href={isHome ? `#${link.hash}` : `/#${link.hash}`}
              className="text-[0.72rem] tracking-[0.12em] text-texto/60 uppercase transition-colors hover:text-terracota hover:opacity-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
