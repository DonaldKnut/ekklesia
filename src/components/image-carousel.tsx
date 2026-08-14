"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { carouselSlides } from "@/lib/content";

const AUTO_MS = 6500;
const ease = [0.22, 1, 0.36, 1] as const;

export function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchX = useRef<number | null>(null);
  const reducedMotion = useRef(false);
  const pausedRef = useRef(paused);
  const countRef = useRef(carouselSlides.length);

  const count = carouselSlides.length;
  const slide = carouselSlides[index];

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
      setProgress(0);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current && !reducedMotion.current) {
        setProgress((p) => {
          const next = p + (dt / AUTO_MS) * 100;
          if (next >= 100) {
            setIndex((i) => (i + 1) % countRef.current);
            return 0;
          }
          return next;
        });
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <section
      className="relative border-b border-amber-500/20 bg-slate-950 py-20 text-white sm:py-28 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Sanctuary and Church Life Gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <span>🖼️</span> Sanctuary Visual Gallery
            </div>
            <h2 className="prose-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Life In The Body Of Christ
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-md">
            Explore how Ekklesia transforms fellowship, worship, intercession, and stewardship across your entire church ecosystem.
          </p>
        </div>

        {/* Main Carousel Frame */}
        <div
          className="glass-panel-gold relative overflow-hidden rounded-2xl shadow-2xl shadow-black/90"
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) < 48) return;
            if (dx < 0) goNext();
            else goPrev();
          }}
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8, ease }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Slide Description Glass Card */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${slide.id}-copy`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease }}
                  className="max-w-2xl rounded-2xl border border-amber-500/30 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} — Ministry Focus
                  </span>
                  <h3 className="prose-cinzel mt-2 text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {slide.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Top Progress Bar */}
          <div
            className="absolute left-0 top-0 z-20 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 shadow-sm shadow-amber-500 transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>

        {/* Carousel Navigation Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3" role="tablist" aria-label="Slides">
            {carouselSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                className={`focus-ring h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-10 bg-gradient-to-r from-amber-500 to-amber-300 shadow-md shadow-amber-500/50"
                    : "w-3 bg-slate-800 hover:bg-slate-700"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="focus-ring rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition-all hover:border-amber-500/50 hover:text-white"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              ← Prev
            </button>
            <button
              type="button"
              className="focus-ring rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-400 transition-all hover:border-amber-500/50 hover:text-amber-300"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? "▶ Play" : "⏸ Pause"}
            </button>
            <button
              type="button"
              className="focus-ring rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition-all hover:border-amber-500/50 hover:text-white"
              onClick={goNext}
              aria-label="Next slide"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
