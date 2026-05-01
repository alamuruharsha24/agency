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

type Tile =
  | {
      kind: "photo";
      src: string;
      label: string;
      aspect: string;
      range: number;
      col: string;
    }
  | {
      kind: "typo";
      label: string;
      aspect: string;
      range: number;
      col: string;
      panel: string;
      fg: string;
      lines: string[];
      mono: string;
      tag: string;
    };

const tiles: Tile[] = [
  {
    kind: "typo",
    label: "Brand · InterviewX",
    aspect: "aspect-[4/5]",
    range: 90,
    col: "col-span-6 md:col-span-3 md:mt-24",
    panel: "bg-[#0c0c0a]",
    fg: "text-[#f4f1ec]",
    lines: ["interview", "/x"],
    mono: "iX",
    tag: "AI hiring",
  },
  {
    kind: "typo",
    label: "Brand · KisanSetra",
    aspect: "aspect-[3/4]",
    range: 30,
    col: "col-span-6 md:col-span-3",
    panel: "bg-[#ece7df]",
    fg: "text-[#0c0c0a]",
    lines: ["kisan", "setra"],
    mono: "Ks",
    tag: "Agri-ecosystem",
  },
  {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&q=85&auto=format&fit=crop",
    label: "Plate · Olivette",
    aspect: "aspect-[4/5]",
    range: 60,
    col: "col-span-6 md:col-span-3 md:mt-32",
  },
  {
    kind: "photo",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85&auto=format&fit=crop",
    label: "Room · Casa Norte",
    aspect: "aspect-[3/4]",
    range: 110,
    col: "col-span-6 md:col-span-3 md:mt-8",
  },
];

export default function ImageStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const reduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-10 py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
            <p className="col-span-12 md:col-span-3 mono text-[11px] tracking-[0.18em] uppercase text-muted">
              [ Library · Across disciplines ]
            </p>
            <h2 className="col-span-12 md:col-span-9 headline text-[clamp(2rem,5.4vw,4.4rem)] leading-[0.95] tracking-[-0.035em] text-ink max-w-[26ch]">
              Restaurants, farms, founders, and hotels —
              <span className="serif italic font-normal">
                {" "}
                shot, retouched, catalogued.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {tiles.map((t, i) => (
            <ParallaxTile
              key={i}
              tile={t}
              progress={scrollYProgress}
              reduced={!!reduced}
              index={i}
            />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-end md:justify-between border-t border-line pt-8 gap-6">
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted max-w-[44ch]">
              All photography retouched in-house. Plate, interior, product, and
              press libraries delivered as catalogued sets — across hospitality,
              agriculture, and tech.
            </p>
            <a
              href="#contact"
              className="hov-line mono text-[11px] tracking-[0.18em] uppercase whitespace-nowrap"
            >
              Commission a library →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ParallaxTile({
  tile,
  progress,
  reduced,
  index,
}: {
  tile: Tile;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
  index: number;
}) {
  const y = useTransform(progress, [0, 1], [tile.range / 2, -tile.range / 2]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 1.0,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group ${tile.col}`}
    >
      <div
        className={`relative ${tile.aspect} overflow-hidden rounded-[2px] ${
          tile.kind === "photo" ? "bg-bg-alt" : tile.panel
        }`}
      >
        {tile.kind === "photo" ? (
          <motion.div
            style={reduced ? undefined : { y }}
            className="absolute inset-[-10%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          >
            <Image
              src={tile.src}
              alt=""
              fill
              sizes="(min-width:768px) 25vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        ) : (
          <TypoTile tile={tile} />
        )}
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-muted">
          {tile.label}
        </span>
        <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </figcaption>
    </motion.figure>
  );
}

function TypoTile({
  tile,
}: {
  tile: Extract<Tile, { kind: "typo" }>;
}) {
  return (
    <div className={`absolute inset-0 ${tile.fg}`}>
      <span
        className={`absolute top-3 left-3 mono text-[9.5px] tracking-[0.18em] uppercase px-2 py-1 border border-current/40`}
      >
        {tile.tag}
      </span>
      <span
        className={`absolute top-3 right-3 mono text-[9.5px] tracking-[0.18em] uppercase opacity-60`}
      >
        ↗
      </span>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <p className="serif italic text-center text-[clamp(2rem,7.5vw,5rem)] leading-[0.88] tracking-[-0.035em] break-words">
          {tile.lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </p>
      </div>

      <div className="absolute bottom-3 inset-x-3 flex items-end justify-between">
        <span className="headline text-[clamp(1.4rem,3vw,2.2rem)] leading-[0.9] tracking-[-0.03em] opacity-90">
          {tile.mono}
        </span>
        <span className="serif italic text-[11px] opacity-55">
          FORME&amp;CO.
        </span>
      </div>
    </div>
  );
}
