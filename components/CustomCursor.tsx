"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
    };

    let raf = 0;
    const tick = () => {
      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const grow = () => {
      ring.current?.classList.add("is-hover");
      dot.current?.classList.add("is-hover");
    };
    const shrink = () => {
      ring.current?.classList.remove("is-hover");
      dot.current?.classList.remove("is-hover");
    };

    const interactive =
      "a, button, [role='button'], input, textarea, select, label";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    /* Detect dark sections under the cursor; flip cursor colors. */
    const detectDark = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const dark = el?.closest("[data-cursor='light']");
      document.documentElement.classList.toggle("cursor-on-dark", !!dark);
    };

    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = "1";
      if (ring.current) ring.current.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousemove", detectDark);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousemove", detectDark);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
      document.documentElement.classList.remove("has-custom-cursor");
      document.documentElement.classList.remove("cursor-on-dark");
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[200]"
        style={{
          width: "36px",
          height: "36px",
          marginLeft: "-18px",
          marginTop: "-18px",
          borderRadius: "9999px",
          border: "1.5px solid var(--ink)",
          background: "rgba(244,241,236,0.35)",
          transition:
            "width 0.32s cubic-bezier(0.22,1,0.36,1), height 0.32s cubic-bezier(0.22,1,0.36,1), margin 0.32s cubic-bezier(0.22,1,0.36,1), background-color 0.3s ease, opacity 0.3s ease, border-color 0.3s ease",
        }}
      />
      <div
        ref={dot}
        aria-hidden
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[201]"
        style={{
          width: "6px",
          height: "6px",
          marginLeft: "-3px",
          marginTop: "-3px",
          borderRadius: "9999px",
          background: "var(--ink)",
          boxShadow: "0 0 0 1.5px var(--bg)",
          transition:
            "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
