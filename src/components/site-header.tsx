"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-amber-500/20 bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-amber-950/20"
          : "border-b border-white/5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo with Sacred Emblem */}
        <Link
          href="/"
          className="focus-ring group flex items-center gap-3 transition-transform hover:scale-105"
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
            <span className="text-[10px] font-medium tracking-widest text-amber-400/80 uppercase">
              Church Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring relative py-1 text-sm font-medium tracking-wider transition-colors ${
                  active ? "text-amber-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 shadow-sm shadow-amber-500" />
                )}
              </Link>
            );
          })}
          
          <Link
            href="/contact"
            className="focus-ring relative group overflow-hidden rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:shadow-amber-500/40 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Book A Demo</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="focus-ring relative flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-slate-900/80 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-0.5 w-5 bg-amber-400 transition-transform ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-amber-400 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-amber-400 transition-transform ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="border-b border-amber-500/20 bg-slate-950/95 px-6 py-8 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring text-lg font-medium text-slate-200 hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="focus-ring mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 text-sm font-bold text-slate-950 uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              Book A Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
