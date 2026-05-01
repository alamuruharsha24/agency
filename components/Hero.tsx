"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import RevealText from "./RevealText";

const ticker = [
  "Premium websites",
  "AI agents",
  "Image enhancement",
  "Restaurant menu packs",
  "Brand systems",
  "Photography retouch",
  "Reservation flows",
  "Wayfinding",
];

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative pt-36 md:pt-44 pb-0 px-6 md:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] relative">
        {/* meta line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between mono text-[11px] tracking-[0.18em] uppercase text-muted relative z-20"
        >
          <span className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-ink animate-ping opacity-60" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            </span>
            Booking Q3 — 2 slots open
          </span>
          <span className="hidden md:inline">A premium digital atelier</span>
          <span className="hidden md:inline">Lisbon · Mexico City · NYC</span>
        </motion.div>

        {/* Headline */}
        <h1 className="relative z-10 headline mt-12 md:mt-20 text-[clamp(3.4rem,13.5vw,14rem)] leading-[0.88] tracking-[-0.05em] text-ink">
          <span className="block">
            <RevealText>The studio</RevealText>
          </span>
          <span className="block">
            <RevealText delay={0.05}>for brands </RevealText>
            <span className="serif italic font-normal text-ink/95">
              <RevealText delay={0.1}>that linger.</RevealText>
            </span>
          </span>
        </h1>

        {/* Floating tilted photo, anchored to top-right of headline area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -6, y: 30 }}
          animate={{ opacity: 1, scale: 1, rotate: -3, y: 0 }}
          transition={{ duration: 1.3, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block absolute right-[2%] top-[14%] w-[18vw] max-w-[280px] aspect-[3/4] z-20 shadow-[0_30px_80px_-30px_rgba(12,12,10,0.5)]"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85&auto=format&fit=crop"
              alt=""
              fill
              sizes="280px"
              className="object-cover"
              priority
            />
          </div>
          <span className="absolute -bottom-3 left-3 mono text-[10px] tracking-[0.18em] uppercase text-muted bg-bg px-2 py-1">
            01 / Olivette
          </span>
        </motion.div>

        {/* Sub block */}
        <div className="relative z-10 mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted mb-6">
              [ 00 — Introduction ]
            </p>
            <p className="text-[18px] md:text-[20px] leading-[1.45] text-ink-soft max-w-[36ch]">
              FORME&amp;CO. is a small, deliberate bench. We design quietly
              considered websites, lean AI agents, and photography-grade
              collateral for restaurants, hospitality, and founder-led brands
              who notice the last ten percent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:col-start-8 self-end"
          >
            <p className="serif text-[26px] md:text-[34px] leading-[1.15] text-ink/85">
              We design the way our clients run their kitchens — with care,
              with restraint, and a fixation on the last ten percent.
            </p>
            <a
              href="#work"
              className="hov-line mt-8 inline-flex items-center gap-3 mono text-[11px] tracking-[0.18em] uppercase"
            >
              See selected work
              <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        {/* Vertical scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="hidden md:flex absolute right-0 bottom-[14%] flex-col items-center gap-3 mono text-[10px] tracking-[0.22em] uppercase text-muted z-10"
        >
          <span className="[writing-mode:vertical-rl] rotate-180">
            Scroll · Index of work
          </span>
          <span className="block h-12 w-px bg-line relative overflow-hidden">
            {!reduced && (
              <motion.span
                className="absolute inset-x-0 top-0 h-3 bg-ink"
                animate={{ y: [-12, 48] }}
                transition={{
                  duration: 2.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            )}
          </span>
        </motion.div>
      </div>

      {/* Ticker bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="mt-24 md:mt-32 -mx-6 md:-mx-10 border-y border-line bg-bg-alt/60"
      >
        <div className="marquee-mask overflow-hidden py-5">
          <div className="marquee-track flex w-max gap-10 md:gap-16 whitespace-nowrap">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-10 md:gap-16 mono text-[12px] tracking-[0.16em] uppercase text-ink/80"
              >
                {t}
                <span className="serif text-ink/30">✶</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
