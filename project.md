# Innerline Engineering — Corporate Website Platform

> **Project Title:** *Innerline — Industrial Cleaning, Underground Inspection & Environmental Services Platform*
> **Brand:** Innerline Engineering — an IE-EI Company — Riverside, CA
> **Type:** Multi-page marketing & lead-generation website (static, no database)
> **Status:** Production-ready build · © 2026 Innerline Engineering

---

## 1. What This Platform Does

This is a complete, modern rebuild of Innerline Engineering's legacy website (an outdated Joomla! 1.5 system with broken Flash dependencies). It is a **luxury-grade, fully responsive, animation-rich corporate website** designed to convert municipal, utility, industrial, and commercial buyers into qualified leads.

### Core Capabilities

| Area | What It Delivers |
|---|---|
| **Brand Presence** | Cinematic hero, film-grain texture, blueprint-grid motifs, editorial typography — positioning a blue-collar trade company with white-glove credibility |
| **Service Marketing** | Four dedicated service chapters: CCTV Underground Inspection, Industrial Cleaning & Hydro Jetting, CIPP Trenchless Pipe Repair, Environmental & Emergency Response |
| **Lead Capture** | "Request a Free Assessment" form (name, company, phone, service needed, site details) with animated submit/success states — ready to wire to Formspree or any inbox endpoint |
| **Credibility Engine** | Dedicated Certifications page (WBE, CPUC GO 156, NASSCO PACP·MACP·LACP, ISNetworld, CA Small Business) for RFP/procurement requirements |
| **Social Proof** | Case studies (PG&E, CDCR, Cal Poly Pomona, California Steel, City of Yorba Linda), animated testimonial rails, client marquee ledger |
| **Company Story** | Timeline from 1997 founding → first fully-digital CCTV operator in California (2001) → IE-EI era, mission statement, leadership directory |
| **Contact & Dispatch** | Direct-line cards, 24/7 emergency CTA, leadership contact table, phone/email deep links (`tel:` / `mailto:`) |

---

## 2. Who Will Buy / Use This Platform

### The Direct Buyer
**Innerline Engineering (IE-EI)** — a woman-owned, CPUC GO 156 certified industrial services contractor headquartered in Riverside, CA. The company needs a modern, secure, mobile-responsive replacement for its unsupported Joomla 1.5 site, with lead capture tied to its marketing plan.

### The End Users (Innerline's Customers) — 6 Buyer Segments

| Segment | Why They Visit | What Converts Them |
|---|---|---|
| **Industrial & Distribution** | Plants, mills, distribution centers needing tank/trench/catch-basin cleaning with minimal downtime | Case studies (California Steel), ISNetworld pre-qualification |
| **Utility Companies** | Potholing, vault cleaning, pre-construction inspection, scheduled maintenance programs | PG&E case study, CPUC GO 156 diverse-supplier credit |
| **Municipalities & Public Works** | NASSCO-coded CCTV assessment, storm drain programs, RFP-ready vendors | Certifications page, NASSCO credentials, client ledger |
| **Facility & Property Managers** | Campuses, schools, healthcare — recurring scheduled service | Cal Poly Pomona partnership, recurring-program messaging |
| **Contractors & Developers** | Construction support, rehab, closeout video documentation | "One crew start to finish" positioning |
| **Retail & Commercial** | Grease lines, multi-site maintenance, storm compliance | 24/7 emergency response, multi-site capability |

### Secondary Stakeholders
- **Procurement officers** — download-ready certification/RFP documentation messaging
- **Operations/fleet recruiters** — safety program and training culture pages
- **The freelance/agency developer** (per the job post) — clean codebase, easy to hand off, fully client-owned

---

## 3. Qualities (Design & Engineering Standards)

