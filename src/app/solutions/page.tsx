import type { Metadata } from "next";
import Link from "next/link";
import { FadeRise } from "@/components/motion";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How Ekklesia helps pastors, finance teams, workers, members, and church networks.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      <section className="border-b border-line bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FadeRise>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Solutions
            </p>
            <h1 className="prose-display mt-4 max-w-3xl text-4xl text-ink sm:text-6xl">
              Real problems. Clear help.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Different people in church carry different loads. Ekklesia is
              shaped around how churches actually work.
            </p>
          </FadeRise>
        </div>
      </section>

      <div>
        {solutions.map((solution, i) => (
          <section
            key={solution.audience}
            className={`border-b border-line py-20 sm:py-24 ${
              i % 2 === 0 ? "bg-stone" : "bg-white"
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <FadeRise>
                <p className="text-sm font-medium text-bronze">
                  {solution.audience}
                </p>
                <h2 className="prose-display mt-4 text-3xl text-ink sm:text-4xl">
                  {solution.problem}
                </h2>
              </FadeRise>
              <FadeRise delay={0.1}>
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {solution.outcome}
                </p>
                <ul className="mt-8 space-y-3">
                  {solution.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex gap-3 text-sm text-ink before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-teal before:content-['']"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </FadeRise>
            </div>
          </section>
        ))}
      </div>

      <section className="atmosphere relative overflow-hidden py-20">
        <div className="grain" />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="prose-display text-3xl text-ink sm:text-4xl">
            Tell us about your church.
          </h2>
          <Link
            href="/contact"
            className="focus-ring mt-8 inline-flex rounded-sm bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-deep"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
