import { Award, Check, ClipboardCheck, FileDown, HardHat, HeartPulse, Radio, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { MaskReveal, Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { CERTIFICATIONS, IMG } from "../data/content";

const SAFETY = [
  { icon: HardHat, title: "Monthly Documented Meetings", desc: "Mandatory, all-hands safety meetings — documented and audited." },
  { icon: Radio, title: "Confined Space Certified", desc: "Entry, rescue and gas-detector applications drilled and certified." },
  { icon: HeartPulse, title: "CPR & First Aid", desc: "Field crews carry current CPR and first-aid certification." },
  { icon: ClipboardCheck, title: "Traffic Control", desc: "Certified traffic control setup for work in and around the roadway." },
];

export default function Certifications() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Qualifications"
        crumb="Certifications"
        image={IMG.factoryQC}
        imageAlt="Innerline quality control specialist reviewing inspection footage"
        title={
          <>
            <MaskReveal delay={0.3}>Credentials that qualify</MaskReveal>
            <MaskReveal delay={0.42}>
              your <em className="font-normal not-italic text-sprout">diverse spend.</em>
            </MaskReveal>
          </>
        }
        description="Certified to help meet supplier-diversity goals and safety standards on public and private contracts — with documentation ready for your RFP attachments."
      />

      {/* ——— certification cards ——— */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="blueprint-light absolute inset-0" />
        <div className="relative mx-auto max-w-[92rem] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The Short List"
              title={
                <>
                  Five credentials your
                  <br />
                  procurement team <em className="font-normal not-italic text-sprout-deep">already trusts.</em>
                </>
              }
            />
            <Reveal delay={0.2}>
              <div className="flex items-center gap-3 rounded-full border border-navy-900/12 bg-white px-5 py-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-navy-900/60">
                <FileDown className="size-4 text-sprout-deep" />
                Certificates available for RFP packages
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.id} delay={0.07 * i} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-sprout-deep/40 hover:shadow-2xl hover:shadow-navy-950/10">
                  <div className="pointer-events-none absolute -right-4 -top-8 font-display text-[7rem] font-light leading-none tracking-tight text-navy-900/4 transition-colors duration-500 group-hover:text-sprout-deep/10">
                    {c.abbr.split(" ")[0]}
                  </div>
                  <span className="relative grid size-14 place-items-center rounded-2xl bg-navy-950 text-sprout transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <c.icon className="size-6" />
                  </span>
                  <h3 className="relative mt-6 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-sprout-deep">
                    {c.abbr}
                  </h3>
                  <h4 className="relative mt-2 font-display text-xl font-normal tracking-tight text-navy-950">
                    {c.name}
                  </h4>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-navy-900/60">{c.desc}</p>
                  <ul className="relative mt-6 space-y-2 border-t border-navy-900/10 pt-5">
                    {c.qualifies.map((q) => (
                      <li key={q} className="flex items-center gap-2.5 text-[0.82rem] text-navy-900/75">
                        <Check className="size-3.5 shrink-0 text-sprout-deep" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}

            {/* documentation card */}
            <Reveal delay={0.4}>
              <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-navy-950 p-8">
                <div className="blueprint-dark absolute inset-0" />
                <div className="relative">
                  <span className="grid size-14 place-items-center rounded-2xl bg-sprout text-ink">
                    <Award className="size-6" />
                  </span>
                  <h4 className="mt-6 font-display text-2xl font-light tracking-tight text-cream">
                    Need the paperwork?
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    W-9, insurance certificates, certification letters and ISNetworld records — we
                    package everything your contracts department asks for, usually same-day.
                  </p>
                </div>
                <a
                  href="mailto:anasri@innerlineengineering.com?subject=Certification%20Documents%20Request"
                  className="group relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-sprout/50 px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sprout transition-all duration-300 hover:bg-sprout hover:text-ink"
                >
                  Request documents
                  <FileDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ——— safety program ——— */}
      <section className="border-y border-white/8 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <SectionHeading
              dark
              eyebrow="Safety Program"
              title={
                <>
                  Underground work rewards
                  <br />
                  <em className="font-normal not-italic text-sprout">the prepared.</em>
                </>
              }
              description="Confined spaces, live traffic, high-pressure water — our industry doesn't forgive shortcuts. Safety isn't a binder on a shelf here; it's a weekly rhythm."
            />
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-900/60 p-5">
                <ShieldCheck className="size-9 shrink-0 text-sprout" />
                <p className="text-sm leading-relaxed text-cream/70">
                  Weekly tailgate meetings in the field cover process and applications — layered on
                  top of the monthly documented all-hands program.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SAFETY.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-navy-900/50 p-6 transition-all duration-500 hover:border-sprout/40">
                  <s.icon className="size-7 text-sprout transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="mt-5 font-display text-lg font-normal text-cream">{s.title}</h4>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-steel">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— quality control ——— */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={IMG.ringTunnel}
                alt="Large diameter circular pipeline interior ready for CCTV verification"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-ink/70 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-sprout backdrop-blur-sm">
                106″ max inspection diameter
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Quality Control"
              title={
                <>
                  Every foot of footage,
                  <br />
                  <em className="font-normal not-italic text-sprout-deep">reviewed twice.</em>
                </>
              }
              description="Progressive cities and utilities demand a higher level of quality in their CCTV inspections. We answer with stringent hiring, continuous training — and an in-house QC department that reviews every foot of inspection before it's delivered."
            />
            <ul className="mt-8 space-y-3">
              {[
                "NASSCO PACP coding on every mainline inspection",
                "Outside consultants brought in for ongoing crew training",
                "Digital deliverables your engineers can actually use — WinCan, POSM, Flexidata",
              ].map((t, i) => (
                <Reveal key={t} delay={0.2 + i * 0.08}>
                  <li className="flex items-start gap-3 text-sm text-navy-900/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-sprout-deep" />
                    {t}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
