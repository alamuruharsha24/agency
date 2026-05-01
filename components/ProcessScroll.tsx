"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Brief",
    line: "We listen for an hour, no deck.",
    body: "An open conversation. Goals, dates, taste, and the things you do not want said aloud. We leave with a written brief for you to mark up.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=85&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "Concept",
    line: "Two directions. One chosen. No third.",
    body: "Two strong concepts, presented in person where possible. We ask you to choose one and we keep moving. No third option is offered, by design.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&q=85&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Build",
    line: "Designers and engineers in one room.",
    body: "We work in two-week beats. A short call on Mondays, a working preview on Fridays. You see the site grow weekly, not at the end.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Refine",
    line: "The last ten percent, taken seriously.",
    body: "A dedicated week for type, motion, image, and copy refinement. Most of the difference between fine and right is made here.",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=85&auto=format&fit=crop",
  },
  {
    n: "05",
    title: "Care",
    line: "We stay on after launch.",
    body: "A quiet retainer. We watch the analytics, refresh imagery quarterly, train your agent on new menus, and pick up the phone when something breaks.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=85&auto=format&fit=crop",
  },
];

export default function ProcessScroll() {
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  // Translate horizontally as user scrolls vertically
  // 5 cards, viewport-width each → translate roughly 80%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section
      id="process"
      ref={wrap}
      className="relative h-[420vh] border-t border-line"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col bg-bg">
        {/* Header */}
        <div className="px-6 md:px-10 pt-16 md:pt-20 pb-8 md:pb-10">
          <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-6 md:gap-10">
            <Reveal className="col-span-12 md:col-span-3">
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
                [ 03 — Process ]
              </p>
            </Reveal>
            <Reveal delay={0.05} className="col-span-12 md:col-span-9">
              <h2 className="headline text-[clamp(2rem,5.6vw,4.6rem)] leading-[0.95] tracking-[-0.035em] text-ink max-w-[22ch]">
                Five quiet weeks.
                <span className="serif italic font-normal">
                  {" "}
                  Then we hand you the keys.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Horizontal track */}
        <motion.div
          style={{ x }}
          className="flex-1 flex items-center gap-8 md:gap-12 pl-6 md:pl-10 will-change-transform"
        >
          {steps.map((s) => (
            <article
              key={s.n}
              className="relative shrink-0 w-[82vw] md:w-[58vw] lg:w-[44vw] h-[64vh] md:h-[68vh] grid grid-rows-[1fr_auto] bg-bg-alt rounded-[2px] overflow-hidden border border-line"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 44vw, 80vw"
                  className="object-cover"
                />
                <span className="absolute top-5 left-5 mono text-[11px] tracking-[0.18em] uppercase text-bg bg-ink/85 px-2 py-1">
                  {s.n}
                </span>
                <span className="absolute top-5 right-5 mono text-[11px] tracking-[0.18em] uppercase text-bg bg-ink/85 px-2 py-1">
                  Step {s.n} / 05
                </span>
              </div>
              <div className="bg-bg p-6 md:p-8 grid grid-cols-12 gap-4 border-t border-line">
                <div className="col-span-12 md:col-span-5">
                  <h3 className="headline text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[0.95] tracking-[-0.03em]">
                    {s.title}
                  </h3>
                  <p className="serif mt-2 text-[18px] text-ink/75">
                    {s.line}
                  </p>
                </div>
                <p className="col-span-12 md:col-span-7 text-[14px] leading-[1.55] text-ink-soft">
                  {s.body}
                </p>
              </div>
            </article>
          ))}

          {/* End marker */}
          <div className="shrink-0 w-[40vw] md:w-[30vw] flex flex-col justify-center px-6 md:px-10">
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
              [ End of process ]
            </p>
            <p className="serif italic mt-4 text-[28px] md:text-[36px] leading-[1.15] text-ink max-w-[18ch]">
              Then a quarterly review on us — for as long as you keep us.
            </p>
            <a
              href="#contact"
              className="hov-line mt-8 inline-flex items-center gap-3 mono text-[11px] tracking-[0.18em] uppercase"
            >
              Start a brief →
            </a>
          </div>
        </motion.div>

        {/* Bottom progress bar */}
        <div className="px-6 md:px-10 pb-6 md:pb-8 pt-4">
          <div className="mx-auto max-w-[1600px] flex items-center gap-6">
            <span className="mono text-[10px] tracking-[0.18em] uppercase text-muted">
              Process
            </span>
            <div className="flex-1 h-px bg-line relative overflow-hidden">
              <motion.span
                style={{ scaleX: scrollYProgress }}
                className="absolute inset-0 bg-ink origin-left"
              />
            </div>
            <span className="mono text-[10px] tracking-[0.18em] uppercase text-muted">
              01 → 05
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
