import { CalendarCheck2, Compass, Mail, ShieldCheck, Telescope } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { MaskReveal, Reveal, Fade } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { TestimonialRail } from "../components/TestimonialRail";
import { CTABand } from "../components/CTABand";
import { BRAND, IMG, LEADERSHIP } from "../data/content";

const TIMELINE = [
  {
    year: "1997",
    title: "Innerline is formed",
    desc: "Founded with a single conviction: buy and maintain the best equipment and software in the industry — never the cheapest.",
  },
  {
    year: "2000",
    title: "Incorporated in California",
    desc: "Innerline Engineering Inc. formalizes — and begins winning municipal CCTV and cleaning contracts across Southern California.",
  },
  {
    year: "2001",
    title: "First fully digital CCTV in CA",
    desc: "The first company in California to take pipeline inspection fully digital — years before the rest of the industry caught up.",
  },
  {
    year: "2010s",
    title: "Quality control, institutionalized",
    desc: "An in-house QC department begins reviewing every foot of inspection — as progressive cities demand more from their contractors.",
  },
  {
    year: "2020s",
    title: "The IE-EI era",
    desc: "Now an IE-EI company: woman-owned, CPUC GO 156 certified, and running dedicated programs for utilities, state agencies and industry.",
  },
];

const VALUES = [
  {
    icon: Telescope,
    title: "See it before you spend",
    desc: "Decisions about buried infrastructure should start with evidence — our cameras make sure they do.",
  },
  {
    icon: ShieldCheck,
    title: "Safety is the schedule",
    desc: "Monthly documented meetings, weekly field tailgates, certified crews. Nothing here outranks going home safe.",
  },
  {
    icon: Compass,
    title: "One crew, accountable",
    desc: "The crew that scopes the job is the crew that finishes it. No handoffs, no finger-pointing.",
  },
  {
    icon: CalendarCheck2,
    title: "Programs, not episodes",
    desc: "We build recurring maintenance programs that keep systems flowing — not one-time emergency visits.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Company"
        crumb="About"
        image={IMG.workerVest}
        imageAlt="Innerline crew member in work vest at an industrial site"
        title={
          <>
            <MaskReveal delay={0.3}>Three decades underground,</MaskReveal>
            <MaskReveal delay={0.42}>
              one <em className="font-normal not-italic text-sprout">reputation above it.</em>
            </MaskReveal>
          </>
        }
        description="Innerline Engineering is a woman-owned, IE-EI company headquartered in Riverside — one of the most respected names in California pipeline cleaning and inspection."
      />

      {/* ——— story ——— */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={
                <>
                  Pioneers since
                  <br />
                  <em className="font-normal not-italic text-sprout-deep">day one.</em>
                </>
              }
              description="From the very beginning, Innerline has been committed to acquiring and maintaining the best equipment and software available — state-of-the-art Pearpoint and RST CCTV systems, and WinCan, POSM and Flexidata reporting."
            />
            <Reveal delay={0.2}>
              <p className="mt-5 leading-relaxed text-navy-900/65">
                As cities and municipalities have grown more demanding, Innerline has responded with
                unprecedented quality: more stringent hiring criteria, a higher level of training,
                and a program in which every foot of inspection is reviewed by our in-house quality
                control department. That commitment to excellence, safety and attention to detail is
                why the same clients renew with us, year after year.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "1997", l: "Founded" },
                  { v: "1st", l: "Fully digital CCTV in CA" },
                  { v: "WBE", l: "Woman-owned business" },
                  { v: "Riverside", l: "Headquarters & yard" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-navy-900/10 bg-white p-5">
                    <div className="font-display text-2xl font-light text-navy-950">{s.v}</div>
                    <div className="mt-1 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-navy-900/50">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* timeline */}
          <div className="relative">
            <div className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-navy-900/12" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={0.08 * i}>
                  <div className="group relative flex gap-6">
                    <div className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-navy-900/15 bg-cream font-mono text-[0.6rem] font-medium text-navy-900 transition-all duration-500 group-hover:border-sprout-deep group-hover:bg-navy-950 group-hover:text-sprout">
                      {t.year.slice(0, 4)}
                    </div>
                    <div className="rounded-2xl border border-navy-900/10 bg-white p-5 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-navy-950/8">
                      <h4 className="font-display text-lg font-normal text-navy-950">{t.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-900/60">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— mission ——— */}
      <section className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-24 md:py-32">
        <div className="blueprint-dark absolute inset-0" />
        <Fade>
          <img
            src={IMG.pipeTunnel}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
        </Fade>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
          <Reveal>
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.35em] text-sprout">
              Our Mission
            </div>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-light leading-[1.15] tracking-tight text-cream">
            <MaskReveal delay={0.1}>“To leave every system we touch</MaskReveal>
            <MaskReveal delay={0.22}>cleaner, clearer and better documented</MaskReveal>
            <MaskReveal delay={0.34}>
              than we found it — <em className="font-normal not-italic text-sprout">on camera.”</em>
            </MaskReveal>
          </h2>
          <Reveal delay={0.45}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-steel">
              Excellence, safety and attention to detail — the standards that made Innerline one of
              the most respected names in the industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— values ——— */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <>
                Four commitments,
                <br />
                <em className="font-normal not-italic text-sprout-deep">no exceptions.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-950/8">
                  <v.icon className="size-8 text-sprout-deep transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="mt-5 font-display text-lg font-normal text-navy-950">{v.title}</h4>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-navy-900/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— leadership ——— */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Leadership"
              title={
                <>
                  The people behind
                  <br />
                  <em className="font-normal not-italic text-sprout-deep">the name.</em>
                </>
              }
            />
            <Reveal delay={0.2}>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-navy-900/60 transition-colors hover:text-sprout-deep"
              >
                <Mail className="size-4" /> {BRAND.email}
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={0.07 * i}>
                <div className="group flex items-center gap-5 rounded-2xl border border-navy-900/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-sprout-deep/40 hover:shadow-lg hover:shadow-navy-950/8">
                  <div className="relative shrink-0">
                    <img
                      src={p.avatar}
                      alt={p.name}
                      loading="lazy"
                      className="size-16 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full border-2 border-white bg-sprout-deep" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-normal text-navy-950">{p.name}</div>
                    <div className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-navy-900/55">
                      {p.role}
                    </div>
                    <div className="mt-1.5 font-mono text-[0.62rem] text-steel">{BRAND.phone}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialRail />
      <CTABand />
    </>
  );
}
