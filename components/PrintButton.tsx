"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="mono text-[11px] tracking-[0.18em] uppercase border border-ink/40 px-3 py-1.5 hover:bg-ink hover:text-bg transition-colors duration-300"
    >
      Save as PDF
    </button>
  );
}
