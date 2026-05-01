"use client";

import Reveal from "./Reveal";

type Props = {
  id?: string;
  number: string;
  kicker: string;
  body: React.ReactNode;
  aside?: React.ReactNode;
};

export default function AboutBlock({ id, number, kicker, body, aside }: Props) {
  return (
    <section
      id={id}
      className="px-6 md:px-10 py-24 md:py-36 border-t border-line"
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-3">
          <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
            [ {number} — {kicker} ]
          </p>
        </Reveal>

        <Reveal delay={0.05} className="col-span-12 md:col-span-8 md:col-start-4">
          <div className="text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.18] tracking-[-0.02em] text-ink max-w-[36ch]">
            {body}
          </div>
          {aside && (
            <div className="mt-10 md:mt-14 grid grid-cols-2 gap-6 max-w-xl">
              {aside}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
