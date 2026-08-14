"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/content";

const panelEase = [0.22, 1, 0.36, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-amber-500/20 bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-amber-950/20"
          : "border-b border-white/5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/40 bg-slate-900/90 shadow-inner shadow-amber-500/20">
            <span className="absolute inset-0 rounded-xl bg-amber-500/10 blur-sm transition-opacity group-hover:opacity-100" />
            <svg
              className="h-5 w-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m-6-12h12"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="prose-cinzel text-2xl font-bold tracking-wider text-white">
              EKKLESIA
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-amber-400/80 uppercase">
              Church Platform
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring relative py-1 text-sm tracking-wide transition-colors ${
                  active ? "text-amber-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="focus-ring relative group overflow-hidden rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-95"
          >
            <span className="relative z-10">Book A Demo</span>
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring relative z-[70] flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-slate-900/80 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-0.5 w-5 bg-amber-400 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-amber-400 transition-all duration-200 ${
              open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-amber-400 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[55] bg-slate-950/70 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobile Navigation"
              className="fixed inset-x-4 top-[5.5rem] z-[60] overflow-hidden rounded-3xl border border-amber-500/20 bg-slate-950/95 p-7 shadow-2xl shadow-black/50 backdrop-blur-2xl md:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: panelEase }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: panelEase }}
                  >
                    <Link
                      href={link.href}
                      className={`focus-ring block rounded-2xl px-4 py-3.5 text-lg tracking-wide transition-colors ${
                        pathname === link.href
                          ? "bg-amber-500/10 text-amber-300"
                          : "text-slate-200 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.4, ease: panelEase }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-amber-500/20"
                  >
                    Book A Demo
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
