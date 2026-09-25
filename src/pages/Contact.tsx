import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { MaskReveal, Reveal } from "../components/Reveal";
import { AssessmentSection } from "../components/AssessmentSection";
import { BRAND, IMG, LEADERSHIP } from "../data/content";

const DETAILS = [
  { icon: Phone, label: "Dispatch & Office", value: BRAND.phone, href: BRAND.phoneHref },
  { icon: Mail, label: "Project Inquiries", value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: MapPin, label: "Headquarters", value: "Riverside, California", href: undefined },
  { icon: Clock, label: "Emergency Response", value: "24 hours — every day", href: undefined },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        image={IMG.excavatorSunset}
        imageAlt="Innerline equipment on a job site at sunset in Southern California"
        title={
          <>
            <MaskReveal delay={0.3}>Tell us about your site.</MaskReveal>
            <MaskReveal delay={0.42}>
              We'll bring the <em className="font-normal not-italic text-sprout">crew.</em>
            </MaskReveal>
          </>
        }
        description="One call covers inspection, cleaning, repair and cleanup. Request a free CCTV condition assessment below — or reach the team directly."
      />

      {/* ——— direct lines ——— */}
      <section className="border-b border-navy-900/10 bg-cream py-14">
        <div className="mx-auto grid max-w-[92rem] gap-4 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
          {DETAILS.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.08}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-950/8">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-sprout transition-transform duration-500 group-hover:scale-110">
                  <d.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-navy-900/50">
                    {d.label}
                  </div>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block break-all text-sm font-semibold text-navy-950 transition-colors hover:text-sprout-deep">
                      {d.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm font-semibold text-navy-950">{d.value}</div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <AssessmentSection />

      {/* ——— leadership directory ——— */}
      <section className="border-t border-white/8 bg-ink py-24">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-sprout">
                  Direct Lines
                </div>
              </Reveal>
              <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-cream md:text-4xl">
                <MaskReveal delay={0.1}>Skip the queue — call the team.</MaskReveal>
              </h2>
            </div>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-3 rounded-full border border-sprout/30 bg-sprout/10 px-5 py-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sprout">
                <Siren className="size-4" /> Emergencies: {BRAND.phone} — 24/7
              </div>
            </Reveal>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
            {LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={0.05 * i}>
                <div className="group grid items-center gap-4 border-b border-white/8 bg-navy-900/40 px-6 py-5 transition-colors duration-300 last:border-0 hover:bg-navy-900/70 sm:grid-cols-[3rem_1fr_1fr_auto]">
                  <img src={p.avatar} alt={p.name} loading="lazy" className="size-12 rounded-full object-cover ring-1 ring-white/15" />
                  <div>
                    <div className="font-display text-lg font-normal text-cream transition-colors group-hover:text-sprout">
                      {p.name}
                    </div>
                    <div className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-steel">
                      {p.role}
                    </div>
                  </div>
                  <a href={BRAND.phoneHref} className="font-mono text-sm text-cream/70 transition-colors hover:text-sprout">
                    {BRAND.phone}
                  </a>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="grid size-10 place-items-center justify-self-start rounded-full border border-white/12 text-cream/70 transition-all duration-300 hover:border-sprout hover:text-sprout sm:justify-self-end"
                    aria-label={`Email ${p.name}`}
                  >
                    <Mail className="size-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-steel/70">
              {BRAND.usdot} · {BRAND.ca} · Licensed &amp; insured in California
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
