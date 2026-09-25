import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import WhoWeServe from "./pages/WhoWeServe";
import Certifications from "./pages/Certifications";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageShell><Home /></PageShell>} />
        <Route path="/services" element={<PageShell><Services /></PageShell>} />
        <Route path="/who-we-serve" element={<PageShell><WhoWeServe /></PageShell>} />
        <Route path="/certifications" element={<PageShell><Certifications /></PageShell>} />
        <Route path="/case-studies" element={<PageShell><CaseStudies /></PageShell>} />
        <Route path="/about" element={<PageShell><About /></PageShell>} />
        <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <Preloader onReveal={() => setReady(true)} />
      {ready && (
        <>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </>
      )}
      <div className="grain" aria-hidden="true" />
    </HashRouter>
  );
}
