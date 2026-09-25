import { Quote, Star } from "lucide-react";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TESTIMONIALS } from "../data/content";
import type { Testimonial } from "../data/content";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="group relative mx-3 flex w-[19rem] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-navy-900/60 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-sprout/40 sm:w-[22rem]">
      <div>
        <div className="flex items-center justify-between">
          <Quote className="size-6 text-sprout" />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3 fill-sprout text-sprout" />
            ))}
          </div>
        </div>
        <blockquote className="mt-5 text-[0.92rem] leading-relaxed text-cream/85">
          “{t.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
        <img
          src={t.avatar}
          alt={t.name}
          loading="lazy"
          className="size-11 rounded-full object-cover ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105"
        />
        <div>
          <div className="text-sm font-semibold text-cream">{t.name}</div>
          <div className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
            {t.role}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialRail() {
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3);

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="blueprint-dark absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-40 top-0 size-[34rem] rounded-full bg-sprout/6 blur-[120px]" />

      <div className="relative mx-auto max-w-[92rem] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            dark
            eyebrow="Client Voices"
            title={
              <>
                Trusted where the stakes
                <br />
                are <em className="font-normal not-italic text-sprout">underground.</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-steel">
              Utilities, public works directors and facility managers across California put their
              systems in our hands — and renew year after year.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.25} className="relative mt-14">
        <div className="space-y-5">
          <Marquee pauseOnHover mask fast>
            {row1.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </Marquee>
          <Marquee pauseOnHover mask reverse>
            {row2.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
