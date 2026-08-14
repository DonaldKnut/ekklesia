import type { Metadata } from "next";
import Link from "next/link";
import { FadeRise } from "@/components/motion";
import { featureGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See what Ekklesia can do — people, events, giving, prayer, messages, and more.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-24">
      <section className="atmosphere relative overflow-hidden border-b border-line py-20 sm:py-24">
        <div className="grain" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <FadeRise>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Features
            </p>
            <h1 className="prose-display mt-4 max-w-3xl text-4xl text-ink sm:text-6xl">
              Everything your church needs in one place.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              From the first visitor to monthly giving and pastoral care — these
              tools are ready for your website or app to use.
            </p>
          </FadeRise>

          <nav
            className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-8"
            aria-label="Feature groups"
          >
            {featureGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="focus-ring text-sm text-ink-soft transition-colors hover:text-teal"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {featureGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 border-b border-line py-20 sm:py-24 ${
            gi % 2 === 0 ? "bg-white" : "bg-stone"
          }`}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <FadeRise>
              <h2 className="prose-display text-3xl text-ink sm:text-4xl">
                {group.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
                {group.intro}
              </p>
            </FadeRise>

            <ul className="mt-12 space-y-10">
              {group.items.map((item, i) => (
                <FadeRise key={item.name} delay={0.04 * (i + 1)}>
                  <li className="grid gap-2 border-t border-line pt-8 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-10">
                    <h3 className="text-lg font-medium tracking-tight text-ink">
                      {item.name}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-soft">
                      {item.detail}
                    </p>
                  </li>
                </FadeRise>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="prose-display text-3xl sm:text-4xl">
            Want to see it for your church?
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
