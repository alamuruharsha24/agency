"use client";

import { useEffect, useState } from "react";

const cities = [
  ["Lisbon", "PT"],
  ["Mexico City", "MX"],
  ["New York", "US"],
];

const cols = [
  {
    head: "Studio",
    items: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Engagements", href: "#case-studies" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    head: "Reach us",
    items: [
      { label: "harsha@formeand.co", href: "mailto:harsha@formeand.co" },
      { label: "Press & speaking", href: "#" },
      { label: "Restaurant brief", href: "#" },
      { label: "Vendor enquiries", href: "#" },
    ],
  },
  {
    head: "Elsewhere",
    items: [
      { label: "Are.na", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Read.cv", href: "#" },
      { label: "RSS journal", href: "#" },
    ],
  },
];

export default function Footer() {
  const [year, setYear] = useState<number>(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-bg text-ink border-t border-line">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-20 md:pt-28 pb-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="headline text-[28px] md:text-[34px] tracking-[-0.04em]">
                FORME
              </span>
              <span className="serif text-[28px] md:text-[34px] -ml-1">&amp;</span>
              <span className="headline text-[28px] md:text-[34px] tracking-[-0.04em]">
                CO.
              </span>
            </div>
            <p className="mt-6 max-w-[36ch] text-[15px] leading-[1.55] text-ink-soft">
              An independent studio for restaurants, hospitality, and
              founder-led brands. We build quietly, deliver early, and stay on
              after launch.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {cities.map(([c, cc]) => (
                <div key={c}>
                  <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
                    {cc}
                  </p>
                  <p className="mt-1 text-[14px] tracking-[-0.01em]">{c}</p>
                </div>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <nav key={c.head} className="col-span-6 md:col-span-2 md:col-start-auto">
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted mb-5">
                {c.head}
              </p>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="hov-line text-[14px] tracking-[-0.005em] text-ink"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-12 md:col-span-1 md:col-start-12 flex md:justify-end">
            <a
              href="#top"
              className="hov-line mono text-[11px] tracking-[0.18em] uppercase"
            >
              Top ↑
            </a>
          </div>
        </div>

        {/* huge wordmark */}
        <div className="mt-20 md:mt-28 select-none">
          <p className="headline leading-[0.86] tracking-[-0.05em] text-ink/90 text-[clamp(4rem,18vw,16rem)]">
            FORME<span className="serif italic font-normal text-ink/80">&amp;</span>
            CO.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mono text-[11px] tracking-[0.16em] uppercase text-muted">
          <p>© {year} FORME&amp;CO. — Led by Harsha Vardhan</p>
          <p>Crafted with restraint. Photography by partners.</p>
          <p>v.2026.05</p>
        </div>
      </div>
    </footer>
  );
}
