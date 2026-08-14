"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { carouselSlides } from "@/lib/content";
import { FadeRise } from "@/components/motion";

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
      className="border-b border-line bg-ink py-20 text-white sm:py-24"
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
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeRise>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-mist">
            In the life of the church
          </p>
          <h2 className="prose-display mt-4 max-w-2xl text-3xl sm:text-5xl">
            See what Ekklesia helps you do.
          </h2>
        </FadeRise>

        <div
          className="relative mt-12 overflow-hidden rounded-sm"
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
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${slide.id}-copy`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-mist">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(count).padStart(2, "0")}
                  </p>
                  <h3 className="prose-display mt-2 text-3xl sm:text-4xl">
                    {slide.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm text-white/70 sm:text-base">
                    {slide.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div
            className="absolute left-0 top-0 z-20 h-0.5 bg-teal transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
            {carouselSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                className={`focus-ring h-2 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-teal"
                    : "w-2 bg-white/25 hover:bg-white/45"
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="focus-ring rounded-sm border border-white/20 px-3 py-2 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              Prev
            </button>
            <button
              type="button"
              className="focus-ring rounded-sm border border-white/20 px-3 py-2 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              className="focus-ring rounded-sm border border-white/20 px-3 py-2 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
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
