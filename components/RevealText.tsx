"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** When true (default), animate on mount. When false, animate when in view. */
  mount?: boolean;
};

export default function RevealText({
  children,
  delay = 0,
  className,
  mount = true,
}: Props) {
  const reduced = useReducedMotion();
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  const motionProps = mount
    ? { initial: { y: "110%" }, animate: { y: 0 } }
    : {
        initial: { y: "110%" },
        whileInView: { y: 0 },
        viewport: { once: true, amount: 0.1 },
      };

  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.08em",
            lineHeight: "0.95",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            {...motionProps}
            transition={{
              duration: 1.0,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
