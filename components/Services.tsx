"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { useState } from "react";

const services = [
  {
    n: "01",
    title: "Websites",
    line: "Premium · Clean · Fast",
    keywords: ["Strategy", "Architecture", "Design", "Build", "Care"],
    body: "Editorial-grade marketing sites and reservation surfaces. Hand-built on modern stacks, hosted on the edge, Lighthouse 100 on every page.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=85&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "AI Agents",
    line: "Operator-grade · Quietly useful",
    keywords: ["Concierge", "Ops", "Email", "Voice", "Tooling"],
    body: "Custom agents trained on your menus, manuals, and tone. Booking, reception, internal ops. We ship the agent, the runbook, and the dashboards to keep an eye on it.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=85&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Image & AI Visuals",
    line: "Editorial retouch · AI interior staging · Real estate",
    keywords: [
      "Plates",
      "Interiors",
      "Real estate",
      "AI staging",
      "Product",
      "Library",
    ],
    body: "Editorial retouch on real photography, plus AI-generated interior staging and real-estate visuals that close the gap between listing-grade and magazine-grade. Used by hotels, restaurants, and brokers to lift sales.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=85&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Restaurant Menu Packs",
    line: "Print-ready · Photographed · Refreshed quarterly",
    keywords: ["Menu", "Tabletop", "Wayfinding", "Print", "Digital"],
    body: "A complete menu system for independent restaurants — print, digital, QR, wayfinding — with a quarterly photography refresh on retainer. One bill, one bench, one taste.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85&auto=format&fit=crop",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative px-6 md:px-10 py-24 md:py-36 border-t border-line bg-bg-alt/40 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
            <p className="col-span-12 md:col-span-3 mono text-[11px] tracking-[0.18em] uppercase text-muted">
              [ 04 — Disciplines ]
            </p>
            <h2 className="col-span-12 md:col-span-9 headline text-[clamp(2.4rem,7.5vw,6.4rem)] leading-[0.93] tracking-[-0.04em] text-ink max-w-[18ch]">
              Four disciplines.
              <span className="serif italic font-normal"> One bench.</span>
              <br />
              <span className="text-ink/55">Run end-to-end, in-house.</span>
            </h2>
          </div>
        </Reveal>

        {/* Services list — each is a full-width row */}
        <ul
          className="border-t border-ink/15"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s, i) => (
            <li
              key={s.n}
              className="group relative border-b border-ink/15"
              onMouseEnter={() => setActive(i)}
            >
              <Reveal delay={i * 0.04}>
                <a
                  href="#contact"
                  className="grid grid-cols-12 gap-6 md:gap-10 items-center py-8 md:py-12 transition-colors duration-700"
                >
                  <span className="col-span-2 md:col-span-1 mono text-[12px] tracking-[0.18em] uppercase text-muted group-hover:text-ink transition-colors duration-500">
                    {s.n}
                  </span>

                  <span className="col-span-10 md:col-span-5">
                    <span className="block headline text-[clamp(2rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.035em] text-ink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left group-hover:translate-x-2">
                      {s.title}
                    </span>
                    <span className="mt-2 block serif text-[18px] md:text-[20px] text-ink/70">
                      {s.line}
                    </span>
                  </span>

                  <span className="hidden md:block col-span-5">
                    <span className="block text-[14px] leading-[1.55] text-ink-soft max-w-[42ch]">
                      {s.body}
                    </span>
                    <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                      {s.keywords.map((k) => (
                        <span
                          key={k}
                          className="mono text-[10.5px] tracking-[0.16em] uppercase text-muted"
                        >
                          {k}
                        </span>
                      ))}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className="col-span-12 md:col-span-1 hidden md:flex items-center justify-end mono text-[12px] tracking-[0.18em] uppercase text-muted group-hover:text-ink transition-all duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Floating preview image — pinned to viewport, follows active row */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{
            opacity: active !== null ? 1 : 0,
            y: active !== null ? 0 : 30,
            scale: active !== null ? 1 : 0.95,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none hidden lg:block fixed top-1/2 right-12 -translate-y-1/2 z-40 w-[22vw] max-w-[340px] aspect-[3/4] shadow-[0_30px_80px_-30px_rgba(12,12,10,0.55)]"
        >
          {services.map((s, i) => (
            <Image
              key={s.n}
              src={s.img}
              alt=""
              fill
              sizes="340px"
              className={`object-cover transition-opacity duration-500 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {active !== null && (
            <span className="absolute -bottom-3 left-3 mono text-[10px] tracking-[0.18em] uppercase text-muted bg-bg px-2 py-1">
              {services[active].n} / {services[active].title}
            </span>
          )}
        </motion.div>

        {/* Footnote */}
        <Reveal delay={0.1}>
          <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 border-t border-line pt-10">
            <p className="col-span-12 md:col-span-3 mono text-[11px] tracking-[0.18em] uppercase text-muted">
              [ Engagements ]
            </p>
            <p className="col-span-12 md:col-span-6 serif text-[20px] md:text-[24px] leading-[1.4] text-ink/85 max-w-[44ch]">
              Most engagements run six to twelve weeks, end-to-end. Retainers
              for menu packs, image libraries, and agent care are quarterly.
            </p>
            <a
              href="#contact"
              className="col-span-12 md:col-span-3 self-end inline-flex items-center justify-between mono text-[11px] tracking-[0.18em] uppercase border-b border-ink/40 pb-2 hov-line"
            >
              <span>Request the rate card</span>
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
