import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AboutBlock from "@/components/AboutBlock";
import ClientLogos from "@/components/ClientLogos";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ProcessScroll from "@/components/ProcessScroll";
import ImageStrip from "@/components/ImageStrip";
import Statement from "@/components/Statement";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <FeaturedWork />

      <Statement />

      <AboutBlock
        id="studio"
        number="02"
        kicker="Studio"
        body={
          <>
            We started out as a two-person bench in a borrowed kitchen. Five
            years on, we are a small team of designers, engineers, and a
            photographer — still small on purpose, still allergic to busywork,
            still picking up our own phones.
          </>
        }
        aside={
          <>
            <div>
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
                Founded
              </p>
              <p className="mt-2 serif text-[22px]">2021 — Lisbon</p>
            </div>
            <div>
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
                Bench
              </p>
              <p className="mt-2 serif text-[22px]">7 humans</p>
            </div>
            <div>
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
                Engagements / yr
              </p>
              <p className="mt-2 serif text-[22px]">≤ 14</p>
            </div>
            <div>
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-muted">
                Languages
              </p>
              <p className="mt-2 serif text-[22px]">EN · PT · ES · FR</p>
            </div>
          </>
        }
      />

      <ClientLogos />

      <ImageStrip />

      <CaseStudies />

      <ProcessScroll />

      <AboutBlock
        number="06"
        kicker="Approach"
        body={
          <>
            Most of our work arrives by referral, from the host of a dinner we
            once designed a menu for, or the founder we built a site with two
            years ago. We treat each engagement as the only one we are
            running — because we keep the calendar small enough that it is
            true.
          </>
        }
      />

      <Services />

      <CTA />

      <Footer />
    </main>
  );
}
