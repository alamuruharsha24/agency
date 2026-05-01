"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";

type Case = {
  n: string;
  title: string;
  display?: string;
  displayLines?: string[];
  monogram?: string;
  discipline: string;
  deliverables: string;
  summary: string;
  kind: "image" | "typo";
  panel?: string;
  fg?: string;
  img?: string;
  href?: string;
  meta?: { label: string; value: string }[];
};

const cases: Case[] = [
  {
    n: "01",
    title: "InterviewX",
    displayLines: ["interview/x"],
    monogram: "iX",
    discipline: "AI hiring platform",
    deliverables: "Site · App UX · Interview agent · Recruiter dashboard",
    summary:
      "An AI-led interview platform for fast-growing teams. We shipped the marketing site, the candidate flow, the recruiter dashboard, and the interview agent — end to end.",
    kind: "typo",
    panel: "bg-[#0c0c0a]",
    fg: "text-[#f4f1ec]",
    href: "http://interviewx.tech/",
    meta: [
      { label: "Sector", value: "EdTech / HR" },
      { label: "Year", value: "2025" },
      { label: "Region", value: "Global" },
      { label: "Status", value: "Live" },
    ],
  },
  {
    n: "02",
    title: "KisanSetra",
    displayLines: ["kisan", "setra"],
    monogram: "Ks",
    discipline: "Agri-ecosystem",
    deliverables: "Marketplace · Advisory · AI crop assistant · Print",
    summary:
      "A farmer-first ecosystem connecting growers, advisors, and buyers across India. Marketplace, vernacular advisory, and an AI assistant trained on regional crop data.",
    kind: "typo",
    panel: "bg-[#ece7df]",
    fg: "text-[#0c0c0a]",
    href: "https://kisansetra.in/",
    meta: [
      { label: "Sector", value: "AgriTech" },
      { label: "Year", value: "2025" },
      { label: "Region", value: "India" },
      { label: "Status", value: "Live" },
    ],
  },
  {
    n: "03",
    title: "Maison Olivette",
    discipline: "Restaurant",
    deliverables: "Brand · Site · Menu pack · Image enhancement",
    summary:
      "A second-generation Provençal kitchen relaunched with a quieter identity, a single-page reservation site, and a forty-image library of refreshed plate photography.",
    kind: "image",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Casa Norte",
    discipline: "Boutique hotel",
    deliverables: "Site · AI concierge · Photography retouch · AI interior staging",
    summary:
      "Twelve-room property in Mexico City. We built the booking surface, trained an in-house concierge agent on the F&B menu, and produced AI-staged interior frames for press and listings.",
    kind: "image",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1800&q=85&auto=format&fit=crop",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="px-6 md:px-10 py-24 md:py-36 border-t border-line"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
            <p className="col-span-12 md:col-span-3 mono text-[11px] tracking-[0.18em] uppercase text-muted">
              [ 02 — Engagements ]
            </p>
            <h2 className="col-span-12 md:col-span-9 headline text-[clamp(2rem,5.5vw,4.4rem)] leading-[1] tracking-[-0.035em] text-ink max-w-[20ch]">
              A small number of engagements per year, taken end-to-end —
              <span className="serif italic font-normal">
                {" "}
                across hospitality, agriculture, and AI.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {cases.map((c, i) => (
            <article
              key={c.n}
              className={`grid grid-cols-12 gap-6 md:gap-10 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-12 md:col-span-7 [direction:ltr] group"
              >
                <a
                  href={c.href ?? "#contact"}
                  target={c.href ? "_blank" : undefined}
                  rel={c.href ? "noopener" : undefined}
                  className="block"
                >
                  <div
                    className={`relative h-[60vh] md:h-[78vh] overflow-hidden rounded-[2px] ${
                      c.kind === "image" ? "bg-bg-alt" : (c.panel ?? "bg-bg-alt")
                    }`}
                  >
                    {c.kind === "image" && c.img && (
                      <Image
                        src={c.img}
                        alt={c.title}
                        fill
                        sizes="(min-width:768px) 60vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                    )}
                    {c.kind === "typo" && <TypoCase c={c} />}

                    {c.href && (
                      <span
                        className={`absolute top-4 left-4 mono text-[10px] tracking-[0.18em] uppercase px-2 py-1 flex items-center gap-1.5 ${
                          c.kind === "typo"
                            ? `border ${c.fg ?? "text-ink"} border-current/40`
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
                  </div>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1.1,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="col-span-12 md:col-span-5 [direction:ltr]"
              >
                <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
                  {c.n} / {c.discipline}
                </p>
                <h3 className="headline mt-4 text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.95] tracking-[-0.035em] text-ink">
                  {c.title}
                </h3>
                <p className="serif mt-5 text-[20px] md:text-[22px] text-ink/80 max-w-[36ch] leading-[1.4]">
                  {c.summary}
                </p>
                <div className="divider mt-8" />
                <p className="mt-5 text-[12.5px] tracking-[0.02em] text-muted">
                  {c.deliverables}
                </p>
                <a
                  href={c.href ?? "#contact"}
                  target={c.href ? "_blank" : undefined}
                  rel={c.href ? "noopener" : undefined}
                  className="hov-line mt-8 inline-block mono text-[11px] tracking-[0.18em] uppercase"
                >
                  {c.href ? "Visit live site →" : "Read the engagement →"}
                </a>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TypoCase({ c }: { c: Case }) {
  const fg = c.fg ?? "text-ink";
  const lines = c.displayLines ?? [c.display ?? c.title];
  const multi = lines.length > 1;
  const sizeClass = multi
    ? "text-[clamp(3rem,11vw,9.5rem)]"
    : "text-[clamp(3rem,10vw,9.5rem)]";

  return (
    <div className={`absolute inset-0 ${fg}`}>
      <div className="absolute top-0 inset-x-0 px-8 md:px-10 pt-14 md:pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 mono text-[10.5px] tracking-[0.18em] uppercase opacity-70">
        {(c.meta ?? []).map((m) => (
          <div key={m.label}>
            <p className="opacity-60">{m.label}</p>
            <p className="mt-1 opacity-100">{m.value}</p>
          </div>
        ))}
      </div>

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
          <p className="mt-5 mono text-[10.5px] tracking-[0.22em] uppercase opacity-65">
            ✶ {c.discipline} ✶ {c.n} ✶
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 px-8 md:px-10 pb-7 md:pb-9 flex items-end justify-between gap-4">
        <span className="block headline text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-[-0.04em] opacity-90">
          {c.monogram}
        </span>
        <span className="hidden md:block flex-1 max-w-[40%] border-t border-current opacity-25 mb-3" />
      </div>
    </div>
  );
}
