import Link from "next/link";
import { FadeRise } from "@/components/motion";

export function SectionCta() {
  return (
    <section className="atmosphere relative overflow-hidden py-24 sm:py-28">
      <div className="grain" />
      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <FadeRise>
          <h2 className="prose-display mx-auto max-w-3xl text-4xl text-ink sm:text-5xl">
            Give your church a stronger foundation.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Whether you lead one church or many, Ekklesia is built to grow with
            you — not hold you back.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-sm bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-deep"
            >
              Book a demo
            </Link>
            <Link
              href="/features"
              className="focus-ring rounded-sm border border-ink/15 bg-white/50 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              See features
            </Link>
          </div>
        </FadeRise>
      </div>
    </section>
  );
}
