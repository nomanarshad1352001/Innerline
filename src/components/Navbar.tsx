import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > prev);
  });

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-500 ${
          scrolled && !open
            ? "border-b border-white/8 bg-ink/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-5 md:px-10">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `link-sweep font-mono text-[0.68rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive ? "text-sprout" : "text-cream/70 hover:text-cream"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BRAND.phoneHref}
              className="hidden items-center gap-2 font-mono text-[0.72rem] tracking-wider text-cream/80 transition-colors hover:text-sprout md:flex"
            >
              <Phone className="size-3.5 text-sprout" />
              {BRAND.phone}
            </a>
            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full bg-sprout px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:bg-cream sm:flex"
            >
              Request Assessment
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="grid size-11 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:border-sprout hover:text-sprout lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ——— Mobile / overlay menu ——— */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink blueprint-dark"
          >
            <div className="h-20" />
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {[{ label: "Home", to: "/" }, ...NAV_LINKS].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-4 py-2 ${
                        isActive ? "text-sprout" : "text-cream"
                      }`
                    }
                  >
                    <span className="font-mono text-[0.6rem] text-sprout/70">0{i + 1}</span>
                    <span className="font-display text-4xl font-light tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                      {l.label}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-8 py-6"
            >
              <a href={BRAND.phoneHref} className="font-mono text-sm text-sprout">
                {BRAND.phone}
              </a>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-steel">
                WBE · CPUC GO 156 · NASSCO
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
