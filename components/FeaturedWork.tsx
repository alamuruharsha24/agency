"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";

type Item = {
  title: string;
  display?: string;
  /** Multi-line wordmark; each entry renders on its own line. */
  displayLines?: string[];
  monogram?: string;
  discipline: string;
  year: string;
  href?: string;
  img?: string;
  kind: "image" | "typo";
  panel?: string;
  fg?: string;
  /** "wide" for col-7, "narrow" for col-5 — controls wordmark size. */
  variant?: "wide" | "narrow";
  span: string;
  h: string;
  meta: { label: string; value: string }[];
};

const items: Item[] = [
  {
    title: "InterviewX",
    displayLines: ["interview/x"],
    monogram: "iX",
    discipline: "AI hiring platform — full digital",
    year: "2025",
    href: "http://interviewx.tech/",
    kind: "typo",
    variant: "wide",
    panel: "bg-[#0c0c0a]",
    fg: "text-[#f4f1ec]",
    span: "col-span-12 md:col-span-7",
    h: "h-[58vh] md:h-[80vh]",
    meta: [
      { label: "Sector", value: "EdTech / HR" },
      { label: "Scope", value: "Site · App · Agent" },
      { label: "Region", value: "Global" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    title: "KisanSetra",
    displayLines: ["kisan", "setra"],
    monogram: "Ks",
    discipline: "Agri-ecosystem — marketplace, advisory, AI",
    year: "2025",
    href: "https://kisansetra.in/",
    kind: "typo",
    variant: "narrow",
    panel: "bg-[#ece7df]",
    fg: "text-[#0c0c0a]",
    span: "col-span-12 md:col-span-5",
    h: "h-[48vh] md:h-[80vh]",
    meta: [
      { label: "Sector", value: "AgriTech" },
      { label: "Scope", value: "Marketplace · AI" },
      { label: "Region", value: "India" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    title: "Maison Olivette",
    discipline: "Restaurant identity & site",
    year: "2024",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85&auto=format&fit=crop",
    kind: "image",
    variant: "narrow",
    span: "col-span-12 md:col-span-5",
    h: "h-[48vh] md:h-[68vh]",
    meta: [],
  },
  {
    title: "Casa Norte",
    discipline: "Boutique hotel — site + AI concierge",
    year: "2024",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=85&auto=format&fit=crop",
    kind: "image",
    variant: "wide",
    span: "col-span-12 md:col-span-7",
    h: "h-[48vh] md:h-[68vh]",
    meta: [],
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 md:px-10 pb-24 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
              [ 01 — Selected work ]
            </p>
            <a
              href="#case-studies"
              className="hov-line mono text-[11px] tracking-[0.18em] uppercase"
            >
              Index ↗
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {items.map((it, i) => (
            <FigureCard key={it.title} item={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FigureCard({ item, index }: { item: Item; index: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const Wrapper: React.ElementType = item.href ? "a" : "div";
  const wrapperProps = item.href
    ? { href: item.href, target: "_blank", rel: "noopener" }
    : {};

  return (
    <motion.figure
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 1.1,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group ${item.span}`}
    >
      <Wrapper {...wrapperProps} className="block">
        <div
          ref={ref}
          className={`relative ${item.h} overflow-hidden rounded-[2px] ${
            item.kind === "image" ? "bg-bg-alt" : (item.panel ?? "bg-bg-alt")
          }`}
        >
          {item.kind === "image" && item.img && (
            <>
              <motion.div
                style={reduced ? undefined : { y }}
                className="absolute inset-[-8%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                  priority={index < 2}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </>
          )}

          {item.kind === "typo" && <TypoLayer item={item} />}

          {/* Corner badges */}
          <span
            className={`absolute top-4 left-4 mono text-[10px] tracking-[0.18em] uppercase px-2 py-1 ${
              item.kind === "typo"
                ? `border ${item.fg ?? "text-ink"} border-current/40`
                : "text-bg bg-ink/85"
            }`}
          >
            {String(index + 1).padStart(2, "0")} / {item.year}
          </span>
          {item.href && (
            <span
              className={`absolute top-4 right-4 mono text-[10px] tracking-[0.18em] uppercase px-2 py-1 flex items-center gap-1.5 ${
                item.kind === "typo"
                  ? `border ${item.fg ?? "text-ink"} border-current/40`
                  : "text-bg bg-ink/85"
              }`}
            >
              <span className="relative flex h-1 w-1">
                <span className="absolute inset-0 rounded-full bg-current animate-ping opacity-70" />
                <span className="relative inline-block h-1 w-1 rounded-full bg-current" />
              </span>
              Live ↗
            </span>
          )}
          <span
            className={`absolute bottom-4 right-4 mono text-[10px] tracking-[0.18em] uppercase px-2 py-1 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 ${
              item.kind === "typo"
                ? `border ${item.fg ?? "text-ink"} border-current/40`
                : "text-bg bg-ink/85"
            }`}
          >
            {item.href ? "Open site →" : "View case →"}
          </span>
        </div>

        <figcaption className="mt-4 flex items-baseline justify-between">
          <div>
            <p className="text-[14px] tracking-[-0.01em] text-ink">
              {item.title}
            </p>
            <p className="text-[12.5px] text-muted mt-0.5">
              {item.discipline}
            </p>
          </div>
          <span className="mono text-[11px] text-muted tracking-[0.1em]">
            {item.year}
          </span>
        </figcaption>
      </Wrapper>
    </motion.figure>
  );
}

function TypoLayer({ item }: { item: Item }) {
  const fg = item.fg ?? "text-ink";
  const lines = item.displayLines ?? [item.display ?? item.title];
  const narrow = item.variant === "narrow";

  // Tight clamp so the wordmark always fits the card.
  const sizeClass = narrow
    ? "text-[clamp(2.5rem,8.5vw,6.4rem)]"
    : "text-[clamp(3rem,10.5vw,9rem)]";

  return (
    <div className={`absolute inset-0 ${fg}`}>
      {/* Top meta strip */}
      <div className="absolute top-0 inset-x-0 px-6 md:px-8 pt-16 md:pt-20 grid grid-cols-2 md:grid-cols-4 gap-4 mono text-[10.5px] tracking-[0.18em] uppercase opacity-70">
        {item.meta.map((m) => (
          <div key={m.label}>
            <p className="opacity-60">{m.label}</p>
            <p className="mt-1 opacity-100">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Center wordmark */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10">
        <div className="text-center max-w-full">
          <p
            className={`serif italic ${sizeClass} leading-[0.88] tracking-[-0.04em] break-words`}
          >
            {lines.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </p>
          <p className="mt-5 mono text-[10.5px] tracking-[0.22em] uppercase opacity-60">
            ✶ {item.discipline} ✶
          </p>
        </div>
      </div>

      {/* Hairline rule + monogram bottom-left */}
      <div className="absolute bottom-0 inset-x-0 px-6 md:px-8 pb-6 md:pb-8 flex items-end justify-between gap-4">
        <div>
          <span className="block headline text-[clamp(1.6rem,4vw,3.4rem)] leading-[0.9] tracking-[-0.04em] opacity-90">
            {item.monogram}
          </span>
          <span className="serif italic text-[13px] opacity-60">
            FORME&amp;CO. project
          </span>
        </div>
        <div className="hidden md:block flex-1 max-w-[40%] border-t border-current opacity-25 mb-3" />
      </div>
    </div>
  );
}
