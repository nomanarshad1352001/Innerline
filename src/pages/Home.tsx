import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Asterisk, ChevronDown, ShieldCheck } from "lucide-react";
import { MaskReveal, Reveal, Fade, ease } from "../components/Reveal";
import { Marquee } from "../components/Marquee";
import { CountUp } from "../components/CountUp";
import { SectionHeading } from "../components/SectionHeading";
import { TestimonialRail } from "../components/TestimonialRail";
import { AssessmentSection } from "../components/AssessmentSection";
import { CASE_STUDIES, CLIENTS, IMG, SECTORS, SERVICES } from "../data/content";

/* ————————————————— Hero ————————————————— */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* backdrop */}
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease }}
          src={IMG.heroPipes}
          alt="Large diameter pipes staged for installation at an Innerline job site, heavy machinery silhouetted at sunset"
          className="h-[115%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </motion.div>

      {/* certification chips */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-wrap gap-2 px-5 pt-32 md:px-10"
      >
        {["Woman-Owned Business", "CPUC GO 156 Diverse Supplier", "NASSCO Certified"].map((b, i) => (
          <Reveal key={b} delay={0.9 + i * 0.12} y={16}>
            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-ink/50 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/85 backdrop-blur-md">
              <ShieldCheck className="size-3.5 text-sprout" />
              {b}
            </span>
          </Reveal>
        ))}
      </motion.div>

      {/* headline */}
      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-1 flex-col justify-center px-5 md:px-10">
        <h1 className="max-w-5xl font-display text-[clamp(2.7rem,7.4vw,6.4rem)] leading-[1.0] font-light tracking-tight text-cream">
          <MaskReveal delay={0.35}>Keep your pipes,</MaskReveal>
          <MaskReveal delay={0.47}>drains &amp; underground</MaskReveal>
          <MaskReveal delay={0.59}>
            systems <em className="font-normal not-italic text-sprout">clean.</em>
          </MaskReveal>
        </h1>
        <Reveal delay={0.8}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            One trusted crew for CCTV inspection, industrial cleaning, trenchless repair and
            environmental response — serving industrial, utility, municipal and commercial sites
            across Southern California.
          </p>
        </Reveal>
        <Reveal delay={0.95}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-sprout px-8 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-cream"
            >
              Request a Free Assessment
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm transition-all duration-300 hover:border-sprout hover:text-sprout"
            >
              View Services
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </motion.div>

      {/* stat rail */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 1, ease }}
        className="relative z-10 border-t border-white/10 bg-ink/40 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-[92rem] grid-cols-2 divide-x divide-white/10 px-5 md:grid-cols-4 md:px-10">
          {[
            { v: "4", l: "Core Service Lines" },
            { v: "72″", l: "Max Pipe Diameter Cleaned" },
            { v: "PACP · MACP · LACP", l: "NASSCO Certified Crews" },
            { v: "24/7", l: "Emergency Response" },
          ].map((s) => (
            <div key={s.l} className="px-5 py-6 first:pl-0 md:py-7">
              <div className="font-display text-xl font-light text-cream md:text-2xl">{s.v}</div>
              <div className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-steel">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-full right-6 mb-3 hidden items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream/50 md:flex">
          Riverside Fleet — Combination CCTV / Vacuum Unit
          <ChevronDown className="size-3 animate-bounce text-sprout" />
        </div>
      </motion.div>
    </section>
  );
}

/* ————————————————— Cert ticker + trusted by ————————————————— */

function CertTicker() {
  const items = ["ISNetworld Member", "WBE Certified", "NASSCO PACP · MACP · LACP", "CPUC GO 156", "CA Certified Small Business", "24-Hr Emergency Response"];
  return (
    <div>
      <div className="hazard h-1.5" />
      <div className="bg-sprout py-3.5">
        <Marquee fast>
          {items.map((t) => (
            <span key={t} className="mx-5 flex items-center gap-5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ink">
              {t} <Asterisk className="size-4" />
            </span>
          ))}
        </Marquee>
      </div>
      <div className="hazard h-1.5" />
    </div>
  );
}

function TrustedBy() {
  return (
    <section className="border-b border-navy-900/10 bg-cream py-14">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <Fade>
          <div className="mb-8 text-center font-mono text-[0.62rem] uppercase tracking-[0.35em] text-navy-900/45">
            Trusted by California's most demanding owners
          </div>
        </Fade>
        <Marquee mask className="opacity-90">
          {CLIENTS.map((c) => (
            <span key={c} className="mx-8 whitespace-nowrap font-display text-xl font-light tracking-tight text-navy-900/55 transition-colors hover:text-navy-950 md:text-2xl">
              {c}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

/* ————————————————— Services ————————————————— */

function ServicesChapter() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                From first inspection
                <br />
                to <em className="font-normal not-italic text-sprout-deep">final cleanup.</em>
              </>
            }
            description="Four service lines, one crew — so you're not coordinating separate vendors for inspection, cleaning, repair and compliance."
          />
          <Reveal delay={0.25}>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-navy-900 transition-colors hover:text-sprout-deep"
            >
              All services
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={0.05 * i}>
              <Link
                to={`/services#${s.id}`}
                className="group grid overflow-hidden rounded-3xl border border-navy-900/10 bg-white transition-all duration-500 hover:border-sprout-deep/40 hover:shadow-2xl hover:shadow-navy-950/10 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className={`relative h-64 overflow-hidden lg:h-auto ${i % 2 ? "lg:order-2" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-3.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-sprout backdrop-blur-sm">
                    {s.index} — {s.line}
                  </span>
                </div>
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <h3 className="font-display text-2xl font-light tracking-tight text-navy-950 transition-colors duration-300 group-hover:text-sprout-deep md:text-[2rem]">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-navy-900/60">
                      {s.short}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.features.slice(0, 4).map((f) => (
                        <span key={f} className="rounded-full border border-navy-900/12 px-3 py-1.5 text-[0.68rem] font-medium text-navy-900/65">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-navy-900/10 pt-5">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-navy-900/45">
                      {s.stats[0].value} · {s.stats[0].label}
                    </span>
                    <span className="grid size-11 place-items-center rounded-full border border-navy-900/15 text-navy-950 transition-all duration-500 group-hover:border-sprout-deep group-hover:bg-sprout-deep group-hover:text-ink">
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Stats band ————————————————— */

function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-20 md:py-24">
      <div className="blueprint-dark absolute inset-0" />
      <img
        src={IMG.ringTunnel}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-25 [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-[92rem] gap-10 px-5 md:grid-cols-4 md:px-10">
        {[
          { to: 4, suffix: "", label: "Core service lines, one crew" },
          { to: 72, suffix: "″", label: "Maximum pipe diameter cleaned" },
          { to: 2, suffix: "M+", label: "Linear feet televised & reviewed" },
          { to: 28, suffix: "", label: "Years serving California" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="border-l-2 border-sprout/40 pl-6">
              <div className="font-display text-6xl font-light text-cream md:text-7xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-steel">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— Sectors ————————————————— */

function SectorsTeaser() {
  return (
    <section className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title={
              <>
                Built for six kinds
                <br />
                of <em className="font-normal not-italic text-sprout-deep">operations.</em>
              </>
            }
            description="Industrial, utility, municipal and commercial clients across the Inland Empire, Long Beach and the Central Valley."
          />
          <Reveal delay={0.25}>
            <Link
              to="/who-we-serve"
              className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-navy-900 transition-colors hover:text-sprout-deep"
            >
              Every sector
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s, i) => (
            <Reveal key={s.id} delay={0.06 * i}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-sprout-deep/40 hover:shadow-xl hover:shadow-navy-950/8">
                <div className="absolute -right-6 -top-6 font-display text-[6rem] font-light leading-none text-navy-900/5 transition-colors duration-500 group-hover:text-sprout-deep/15">
                  0{i + 1}
                </div>
                <span className="relative grid size-12 place-items-center rounded-xl bg-navy-950 text-sprout transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="size-5" />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-normal tracking-tight text-navy-950">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-navy-900/60">{s.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Case studies preview ————————————————— */

function CasePreview() {
  const featured = CASE_STUDIES.filter((c) => c.featured)[0];
  const rest = CASE_STUDIES.filter((c) => !c.featured).slice(0, 2);

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[92rem] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            dark
            eyebrow="Case Studies"
            title={
              <>
                Work our clients
                <br />
                <em className="font-normal not-italic text-sprout">trust us with.</em>
              </>
            }
          />
          <Reveal delay={0.25}>
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-sprout"
            >
              All case studies
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* featured */}
          <Reveal>
            <Link to={`/case-studies#${featured.id}`} className="group relative block h-full min-h-[26rem] overflow-hidden rounded-3xl">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                <span className="mb-4 w-fit rounded-full bg-sprout px-3.5 py-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.2em] text-ink">
                  Featured — {featured.client}
                </span>
                <h3 className="max-w-md font-display text-2xl font-light tracking-tight text-cream md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/65">{featured.summary}</p>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-6">
            {rest.map((c, i) => (
              <Reveal key={c.id} delay={0.12 + i * 0.1}>
                <Link
                  to={`/case-studies#${c.id}`}
                  className="group grid h-full grid-cols-[8.5rem_1fr] overflow-hidden rounded-3xl border border-white/10 bg-navy-900/50 transition-colors duration-500 hover:border-sprout/40 sm:grid-cols-[12rem_1fr]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-7">
                    <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-sprout">
                      {c.client}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-light leading-snug tracking-tight text-cream md:text-xl">
                      {c.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel transition-colors group-hover:text-sprout">
                      Read the case <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— Page ————————————————— */

export default function Home() {
  return (
    <>
      <Hero />
      <CertTicker />
      <TrustedBy />
      <ServicesChapter />
      <StatsBand />
      <SectorsTeaser />
      <CasePreview />
      <TestimonialRail />
      <AssessmentSection />
    </>
  );
}
