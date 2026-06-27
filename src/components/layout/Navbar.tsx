'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ---------- scroll opacity / border ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------- IntersectionObserver for active link ---------- */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1)); // strip '#'

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio among those
        // that are currently intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px', // bias toward the upper-middle viewport
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    const elements: Element[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observerRef.current!.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, []);

  /* ---------- lock body scroll when mobile menu is open ---------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* ---------- smooth scroll handler ---------- */
  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [],
  );

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <>
      {/* -------- Navbar bar -------- */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [] as any }}
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-background/90 border-b border-border backdrop-blur-xl'
            : 'bg-background/80 border-b border-transparent backdrop-blur-xl'
        }`}
      >
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* ---- Logo ---- */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="border-glow relative flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-lg font-bold text-text-primary transition-premium hover:bg-surface-hover"
            aria-label="Scroll to top"
          >
            PS
          </a>

          {/* ---- Desktop links ---- */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="group relative px-4 py-2 text-sm font-medium tracking-wide transition-premium"
                  >
                    <motion.span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive ? 'text-accent' : 'text-text-secondary group-hover:text-text-primary'
                      }`}
                      whileHover={{ y: -1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {link.label}
                    </motion.span>

                    {/* active underline indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-px h-px bg-accent"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ---- Mobile hamburger ---- */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-premium hover:bg-surface-hover hover:text-text-primary md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* -------- Mobile full-screen overlay -------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{
                        delay: 0.06 * i,
                        duration: 0.4,
                        ease: [] as any,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className={`text-2xl font-medium tracking-wide transition-colors duration-300 ${
                          isActive
                            ? 'text-accent'
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {link.label}

                        {/* mobile active dot */}
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-dot"
                            className="ml-3 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
