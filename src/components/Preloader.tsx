import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORD = "INNERLINE";

export function Preloader({ onReveal }: { onReveal?: () => void }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else
        setTimeout(() => {
          setDone(true);
          onReveal?.();
        }, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          <div className="flex overflow-hidden">
            {WORD.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`font-display text-[clamp(2.4rem,8vw,5rem)] font-light tracking-tight ${
                  i >= 5 ? "text-sprout" : "text-cream"
                }`}
              >
                {ch}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-steel"
          >
            an IE-EI Company — Riverside, CA
          </motion.div>
          <div className="mt-10 h-px w-56 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-sprout"
              style={{ width: `${count}%` }}
            />
          </div>
          <div className="mt-4 font-mono text-xs text-steel">{String(count).padStart(3, "0")}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
