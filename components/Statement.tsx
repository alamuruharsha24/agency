"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const phrase = [
  "Designed",
  "to",
  "be",
  "noticed,",
  "built",
  "to",
  "be",
  "remembered,",
  "kept",
  "as",
  "quietly",
  "as",
  "possible.",
];

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 py-24 md:py-36 border-t border-line"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted mb-10">
          [ A working principle ]
        </p>
        <p className="headline text-[clamp(2rem,7.4vw,6.6rem)] leading-[1.05] tracking-[-0.035em] text-ink/30 max-w-[22ch]">
          {phrase.map((w, i) => (
            <Word key={i} index={i} total={phrase.length} progress={scrollYProgress}>
              {w}
            </Word>
          ))}
          <span className="serif italic font-normal text-ink/35">
            {" "}— FORME&amp;CO.
          </span>
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  index,
  total,
  progress,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="text-ink">
      {children}{" "}
    </motion.span>
  );
}
