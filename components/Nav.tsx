"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter,background-color,border-color] duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-line/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#top"
          className="flex items-baseline gap-2 select-none"
          aria-label="FORME&CO. home"
        >
          <span className="headline text-[20px] md:text-[22px] tracking-[-0.04em]">
            FORME
          </span>
          <span className="serif text-[20px] md:text-[22px] -ml-1">&amp;</span>
          <span className="headline text-[20px] md:text-[22px] tracking-[-0.04em]">
            CO.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hov-line text-[13px] tracking-[0.02em] text-ink/85"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink text-bg px-4 py-2 text-[12px] tracking-[0.08em] uppercase transition-all duration-500 hover:bg-ink-soft"
        >
          <span>Start a project</span>
          <span
            aria-hidden
            className="block h-1.5 w-1.5 rounded-full bg-bg transition-transform duration-500 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.header>
  );
}