- **Heavy-industrial luxury aesthetic** — bold condensed poster typography (Anton + Archivo + IBM Plex Mono), squared fabricated edges, hazard-stripe accents, ghost-wordmark footers
- **Cinematic motion language** — curtain-style preloader with progress counter, line-mask headline reveals, blur-to-focus scroll reveals, parallax hero, spring-eased page transitions
- **Brand-authentic palette** — asphalt charcoal (`#0a0b0e` → `#394049`), safety amber (`#ffab15`), concrete (`#f2f1ed`), steel gray — built for an industrial services brand
- **Industrial texture** — animated film-grain overlay, diagonal pinstripe backdrops, glass-blur sticky chrome
- **Fully responsive** — mobile full-screen overlay menu, fluid `clamp()` typography, adaptive grids from 360px → ultrawide
- **Zero backend dependency** — pure static build; no database; all content is structured dummy data in one central file
- **Performance-conscious** — single-file Vite bundle, lazy-loaded imagery, CSS-only marquees (GPU transform animations), `useInView`-gated counters
- **Accessible touches** — semantic landmarks, aria labels on interactive controls, keyboard-focusable form states, reduced-JS fallbacks
- **Maintainable** — one source-of-truth data file (`src/data/content.ts`); non-technical editors change copy in one place

---

## 4. Feature Inventory

### Global
- Curtain preloader ("INNERLINE" letter stagger + 0–100% counter + slide-up exit)
- Hide-on-scroll-down / reveal-on-scroll-up glass navbar with phone + CTA
- Full-screen animated mobile menu with staggered links
- Film-grain overlay, custom scrollbar, sprout-green text selection
- Hash-based routing with scroll restoration and deep-link support (`/services#cctv-inspection`)

### Home
- Parallax hero over underground pipeline photography + certification chips
- Certification ticker marquee (ISNetworld · WBE · NASSCO · CPUC GO 156 · CA SB)
- Infinite "Trusted By" client logo rail
- Four numbered service chapters (01–04) with hover-zoom imagery and feature chips
- Animated count-up stats band (4 lines · 72″ max · 2M+ LF · 28 years)
- Six-sector "Who We Serve" teaser grid
- Featured + secondary case-study preview cards
- **Dual animated testimonial rails** — two marquee rows gliding in opposite directions, edge-fade masks, pause-on-hover, 5-star cards with real headshots
- Free-assessment lead form with loading/success animation

### Services
- Four deep service chapters with alternating editorial layouts, spec stats, and feature checklists
- Equipment fleet marquee (Vactor units, Pearpoint/RST CCTV, WinCan/POSM/Flexidata)
- Four-phase process timeline (Assess → Clean & Restore → Repair → Verify & Report)
- Emergency-response CTA band with scrolling ticker

### Who We Serve
- Six image sector cards with scope bullet lists
- Service-area coverage band (county chips + count-up coverage stats)
- Fit-check section with QC pull-quote overlay card

### Certifications
- Five credential cards with procurement qualification bullets
- "Need the paperwork?" RFP-document request card
- Safety-program grid (confined space, gas detection, CPR, traffic control)
- Quality-control split section (every foot of footage reviewed twice)

### Case Studies
- Featured PG&E program panel (Riverside & Fresno) with outcome metrics
- Expandable scope/outcome detail rows for CDCR, Cal Poly Pomona, California Steel, Yorba Linda
- Past-and-present client ledger marquee

### About
- 1997–present animated timeline (founded → incorporated → first fully-digital CCTV in CA → IE-EI era)
- Mission statement chapter with mask-reveal typography
- Four-commitments values grid
- Leadership cards with contact details

### Contact
- Direct-line detail cards (dispatch, email, HQ, 24/7 emergency)
- Full assessment form (validation, service select, animated success panel)
- Leadership directory table with email/phone actions

---

## 5. Tech Stack

### Core Framework
| Technology | Version | Role |
|---|---|---|
| **React** | 19.2 | UI component architecture (SPA with client-side routing) |
| **TypeScript** | 5.9 | Type-safe components, data models (`Service`, `Sector`, `CaseStudy`, `Testimonial`, `Certification`) |
| **Vite** | 7.3 | Build tooling, dev server, single-file production bundling |
| **Tailwind CSS** | 4.1 | Utility-first styling with CSS-native `@theme` design tokens |

