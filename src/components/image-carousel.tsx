"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { carouselSlides } from "@/lib/content";

const AUTO_MS = 7000;
const ease = [0.22, 1, 0.36, 1] as const;

export function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchX = useRef<number | null>(null);
  const pausedRef = useRef(paused);
  const reduceMotionRef = useRef(false);
  const countRef = useRef(carouselSlides.length);
  const indexRef = useRef(0);

  const count = carouselSlides.length;
  const slide = carouselSlides[index];

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const goTo = useCallback((next: number, dir?: number) => {
    const wrapped = ((next % countRef.current) + countRef.current) % countRef.current;
    const current = indexRef.current;
    setDirection(dir ?? (wrapped === 0 && current === countRef.current - 1 ? 1 : wrapped > current ? 1 : -1));
    setIndex(wrapped);
    setProgress(0);
  }, []);

  const goNext = useCallback(() => goTo(indexRef.current + 1, 1), [goTo]);
  const goPrev = useCallback(() => goTo(indexRef.current - 1, -1), [goTo]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      reduceMotionRef.current = mq.matches;
      setReduceMotion(mq.matches);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current && !reduceMotionRef.current) {
        setProgress((p) => {
          const next = p + (dt / AUTO_MS) * 100;
          if (next >= 100) {
            goTo(indexRef.current + 1, 1);
            return 0;
          }
          return next;
        });
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [goTo]);

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
      className="relative overflow-hidden border-b border-amber-500/20 bg-slate-950 py-20 text-white sm:py-28"
      aria-roledescription="carousel"
      aria-label="Life in the church"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
              In the life of the church
            </div>
            <h2 className="prose-cinzel text-3xl font-bold tracking-tight text-white sm:text-5xl">
              See what Ekklesia helps you do.
            </h2>
          </div>
          <p className="prose-subtitle max-w-md text-lg text-amber-100/80 sm:text-xl">
            Fellowship, worship, prayer, and giving — held in one quiet, ordered home.
          </p>
        </div>

        <div
          className="group glass-panel-gold relative overflow-hidden rounded-2xl shadow-2xl shadow-black/90"
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
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                className="absolute inset-0"
                variants={{
                  enter: (dir: number) => ({ opacity: 0, x: dir * 56 }),
                  center: { opacity: 1, x: 0 },
                  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.72, ease }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.03 }}
                  animate={{ scale: reduceMotion ? 1 : 1.12 }}
                  transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={index === 0}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="focus-ring absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/55 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:border-amber-400/50 hover:text-amber-300 group-hover:opacity-100 sm:flex"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="focus-ring absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/55 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:border-amber-400/50 hover:text-amber-300 group-hover:opacity-100 sm:flex"
            >
              →
            </button>

            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${slide.id}-copy`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease, delay: 0.08 }}
                  className="max-w-xl"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-400">
                    {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  </span>
                  <h3 className="prose-cinzel mt-2 text-2xl font-bold leading-tight text-white sm:text-4xl">
                    {slide.title}
                  </h3>
                  <p className="prose-subtitle mt-3 text-lg text-amber-50/85 sm:text-2xl">
                    {slide.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div
            className="absolute left-0 top-0 z-20 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 shadow-sm shadow-amber-500 transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Slides">
            {carouselSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                onClick={() => goTo(i)}
                className={`focus-ring rounded-full px-3 py-1.5 text-xs tracking-wide transition-all ${
                  i === index
                    ? "bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {s.title.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="focus-ring rounded-full border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-all hover:border-amber-500/50 hover:text-white"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              Prev
            </button>
            <button
              type="button"
              className="focus-ring rounded-full border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-400 transition-all hover:border-amber-500/50 hover:text-amber-300"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              className="focus-ring rounded-full border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-all hover:border-amber-500/50 hover:text-white"
              onClick={goNext}
              aria-label="Next slide"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
