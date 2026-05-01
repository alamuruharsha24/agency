"use client";

import Reveal from "./Reveal";

const logos = [
  "OLIVETTE",
  "CASA NORTE",
  "VERGE LABS",
  "ATELIER",
  "NORDEN",
  "PAVÉ",
  "LUMEN",
  "FORGE & FIELD",
  "HOURGLASS",
  "BARR",
  "MAISON LIRE",
  "KINDRED",
];

export default function ClientLogos() {
  return (
    <section className="py-20 md:py-28 border-t border-line bg-bg-alt/40">
      <Reveal>
        <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted text-center mb-10 md:mb-14">
          [ Trusted by independent operators since 2021 ]
        </p>
      </Reveal>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max gap-16 md:gap-24 whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="headline text-[28px] md:text-[40px] tracking-[-0.02em] text-ink/85"
            >
              {l}
              <span className="serif text-ink/30 mx-6 md:mx-10">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
