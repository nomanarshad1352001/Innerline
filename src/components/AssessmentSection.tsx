import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2, Clock, FileText, Loader2, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { BRAND, SERVICES } from "../data/content";

const inputCls =
  "w-full rounded-xl border border-navy-900/15 bg-white/70 px-4 py-3.5 text-sm text-navy-950 placeholder:text-navy-900/35 transition-all duration-300 focus:border-sprout-deep focus:ring-2 focus:ring-sprout/30";

const PROMISES = [
  { icon: Clock, text: "No cost, no obligation site walkthrough" },
  { icon: FileText, text: "Straightforward quote — same crew, start to finish" },
  { icon: BadgeCheck, text: "Certified WBE / CPUC GO 156 diverse supplier" },
];

export function AssessmentSection({ dark = false }: { dark?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    setTimeout(() => setState("sent"), 1400);
  };

  return (
    <section className={`relative overflow-hidden py-24 md:py-32 ${dark ? "bg-ink" : "bg-cream"}`}>
      {!dark && <div className="blueprint-light absolute inset-0" />}
      <div className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-sprout/15 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[92rem] gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* ——— pitch ——— */}
        <div>
          <SectionHeading
            dark={dark}
            eyebrow="Free Assessment"
            title={
              <>
                Ready to get your system
                <br />
                <em className="font-normal not-italic text-sprout-deep">flowing?</em>
              </>
            }
            description="One call covers inspection, cleaning, repair and cleanup. Tell us about your site and we'll follow up to schedule a walkthrough."
          />
          <ul className="mt-9 space-y-4">
            {PROMISES.map((p, i) => (
              <Reveal key={p.text} delay={0.15 + i * 0.1}>
                <li
                  className={`flex items-center gap-4 rounded-2xl border p-4 ${
                    dark ? "border-white/10 bg-navy-900/50" : "border-navy-900/10 bg-white/60"
                  }`}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-sprout">
                    <p.icon className="size-5" />
                  </span>
                  <span className={`text-sm font-medium ${dark ? "text-cream/85" : "text-navy-900"}`}>
                    {p.text}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.4}>
            <div className={`mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.7rem] tracking-wider ${dark ? "text-steel" : "text-navy-900/60"}`}>
              <a href={BRAND.phoneHref} className="flex items-center gap-2 transition-colors hover:text-sprout-deep">
                <Phone className="size-3.5" /> {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-sprout-deep">
                <Mail className="size-3.5" /> {BRAND.email}
              </a>
            </div>
          </Reveal>
        </div>

        {/* ——— form ——— */}
        <Reveal delay={0.2}>
          <div className={`relative overflow-hidden rounded-3xl border p-7 shadow-2xl shadow-navy-950/10 md:p-9 ${dark ? "border-white/10 bg-navy-900/70" : "border-navy-900/10 bg-white"}`}>
            <div className="hazard absolute inset-x-0 top-0 h-1.5" />
            <AnimatePresence mode="wait">
              {state === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                    className="grid size-20 place-items-center rounded-full bg-sprout/15"
                  >
                    <CheckCircle2 className="size-10 text-sprout-deep" />
                  </motion.div>
                  <h3 className={`mt-6 font-display text-3xl font-light ${dark ? "text-cream" : "text-navy-950"}`}>
                    Request received.
                  </h3>
                  <p className={`mt-3 max-w-sm text-sm leading-relaxed ${dark ? "text-steel" : "text-navy-900/60"}`}>
                    Thank you — a project manager will reach out within one business day to schedule
                    your walkthrough. For urgent needs, call{" "}
                    <a href={BRAND.phoneHref} className="font-semibold text-sprout-deep">
                      {BRAND.phone}
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -12 }}
                  onSubmit={submit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={`mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] ${dark ? "text-steel" : "text-navy-900/55"}`}>First name</label>
                      <input required placeholder="Jordan" className={`${inputCls} ${dark ? "!bg-white/95" : ""}`} />
                    </div>
                    <div>
                      <label className={`mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] ${dark ? "text-steel" : "text-navy-900/55"}`}>Last name</label>
                      <input required placeholder="Rivera" className={`${inputCls} ${dark ? "!bg-white/95" : ""}`} />
                    </div>
                  </div>
                  <div>
                    <label className={`mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] ${dark ? "text-steel" : "text-navy-900/55"}`}>Company</label>
                    <input required placeholder="Company name" className={`${inputCls} ${dark ? "!bg-white/95" : ""}`} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={`mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] ${dark ? "text-steel" : "text-navy-900/55"}`}>Phone</label>
                      <input required type="tel" placeholder="(909) 000-0000" className={`${inputCls} ${dark ? "!bg-white/95" : ""}`} />
                    </div>
                    <div>
                      <label className={`mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] ${dark ? "text-steel" : "text-navy-900/55"}`}>Service needed</label>
                      <select className={`${inputCls} ${dark ? "!bg-white/95" : ""}`} defaultValue={SERVICES[0].title}>
                        {SERVICES.map((s) => (
                          <option key={s.id}>{s.title}</option>
                        ))}
                        <option>Not sure — need an assessment</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={`mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] ${dark ? "text-steel" : "text-navy-900/55"}`}>Site details</label>
                    <textarea
                      rows={4}
                      placeholder="City, facility type, and what you need"
                      className={`${inputCls} resize-none ${dark ? "!bg-white/95" : ""}`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-navy-950 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-sprout-deep hover:text-ink disabled:opacity-70"
                  >
                    {state === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Request Assessment
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className={`text-center font-mono text-[0.6rem] tracking-wider ${dark ? "text-steel/70" : "text-navy-900/40"}`}>
                    Submits directly to our inbox · {BRAND.phone} · {BRAND.email}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
