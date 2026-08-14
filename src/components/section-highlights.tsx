import Link from "next/link";
import { homeHighlights } from "@/lib/content";
import { FadeRise } from "@/components/motion";

export function SectionHighlights() {
  return (
    <section className="border-b border-line bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeRise>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
            What you get
          </p>
          <h2 className="prose-display mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">
            Tools for running the church — and growing people.
          </h2>
        </FadeRise>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {homeHighlights.map((item, i) => (
            <FadeRise key={item.title} delay={0.06 * (i + 1)}>
              <h3 className="prose-display text-2xl text-ink sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </FadeRise>
          ))}
        </div>

        <FadeRise delay={0.2} className="mt-14">
          <Link
            href="/features"
            className="focus-ring inline-flex rounded-sm bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-deep"
          >
            See all features
          </Link>
        </FadeRise>
      </div>
    </section>
  );
}
