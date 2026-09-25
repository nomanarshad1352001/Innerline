import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  fast?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  mask?: boolean;
}

/** Infinite horizontal rail — content is duplicated and translated seamlessly */
export function Marquee({
  children,
  reverse = false,
  fast = false,
  pauseOnHover = false,
  className = "",
  mask = false,
}: MarqueeProps) {
  const anim = reverse
    ? "animate-marquee-rev"
    : fast
      ? "animate-marquee-fast"
      : "animate-marquee";
  return (
    <div
      className={`overflow-hidden ${mask ? "rail-mask" : ""} ${pauseOnHover ? "pause-on-hover" : ""} ${className}`}
    >
      <div className={`marquee-track flex w-max items-stretch ${anim}`}>
        <div className="flex shrink-0 items-stretch">{children}</div>
        <div className="flex shrink-0 items-stretch" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
