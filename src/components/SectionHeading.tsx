import type { ReactNode } from "react";
import { MaskReveal, Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, dark = false, align = "left" }: SectionHeadingProps) {
  const inkText = dark ? "text-cream" : "text-navy-950";
  const subText = dark ? "text-cream/60" : "text-navy-900/60";
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-2 w-6 bg-sprout" style={{ transform: "skewX(-24deg)" }} />
          <span className={`font-mono text-[0.68rem] font-semibold uppercase tracking-[0.3em] ${dark ? "text-sprout" : "text-sprout-deep"}`}>
            {eyebrow}
          </span>
          <span className={`h-px w-14 ${dark ? "bg-white/20" : "bg-navy-900/25"}`} />
        </div>
      </Reveal>
      <h2 className={`mt-5 font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] font-light tracking-tight ${inkText}`}>
        <MaskReveal delay={0.1}>{title}</MaskReveal>
      </h2>
      {description && (
        <Reveal delay={0.3}>
          <p className={`mt-5 text-base leading-relaxed md:text-lg ${subText}`}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
