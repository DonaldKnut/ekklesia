"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center pt-24 pb-16">
      {/* Background Sanctuary Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sanctuary.png"
          alt="Majestic church sanctuary illuminated by morning light rays"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105"
          sizes="100vw"
        />
        {/* Layered Gradient Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        <div className="sacred-ray opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="max-w-3xl space-y-8">
          {/* Sacred Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-slate-900/90 px-4 py-1.5 shadow-lg shadow-amber-500/10 backdrop-blur-xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Built for the Body of Christ
            </span>
          </motion.div>

          {/* Main Titles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="space-y-4"
          >
            <h1 className="prose-cinzel text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
              EKKLESIA
            </h1>
            <p className="gold-gradient-text prose-cinzel text-2xl sm:text-4xl font-bold tracking-tight">
              One Divine Home for Your Whole Church.
            </p>
          </motion.div>

          {/* Descriptive Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
            className="prose-subtitle max-w-2xl text-lg text-slate-200/90 sm:text-2xl"
          >
            Unify your congregation records, Sunday gatherings, Paystack & Stripe giving, prayer requests, and daily faith devotionals into one safe, beautiful sanctuary — so your ministry flourishes without the mess.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/features"
              className="focus-ring relative group overflow-hidden rounded-full border border-amber-500/60 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-amber-500/50 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Features
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/contact"
              className="focus-ring rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-200 backdrop-blur-xl transition-all hover:border-amber-500/50 hover:bg-slate-800 hover:text-white"
            >
              Book A Demo
            </Link>
          </motion.div>

          {/* Quick Stats Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">500+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Churches Empowered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">100k+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Prayers Logged</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">99.9%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Platform Security</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">Multi-Tenant</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Network Isolation</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
