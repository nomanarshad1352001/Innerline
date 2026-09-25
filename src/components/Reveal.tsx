import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/** Fade + rise reveal on scroll into view */
export function Reveal({ children, delay = 0, y = 32, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Line-mask reveal — text slides up from behind an invisible blade */
export function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "115%", rotate: 2 }}
        whileInView={{ y: "0%", rotate: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Simple in-view fade for delayed elements */
export function Fade({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export const ease = EASE;
