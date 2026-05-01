"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  range?: number; // px of vertical drift across the section
  className?: string;
};

export default function ParallaxImage({
  src,
  alt,
  sizes = "(min-width:768px) 60vw, 100vw",
  priority,
  range = 80,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-range / 2, range / 2]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-bg-alt rounded-[2px] ${className ?? ""}`}
    >
      <motion.div
        style={reduced ? undefined : { y }}
        className="absolute inset-[-8%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
