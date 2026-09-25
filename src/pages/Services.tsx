import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Check, Cog, DraftingCompass, FileSearch, Truck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { MaskReveal, Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Marquee } from "../components/Marquee";
import { CTABand } from "../components/CTABand";
import { IMG, SERVICES } from "../data/content";

/** Deep-link scroll support for /services#section-id */
function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
    return () => clearTimeout(t);
  }, [hash]);
}

const PROCESS = [
  {
    icon: FileSearch,
    step: "Phase 01",
    title: "Assess",
    desc: "Walk the site, review as-builts, and scope the system — then document baseline conditions on camera.",
  },
  {
    icon: Cog,
    step: "Phase 02",
    title: "Clean & Restore",
    desc: "Jet, vacuum, and rehabilitate with the right tools matched to the line — no guesswork, no change-order games.",
  },
  {
    icon: DraftingCompass,
    step: "Phase 03",
    title: "Repair",
    desc: "Trenchless CIPP liners and point repairs installed by the same crew that found the defect.",
  },
  {
    icon: Truck,
    step: "Phase 04",
    title: "Verify & Report",
    desc: "Post-work CCTV verification plus NASSCO-coded, audit-ready documentation for your records.",
  },
];

const FLEET = [
  "Vactor Combination Units",
  "Pearpoint CCTV Systems",
  "RST Mainline Crawlers",
  "Scissor-Lift Storm Crawlers",
  "Self-Uprighting Mini Cameras",
  "Floating Inspection Platforms",
  "4,000 PSI Hydro Jetters",
  "WinCan · POSM · Flexidata",
];

export default function Services() {
  useHashScroll();

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        crumb="Services"
        image={IMG.canalTunnel}
        imageAlt="Dark underground canal tunnel inspected by Innerline crews"
        title={
          <>
            <MaskReveal delay={0.3}>Four service lines.</MaskReveal>
            <MaskReveal delay={0.42}>
              One <em className="font-normal not-italic text-sprout">accountable crew.</em>
            </MaskReveal>
          </>
        }
        description="Stop coordinating separate vendors for inspection, cleaning, repair and compliance. The crew that finds the problem is the crew that fixes it — and proves it on camera."
      />

      {/* ——— service chapters ——— */}
      <section className="bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-[92rem] space-y-24 px-5 md:px-10 md:space-y-32">
          {SERVICES.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-28">
              <div className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16`}>
                {/* text */}
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span className="grid size-14 place-items-center rounded-2xl bg-navy-950 text-sprout">
                        <s.icon className="size-6" />
                      </span>
                      <div>
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sprout-deep">
                          {s.index} — {s.line}
                        </div>
                        <h2 className="mt-1.5 font-display text-3xl font-light tracking-tight text-navy-950 md:text-4xl">
                          {s.title}
                        </h2>
                      </div>
                    </div>
                  </Reveal>
                  {s.description.map((p, pi) => (
                    <Reveal key={pi} delay={0.12 + pi * 0.08}>
                      <p className="mt-6 leading-relaxed text-navy-900/65">{p}</p>
                    </Reveal>
                  ))}
                  <Reveal delay={0.25}>
                    <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-navy-900/80">
                          <Check className="mt-0.5 size-4 shrink-0 text-sprout-deep" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                {/* visual */}
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <Reveal delay={0.15}>
                    <div className="group relative overflow-hidden rounded-3xl">
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                      <span className="absolute right-5 top-5 font-display text-5xl font-light text-cream/70">
                        {s.index}
                      </span>
                    </div>
                  </Reveal>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {s.stats.map((st, si) => (
                      <Reveal key={st.label} delay={0.2 + si * 0.08}>
                        <div className="rounded-2xl border border-navy-900/10 bg-white p-4 text-center">
                          <div className="font-display text-xl font-normal text-navy-950 md:text-2xl">
                            {st.value}
                          </div>
                          <div className="mt-1 font-mono text-[0.55rem] uppercase leading-relaxed tracking-[0.14em] text-navy-900/50">
                            {st.label}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ——— fleet strip ——— */}
      <section className="border-y border-white/8 bg-navy-950 py-16">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <Reveal>
            <div className="mb-8 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-steel">
              <Truck className="size-4 text-sprout" /> The fleet &amp; the toolbox
            </div>
          </Reveal>
        </div>
        <Marquee mask>
          {FLEET.map((f) => (
            <span key={f} className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-2xl font-light tracking-tight text-cream/75 md:text-3xl">
              {f} <span className="size-1.5 rounded-full bg-sprout" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ——— process ——— */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                One call, start
                <br />
                to <em className="font-normal not-italic text-sprout-deep">finish.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group relative h-full rounded-2xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-950/8">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-navy-950 text-sprout transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <p.icon className="size-5" />
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-navy-900/40">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="mt-6 flex items-center gap-2 font-display text-xl font-normal text-navy-950">
                    {p.title}
                    <ArrowRight className="size-4 text-sprout-deep opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