### Animation & Interaction
| Technology | Role |
|---|---|
| **Framer Motion** | Scroll reveals, mask reveals, parallax (`useScroll`/`useTransform`), page transitions (`AnimatePresence`), preloader, micro-interactions |
| **CSS Keyframes** | Infinite marquee rails (testimonials, tickers, fleet strip), film-grain shift, pulse animations |
| **Custom hooks** | `CountUp` (rAF ease-out counters), `useHashScroll` (deep-link smooth scroll) |

### UI & Assets
| Technology | Role |
|---|---|
| **Lucide React** | Complete icon system (no emojis anywhere) |
| **Google Fonts** | Anton (condensed display), Archivo (UI sans), IBM Plex Mono (technical labels) |
| **Pexels stock imagery** | Industrial, pipeline, utility, campus, and portrait photography (URL-based, no local assets) |

### Routing & Architecture
| Technology | Role |
|---|---|
| **React Router (HashRouter)** | Multi-page navigation with static-host compatibility — no server rewrites needed |
| **vite-plugin-singlefile** | Single `dist/index.html` artifact for trivial deployment (Cloudflare Pages, Netlify, any static host) |
| **clsx + tailwind-merge** | Class composition utilities |

### Data Layer
- **No database** — all content lives in typed dummy-data module: `src/data/content.ts`
- Centralized: brand info, 4 services, 6 sectors, 5 certifications, 5 case studies, 6 testimonials, 8 clients, 6 leadership members, image registry
- Form submission is simulated client-side; production swap = one endpoint change (Formspree recommended)

---

## 6. Project Structure

```
├── index.html                    # Title, meta, Google Fonts
├── project.md                    # This document
├── src/
│   ├── main.tsx                  # React entry
│   ├── App.tsx                   # Router, page transitions, preloader gate, grain
│   ├── index.css                 # Tailwind v4 @theme tokens, keyframes, luxury utilities
│   ├── data/
│   │   └── content.ts            # ★ Single source of truth — all dummy data
│   ├── components/
│   │   ├── Navbar.tsx            # Glass navbar + full-screen mobile menu
│   │   ├── Footer.tsx            # Ghost wordmark, sitemap, contact, legal
│   │   ├── Preloader.tsx         # Curtain preloader with counter
│   │   ├── PageHero.tsx          # Inner-page cinematic hero
│   │   ├── SectionHeading.tsx    # Eyebrow + mask-reveal titles
│   │   ├── Reveal.tsx            # Scroll reveal primitives (Reveal / MaskReveal / Fade)
│   │   ├── Marquee.tsx           # Infinite rail engine (direction/speed/pause)
│   │   ├── CountUp.tsx           # Animated numeric counters
│   │   ├── Logo.tsx              # SVG pipe-cross-section brand mark
│   │   ├── TestimonialRail.tsx   # Dual-direction animated testimonial marquee
│   │   ├── AssessmentSection.tsx # Lead-capture form with success animation
│   │   └── CTABand.tsx           # Closing emergency-response band
│   └── pages/
│       ├── Home.tsx              # Hero, tickers, services, stats, sectors, cases
│       ├── Services.tsx          # 4 chapters + fleet + process
│       ├── WhoWeServe.tsx        # 6 sectors + coverage
│       ├── Certifications.tsx    # 5 credentials + safety + QC
│       ├── CaseStudies.tsx       # Featured + expandable studies
│       ├── About.tsx             # Timeline + mission + leadership
│       └── Contact.tsx           # Form + direct lines + directory
```

---

## 7. Build & Deploy

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build → dist/index.html (single file)
```

**Recommended hosting** (per project brief): Cloudflare Pages or Netlify (free tier), Formspree for the form endpoint, `sitemap.xml` + meta tags for SEO, and a 301 redirect from `innerlineengineering.com` → new domain preserving search equity.

---

## 8. Handoff Notes

- **All copy is editable** in `src/data/content.ts` — services, stats, testimonials, case studies, leadership
- **Replace testimonial/case data** with permissioned client content before go-live
- **Wire the form** by pointing the submit handler in `AssessmentSection.tsx` at a Formspree endpoint
- **Domain stays client-owned** at all times per the rebuild brief — hosting and code hand over cleanly with no vendor lock-in
