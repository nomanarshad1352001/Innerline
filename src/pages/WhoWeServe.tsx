import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { MaskReveal, Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { CountUp } from "../components/CountUp";
import { BRAND, IMG, SECTORS } from "../data/content";

export default function WhoWeServe() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        crumb="Who We Serve"
        image={IMG.tanksDrone}
        imageAlt="Aerial drone view of industrial storage tanks served by Innerline"
        title={
          <>
            <MaskReveal delay={0.3}>Built for the sites that</MaskReveal>
            <MaskReveal delay={0.42}>
              <em className="font-normal not-italic text-sprout">can't afford downtime.</em>
            </MaskReveal>
          </>
        }
        description="Industrial, utility, municipal and commercial clients across the Inland Empire, Long Beach and the Central Valley — each with a program shaped to how their site actually runs."
      />

      {/* ——— sector cards ——— */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <SectionHeading
            eyebrow="Six Sectors"
            title={
              <>
                Every kind of operation,
                <br />
                one <em className="font-normal not-italic text-sprout-deep">standard of care.</em>
              </>
            }
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s, i) => (
              <Reveal key={s.id} delay={0.07 * i}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-900/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/10">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                    <span className="absolute bottom-4 left-5 grid size-11 place-items-center rounded-xl bg-ink/70 text-sprout backdrop-blur-sm">
                      <s.icon className="size-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-display text-xl font-normal tracking-tight text-navy-950">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-900/60">{s.blurb}</p>
                    <ul className="mt-5 space-y-2 border-t border-navy-900/10 pt-5">
                      {s.scopes.map((sc) => (
                        <li key={sc} className="flex items-center gap-2.5 text-[0.82rem] text-navy-900/75">
                          <Check className="size-3.5 shrink-0 text-sprout-deep" />
                          {sc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— coverage band ——— */}
      <section className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-20 md:py-28">
        <div className="blueprint-dark absolute inset-0" />
        <img
          src={IMG.excavatorUrban}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-20 [mask-image:linear-gradient(to_right,black,transparent)]"
        />
        <div className="relative mx-auto grid max-w-[92rem] items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Service Area"
              title={
                <>
                  Rooted in Riverside,
                  <br />
                  rolling <em className="font-normal not-italic text-sprout">across SoCal.</em>
                </>
              }
              description="From our Riverside yard, Innerline crews cover the Inland Empire daily and run dedicated programs as far as Fresno and the Central Valley."
            />
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2">
                {BRAND.serviceAreas.map((a) => (
                  <span key={a} className="rounded-full border border-white/12 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-cream/75 transition-colors hover:border-sprout hover:text-sprout">
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { to: 8, suffix: "+", label: "Counties covered" },
              { to: 2, suffix: "", label: "Dedicated program regions" },
              { to: 24, suffix: "/7", label: "Dispatch availability" },
              { to: 1, suffix: "", label: "Crew from call to closeout" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08}>
                <div className="rounded-3xl border border-white/10 bg-navy-900/60 p-6 text-center backdrop-blur-sm">
                  <div className="font-display text-5xl font-light text-cream">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-steel">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— fit check ——— */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Is Innerline a fit?"
              title={
                <>
                  If it flows, floods,
                  <br />
                  backs up or <em className="font-normal not-italic text-sprout-deep">buries itself — call us.</em>
                </>
              }
              description="The best engagements start with a walkthrough. We'll camera the lines, walk the plant, and hand you a straightforward quote for exactly what you need — nothing you don't."
            />
            <Reveal delay={0.25}>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-navy-950 px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:bg-sprout-deep hover:text-ink"
              >
                Book a walkthrough
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={IMG.outfallPipe} alt="Large diameter industrial pipeline discharging water" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-ink/70 p-5 backdrop-blur-md">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-sprout">On the record</div>
                <p className="mt-2 text-sm leading-relaxed text-cream/85">
                  "Every foot of inspection is reviewed by our in-house quality control department
                  before it ever reaches your desk."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
