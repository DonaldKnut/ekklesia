import { problemPoints } from "@/lib/content";
import { FadeRise } from "@/components/motion";

export function SectionProblem() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white py-24 sm:py-28">
      <div className="atmosphere absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <FadeRise>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            The problem
          </p>
          <h2 className="prose-display mt-4 max-w-3xl text-4xl text-ink sm:text-5xl">
            Running a church should not feel this hard.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            When people, money, messages, and ministry sit in different apps,
            leaders spend more time hunting for information than caring for
            people.
          </p>
        </FadeRise>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {problemPoints.map((point, i) => (
            <FadeRise key={point.title} delay={0.08 * (i + 1)}>
              <p className="text-sm font-medium text-bronze">{point.title}</p>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {point.body}
              </p>
            </FadeRise>
          ))}
        </div>
      </div>
    </section>
  );
}
