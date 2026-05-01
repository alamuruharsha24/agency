import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Restaurant Menu Pack — Brief · FORME&CO.",
  description:
    "Editorial brief for the FORME&CO. restaurant menu pack — scope, process, deliverables, timeline, and rates.",
};

export default function BriefPage() {
  return (
    <main className="brief-doc bg-bg text-ink">
      {/* Document toolbar — hidden in print */}
      <div className="no-print sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
        <div className="mx-auto max-w-[920px] flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="hov-line mono text-[11px] tracking-[0.18em] uppercase"
          >
            ← FORME&amp;CO.
          </Link>
          <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-muted">
            Brief · Restaurant Menu Pack · v.2026.05
          </p>
          <PrintButton />
        </div>
      </div>

      {/* Document body */}
      <article className="mx-auto max-w-[920px] px-6 md:px-10 pt-16 md:pt-24 pb-24">
        {/* Cover */}
        <header className="mb-24 md:mb-36">
          <div className="flex items-baseline justify-between mono text-[10.5px] tracking-[0.18em] uppercase text-muted">
            <span>FORME&amp;CO. — Studio for restaurants</span>
            <span>Document 04.A</span>
          </div>

          <h1 className="mt-16 md:mt-24 headline text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-[-0.045em]">
            The Restaurant
            <br />
            <span className="serif italic font-normal">Menu Pack —</span>
            <br />a working brief.
          </h1>

          <div className="mt-16 grid grid-cols-12 gap-6">
            <p className="col-span-12 md:col-span-7 serif text-[20px] md:text-[26px] leading-[1.35] text-ink/85 max-w-[36ch]">
              A complete menu system for independent restaurants — print,
              digital, QR, wayfinding — delivered in six weeks, refreshed
              quarterly, for one fixed bill.
            </p>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-2 grid gap-3">
              <Meta label="Engagement" value="Six weeks · Quarterly retainer" />
              <Meta label="Languages" value="EN · PT · ES · FR" />
              <Meta label="Format" value="Print, digital, QR, wayfinding" />
              <Meta label="Lead time" value="From receipt of brief" />
            </div>
          </div>
        </header>

        <Section number="01" kicker="What is included">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 text-[16px] leading-[1.55]">
            {[
              [
                "Print menu",
                "A primary à la carte menu, bound or unbound, on a paper stock you choose, with a tabletop format that suits your room.",
              ],
              [
                "Tabletop & seasonal",
                "Two seasonal inserts a year, plus a tabletop card for cocktails or specials, kept in the same family.",
              ],
              [
                "Digital menu",
                "A web-based menu that opens cleanly on a phone — no PDF, no zoom — at a memorable URL on your domain.",
              ],
              [
                "QR system",
                "QR codes that point to the digital menu, designed in your typography and printed at the size you actually need.",
              ],
              [
                "Wayfinding",
                "Hours, reservations, opening, closing — a small system of signs that match the menus and the room.",
              ],
              [
                "Photography refresh",
                "Twenty plate frames re-graded each quarter, delivered as a catalogued library for press and social.",
              ],
            ].map(([t, b]) => (
              <li key={t}>
                <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-muted">
                  ↳ Deliverable
                </p>
                <p className="mt-2 headline text-[22px] tracking-[-0.02em]">
                  {t}
                </p>
                <p className="mt-2 text-ink-soft max-w-[44ch]">{b}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="02" kicker="Process">
          <ol className="grid gap-7">
            {[
              [
                "Brief",
                "An hour together. Goals, room, taste, the things you do not want to say aloud. We leave with a written brief for you to mark up.",
              ],
              [
                "Concept",
                "Two strong directions, presented in person where possible. We ask you to choose one. No third option is offered, by design.",
              ],
              [
                "Build",
                "Three weeks of design and copy. A short call on Mondays, a working preview on Fridays. You see the menus take shape weekly.",
              ],
              [
                "Refine",
                "A dedicated week for type, paper, photography, and copy refinement. Most of the difference between fine and right is made here.",
              ],
              [
                "Print & launch",
                "We organise printing with a partner press, deliver to your door, and switch on the digital menu the same week.",
              ],
              [
                "Care",
                "A quarterly review on us. We refresh the photography, update seasonal copy, and reprint with savings carried back to you.",
              ],
            ].map(([t, b], i) => (
              <li key={t} className="grid grid-cols-12 gap-6 border-t border-line pt-6">
                <div className="col-span-2 md:col-span-1 mono text-[12px] tracking-[0.18em] uppercase text-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <p className="headline text-[24px] md:text-[28px] tracking-[-0.025em]">
                    {t}
                  </p>
                </div>
                <p className="col-span-12 md:col-span-7 text-ink-soft text-[15.5px] leading-[1.55] max-w-[56ch]">
                  {b}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section number="03" kicker="Timeline">
          <Timeline />
        </Section>

        <Section number="04" kicker="Rates">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: "Primo",
                tag: "Single-site kitchens",
                price: "€7,400",
                per: "one-time",
                line: "One menu, one tabletop, one digital surface, twenty retouched plates.",
                bullets: [
                  "Six-week engagement",
                  "One concept, one round of refinement",
                  "Print partner managed",
                ],
              },
              {
                tier: "Secondo",
                tag: "Most chosen",
                price: "€12,800",
                per: "one-time + quarterly",
                line: "Full menu pack, wayfinding, digital surface, and a quarterly photography refresh.",
                bullets: [
                  "Six-week engagement",
                  "Quarterly retainer (€1,800/q)",
                  "Two languages, two seasonal inserts",
                ],
                featured: true,
              },
              {
                tier: "Dolce",
                tag: "Two- to four-room groups",
                price: "On request",
                per: "tailored",
                line: "Multi-site menu systems with shared typography, photography library, and care.",
                bullets: [
                  "Eight- to ten-week engagement",
                  "Cross-site design system",
                  "Quarterly retainer with savings",
                ],
              },
            ].map((t) => (
              <div
                key={t.tier}
                className={`relative border ${
                  t.featured
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-bg-alt/50"
                } p-7`}
              >
                <p className="mono text-[10.5px] tracking-[0.18em] uppercase opacity-65">
                  {t.tag}
                </p>
                <p className="serif italic mt-4 text-[34px] leading-[0.95]">
                  {t.tier}
                </p>
                <p className="headline text-[28px] mt-6 tracking-[-0.02em]">
                  {t.price}
                  <span className="serif italic text-[15px] opacity-65">
                    {" "}
                    / {t.per}
                  </span>
                </p>
                <p className="mt-4 text-[14.5px] leading-[1.5] opacity-85">
                  {t.line}
                </p>
                <ul className="mt-5 space-y-1.5 mono text-[10.5px] tracking-[0.16em] uppercase opacity-70">
                  {t.bullets.map((b) => (
                    <li key={b}>↳ {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-7 mono text-[10.5px] tracking-[0.18em] uppercase text-muted">
            Quoted in EUR · VAT excluded · Print, photography retouch, and one
            round of revisions included in every tier.
          </p>
        </Section>

        <Section number="05" kicker="Working terms">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-[15.5px] leading-[1.6] text-ink-soft">
            <p>
              We invoice 40% on accepting the brief, 40% at the start of build,
              20% on delivery. Quarterly retainers are invoiced at the start
              of each quarter, paid via bank transfer or Stripe.
            </p>
            <p>
              You own everything we make for you, on delivery — type set,
              photography library, printable artwork, and source files.
              Photographs we produce remain available for our own portfolio.
            </p>
            <p>
              We work with one client per discipline at a time. If your
              opening collides with another booking we are honest about the
              date — and offer a referral when needed.
            </p>
            <p>
              Engagements may pause once at no cost, for up to four weeks.
              After delivery we stay on by default for one quarter, on a
              cancel-anytime retainer.
            </p>
          </div>
        </Section>

        <Section number="06" kicker="Begin">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="serif italic text-[28px] md:text-[34px] leading-[1.2] max-w-[26ch]">
                Tell us your room, your dates, and the things you do not want
                to say aloud — we will reply within two working days.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 grid gap-3">
              <a
                href="mailto:harsha@formeand.co?subject=Restaurant%20Menu%20Pack%20brief"
                className="group flex items-baseline justify-between border-b border-line pb-3"
              >
                <span className="serif text-[22px]">harsha@formeand.co</span>
                <span className="mono text-[11px] tracking-[0.18em] uppercase text-muted group-hover:text-ink transition-colors duration-300">
                  Write →
                </span>
              </a>
              <a
                href="https://cal.com/formeand-co/intro"
                target="_blank"
                rel="noopener"
                className="group flex items-baseline justify-between border-b border-line pb-3"
              >
                <span className="serif text-[22px]">Book a 20-min intro</span>
                <span className="mono text-[11px] tracking-[0.18em] uppercase text-muted group-hover:text-ink transition-colors duration-300">
                  Calendar →
                </span>
              </a>
              <Link
                href="/"
                className="group flex items-baseline justify-between border-b border-line pb-3"
              >
                <span className="serif text-[22px]">Studio site</span>
                <span className="mono text-[11px] tracking-[0.18em] uppercase text-muted group-hover:text-ink transition-colors duration-300">
                  Visit →
                </span>
              </Link>
            </div>
          </div>
        </Section>

        {/* Colophon */}
        <footer className="mt-24 md:mt-32 pt-10 border-t border-line flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="headline text-[40px] tracking-[-0.04em]">
              FORME<span className="serif italic font-normal">&amp;</span>CO.
            </p>
            <p className="serif italic text-[18px] text-ink/70 mt-1">
              An independent studio · Lisbon · Mexico City · NYC
            </p>
          </div>
          <div className="mono text-[10.5px] tracking-[0.18em] uppercase text-muted text-right">
            <p>© {new Date().getFullYear()} FORME&amp;CO.</p>
            <p>Set in Geist &amp; Instrument Serif</p>
            <p>Document v.2026.05 — A4 · 920px</p>
          </div>
        </footer>
      </article>
    </main>
  );
}

function Section({
  number,
  kicker,
  children,
}: {
  number: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 md:mt-28 break-page">
      <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
        <p className="col-span-12 md:col-span-3 mono text-[11px] tracking-[0.18em] uppercase text-muted">
          [ {number} — {kicker} ]
        </p>
        <h2 className="col-span-12 md:col-span-9 headline text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.95] tracking-[-0.035em]">
          {kicker}.
        </h2>
      </div>
      {children}
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-line pb-2">
      <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-muted">
        {label}
      </span>
      <span className="serif italic text-[16px] text-right max-w-[20ch]">
        {value}
      </span>
    </div>
  );
}

function Timeline() {
  const weeks = [
    ["W0", "Brief — written and signed"],
    ["W1", "Concept — two directions"],
    ["W2", "Concept — chosen, refined"],
    ["W3", "Build — type, copy, layout"],
    ["W4", "Build — photography refresh"],
    ["W5", "Refine — print proofs"],
    ["W6", "Print, launch, handover"],
  ];
  return (
    <div className="grid grid-cols-7 gap-2 md:gap-3">
      {weeks.map(([w, label], i) => (
        <div
          key={w}
          className={`relative aspect-[3/4] border ${
            i === 0 || i === weeks.length - 1
              ? "bg-ink text-bg border-ink"
              : "bg-bg-alt/60 border-line"
          } p-3 flex flex-col justify-between`}
        >
          <p className="mono text-[10.5px] tracking-[0.18em] uppercase opacity-70">
            {w}
          </p>
          <p className="serif italic text-[14px] md:text-[15px] leading-[1.2]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

