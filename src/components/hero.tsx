"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sanctuary.svg"
          alt="Quiet church sanctuary with soft morning light"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/30" />
        <div className="grain opacity-40" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:pb-24">
        <motion.p
          className="prose-display text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          Ekklesia
        </motion.p>

        <motion.h1
          className="mt-6 max-w-2xl text-2xl font-light leading-snug tracking-tight text-white sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease }}
        >
          One simple home for your whole church.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease }}
        >
          Manage people, events, giving, and spiritual life in one safe place —
          so your church can grow without the mess.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
        >
          <Link
            href="/features"
            className="focus-ring rounded-sm bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-stone"
          >
            See what it does
          </Link>
          <Link
            href="/contact"
            className="focus-ring rounded-sm border border-white/35 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Book a demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
