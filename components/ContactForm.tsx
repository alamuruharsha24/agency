"use client";

import { motion } from "motion/react";
import { useState } from "react";

const services = [
  "Premium website",
  "AI agents",
  "Image enhancement",
  "Restaurant menu pack",
  "Full programme",
  "Not sure yet",
];

const budgets = ["Under $5k", "$5–15k", "$15–40k", "$40k+"];

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") || "").toString();
    const email = (data.get("email") || "").toString();
    const company = (data.get("company") || "").toString();
    const message = (data.get("message") || "").toString();

    const subject = `Brief — ${company || name || "New project"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / project: ${company}`,
      `Discipline: ${service}`,
      `Range: ${budget}`,
      "",
      message,
      "",
      "— Sent from formeand.co",
    ].join("\n");

    window.location.href = `mailto:harsha@formeand.co?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => setState("sent"), 700);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-7 mt-10 md:mt-14"
      aria-label="Project enquiry form"
    >
      <Field label="Name" name="name" placeholder="Your name" />
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@studio.co"
      />
      <Field
        label="Company / project"
        name="company"
        placeholder="Maison Olivette"
      />

      <fieldset className="grid gap-3">
        <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-bg/55">
          Discipline
        </span>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setService(s)}
              className={`mono text-[11px] tracking-[0.12em] uppercase px-3 py-2 border transition-all duration-300 ${
                service === s
                  ? "bg-bg text-ink border-bg"
                  : "border-bg/30 text-bg/80 hover:border-bg/70"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="grid gap-3">
        <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-bg/55">
          Range
        </span>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => setBudget(b)}
              className={`mono text-[11px] tracking-[0.12em] uppercase px-3 py-2 border transition-all duration-300 ${
                budget === b
                  ? "bg-bg text-ink border-bg"
                  : "border-bg/30 text-bg/80 hover:border-bg/70"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2.5">
        <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-bg/55">
          What are you building? (or what is in the way)
        </span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="A few lines is enough. We will reply within two working days."
          className="bg-transparent border-b border-bg/30 focus:border-bg outline-none resize-none py-3 serif text-[20px] md:text-[22px] text-bg placeholder:text-bg/30 transition-colors duration-300"
        />
      </label>

      <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-bg/55 max-w-[42ch]">
          Replies within two working days. Direct, signed by the studio principal.
        </p>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={state !== "idle"}
          className="group inline-flex items-center justify-between gap-6 bg-bg text-ink rounded-full px-6 py-4 mono text-[11px] tracking-[0.18em] uppercase disabled:opacity-60"
        >
          <span>
            {state === "idle" && "Send the brief"}
            {state === "sending" && "Sending…"}
            {state === "sent" && "Received — thank you"}
          </span>
          <span className="block h-2 w-2 rounded-full bg-ink transition-transform duration-500 group-hover:translate-x-0.5" />
        </motion.button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2.5">
      <span className="mono text-[10.5px] tracking-[0.18em] uppercase text-bg/55">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="bg-transparent border-b border-bg/30 focus:border-bg outline-none py-3 serif text-[20px] md:text-[22px] text-bg placeholder:text-bg/30 transition-colors duration-300"
      />
    </label>
  );
}
