import { Link } from "react-router-dom";

/** Innerline wordmark — pipe cross-section mark + logotype */
export function Logo({ light = true, compact = false }: { light?: boolean; compact?: boolean }) {
  const text = light ? "text-cream" : "text-ink";
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full border border-sprout/40 bg-navy-900/60 transition-colors duration-500 group-hover:border-sprout">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="var(--color-sprout)" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="4.5" stroke="var(--color-sprout)" strokeWidth="1.4" className="animate-pulse-soft" />
          <circle cx="12" cy="12" r="1.4" fill="var(--color-sprout)" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block font-display text-[1.35rem] font-medium tracking-tight ${text}`}>
            Innerline
          </span>
          <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-[0.28em] text-sprout">
            an IE-EI Company
          </span>
        </span>
      )}
    </Link>
  );
}
