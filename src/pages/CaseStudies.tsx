import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { MaskReveal, Reveal } from "../components/Reveal";
import { CTABand } from "../components/CTABand";
import { Marquee } from "../components/Marquee";
import { CASE_STUDIES, CLIENTS, IMG } from "../data/content";

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

export default function CaseStudies() {
  useHashScroll();
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <>
      <PageHero
        eyebrow="Case Studies & Clients"
        crumb="Case Studies"
        image={IMG.treatmentNight}
        imageAlt="Aerial night view of an illuminated water treatment facility maintained under an Innerline program"
        title={
          <>
            <MaskReveal delay={0.3}>Proof, poured in</MaskReveal>
            <MaskReveal delay={0.42}>
              <em className="font-normal not-italic text-sprout">concrete &amp; steel.</em>
            </MaskReveal>
          </>
        }
        description="Reference accounts across utility, state, campus and heavy industrial sites — each one doubles as a proposal you can verify."
      />

      {/* ——— featured ——— */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <Reveal>
            <article id={featured.id} className="group grid scroll-mt-28 overflow-hidden rounded-3xl bg-navy-950 lg:grid-cols-2">
              <div className="relative min-h-[20rem] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950/40" />
                <span className="absolute left-6 top-6 rounded-full bg-sprout px-4 py-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.2em] text-ink">
                  Featured Program
                </span>
              </div>
              <div className="blueprint-dark relative p-8 md:p-12">
                <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-sprout">
                  {featured.client}
                  <span className="flex items-center gap-1 text-steel">
                    <MapPin className="size-3" /> {featured.location}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-cream md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-cream/65">{featured.challenge}</p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {featured.results.map((r) => (
                    <div key={r.label} className="rounded-2xl border border-white/10 p-4 text-center">
                      <div className="font-display text-2xl text-sprout">{r.value}</div>
                      <div className="mt-1 font-mono text-[0.52rem] uppercase leading-relaxed tracking-[0.14em] text-steel">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {/* ——— remaining studies ——— */}
          <div className="mt-6 space-y-6">
            {rest.map((c, i) => (
              <Reveal key={c.id} delay={0.05 * i}>
                <article
                  id={c.id}
                  className="group grid scroll-mt-28 overflow-hidden rounded-3xl border border-navy-900/10 bg-white transition-shadow duration-500 hover:shadow-2xl hover:shadow-navy-950/10 md:grid-cols-[16rem_1fr]"
                >
                  <div className="relative h-56 overflow-hidden md:h-auto">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-ink/70 px-3.5 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
                      <MapPin className="size-3 text-sprout" /> {c.location}
                    </span>
                  </div>
                  <div className="p-7 md:p-9">
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sprout-deep">
                      {c.client}
                    </div>
                    <h3 className="mt-2.5 font-display text-2xl font-light tracking-tight text-navy-950">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{c.summary}</p>

                    <details className="group/det mt-5 border-t border-navy-900/10 pt-5">
                      <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-navy-900/60 transition-colors hover:text-sprout-deep [&::-webkit-details-marker]:hidden">
                        Scope &amp; outcome
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-open/det:rotate-90" />
                      </summary>
                      <div className="mt-4 grid gap-6 md:grid-cols-2">
                        <ul className="space-y-2">
                          {c.scope.map((s) => (
                            <li key={s} className="flex items-start gap-2.5 text-[0.82rem] text-navy-900/75">
                              <Check className="mt-0.5 size-3.5 shrink-0 text-sprout-deep" />
                              {s}
                            </li>
                          ))}
                        </ul>
                        <p className="rounded-2xl bg-cream p-4 text-[0.82rem] leading-relaxed text-navy-900/70">
                          <span className="mb-1 block font-mono text-[0.58rem] uppercase tracking-[0.2em] text-sprout-deep">
                            Outcome
                          </span>
                          {c.outcome}
                        </p>
                      </div>
                    </details>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— client ledger ——— */}
      <section className="border-y border-white/8 bg-ink py-20">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <Reveal>
            <div className="mb-8 text-center font-mono text-[0.62rem] uppercase tracking-[0.35em] text-steel">
              Past &amp; present — a partial client ledger
            </div>
          </Reveal>
        </div>
        <Marquee mask>
          {CLIENTS.map((c) => (
            <span key={c} className="mx-8 whitespace-nowrap font-display text-2xl font-light tracking-tight text-cream/55 transition-colors hover:text-cream md:text-3xl">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      <CTABand />
    </>
  );
}
