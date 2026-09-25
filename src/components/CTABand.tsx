import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { BRAND } from "../data/content";

/** Slim closing band used at the foot of inner pages */
export function CTABand() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 bg-navy-950">
      <Marquee className="border-b border-white/8 py-4" fast>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-steel">
            <span className="size-1.5 rounded-full bg-sprout" />
            24-Hour Emergency Response
            <span className="size-1.5 rounded-full bg-sprout" />
            WBE Certified
            <span className="size-1.5 rounded-full bg-sprout" />
            NASSCO PACP · MACP · LACP
          </span>
        ))}
      </Marquee>

      <div className="mx-auto flex max-w-[92rem] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-10">
        <Reveal>
          <h3 className="font-display text-3xl font-light tracking-tight text-cream md:text-5xl">
            One crew. Four trades.
            <br />
            <em className="not-italic text-sprout">Zero handoffs.</em>
          </h3>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sprout px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:bg-cream"
            >
              Request Assessment
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-mono text-sm text-cream transition-all duration-300 hover:border-sprout hover:text-sprout"
            >
              <Phone className="size-4" /> {BRAND.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
