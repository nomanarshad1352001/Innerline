import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS, SERVICES } from "../data/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* giant ghost wordmark */}
      <div className="pointer-events-none select-none overflow-hidden border-b border-white/8">
        <div className="mx-auto max-w-[92rem] px-5 md:px-10">
          <div className="text-outline-cream font-display text-[16vw] leading-[0.85] font-medium tracking-tight whitespace-nowrap -mb-[3vw] pt-14">
            INNERLINE
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel">
            Industrial cleaning, underground utility inspection, trenchless repair and environmental
            services across Southern California.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["WBE", "CPUC GO 156", "NASSCO", "ISNetworld", "CA SB"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/12 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-cream/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sprout">Services</h4>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services#${s.id}`}
                  className="link-sweep text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sprout">Company</h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-sweep text-sm text-cream/75 transition-colors hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sprout">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/75">
            <li>
              <a href={BRAND.phoneHref} className="flex items-center gap-3 transition-colors hover:text-sprout">
                <Phone className="size-4 text-sprout" /> {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-sprout">
                <Mail className="size-4 shrink-0 text-sprout" /> {BRAND.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-sprout" /> {BRAND.hq} — Serving SoCal
            </li>
          </ul>
          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-full border border-sprout/50 px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sprout transition-all duration-300 hover:bg-sprout hover:text-ink"
          >
            Request Assessment
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-2 px-5 py-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel/70 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© 2026 {BRAND.full} — {BRAND.tag}. All rights reserved.</span>
          <span>
            {BRAND.usdot} · {BRAND.ca}
          </span>
        </div>
      </div>
    </footer>
  );
}
