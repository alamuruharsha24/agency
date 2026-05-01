"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section
      id="contact"
      data-cursor="light"
      className="px-6 md:px-10 py-32 md:py-44 border-t border-line bg-ink text-bg"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="mono text-[11px] tracking-[0.18em] uppercase text-bg/55">
            [ 05 — Working with the studio ]
          </p>
        </Reveal>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="headline mt-10 md:mt-14 text-[clamp(2.6rem,9vw,9rem)] leading-[0.93] tracking-[-0.045em] max-w-[16ch]"
        >
          We take a small number of clients each season.
          <span className="serif italic font-normal"> Yours could be one.</span>
        </motion.h2>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-12">
          {/* Left: prose + quick contact tiles */}
          <Reveal className="col-span-12 md:col-span-5">
            <p className="text-[16px] md:text-[18px] leading-[1.55] text-bg/80 max-w-[40ch]">
              Tell us what you are building, what is in the way, and the date by
              which you would like it done. We will reply within two working
              days, with either a clear scope or a kind referral.
            </p>

            <div className="mt-10 grid gap-5 max-w-[42ch]">
              <a
                href="mailto:harsha@formeand.co"
                className="group flex items-baseline justify-between border-b border-bg/20 pb-3"
              >
                <span className="serif text-[22px] md:text-[26px]">
                  harsha@formeand.co
                </span>
                <span className="mono text-[11px] tracking-[0.18em] uppercase text-bg/55 transition-transform duration-500 group-hover:translate-x-1">
                  Write →
                </span>
              </a>
              <a
                href="https://cal.com/formeand-co/intro"
                target="_blank"
                rel="noopener"
                className="group flex items-baseline justify-between border-b border-bg/20 pb-3"
              >
                <span className="serif text-[22px] md:text-[26px]">
                  Book a 20-minute intro
                </span>
                <span className="mono text-[11px] tracking-[0.18em] uppercase text-bg/55 transition-transform duration-500 group-hover:translate-x-1">
                  Calendar →
                </span>
              </a>
              <a
                href="/brief"
                target="_blank"
                rel="noopener"
                className="group flex items-baseline justify-between border-b border-bg/20 pb-3"
              >
                <span className="serif text-[22px] md:text-[26px]">
                  Restaurant menu pack brief
                </span>
                <span className="mono text-[11px] tracking-[0.18em] uppercase text-bg/55 transition-transform duration-500 group-hover:translate-x-1">
                  Open ↗
                </span>
              </a>
            </div>

            <div className="mt-12 pt-6 border-t border-bg/15">
              <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-bg/55">
                Studio led by
              </p>
              <p className="mt-3 headline text-[26px] md:text-[30px] tracking-[-0.02em]">
                Harsha Vardhan
              </p>
              <p className="serif italic mt-1 text-[18px] text-bg/70">
                Principal · Founder
              </p>
            </div>
          </Reveal>

          {/* Right: contact form */}
          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-bg/55">
              [ Send a brief ]
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
