import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { MaskReveal, Reveal, ease } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
  imageAlt?: string;
  crumb: string;
}

export function PageHero({ eyebrow, title, description, image, imageAlt, crumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0"
      >
        <img src={image} alt={imageAlt ?? ""} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/62 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-5 pb-16 pt-40 md:px-10">
        <Reveal delay={0.2}>
          <div className="mb-6 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-steel">
            <Link to="/" className="transition-colors hover:text-sprout">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-sprout">{crumb}</span>
          </div>
        </Reveal>

        <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-sprout">
          <MaskReveal delay={0.25}>{eyebrow}</MaskReveal>
        </div>

        <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[1.02] font-light tracking-tight text-cream">
          {title}
        </h1>

        {description && (
          <Reveal delay={0.55}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>

      {/* bottom rule */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  );
}
