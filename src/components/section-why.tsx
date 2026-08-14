import { whyPoints } from "@/lib/content";
import { FadeRise } from "@/components/motion";

export function SectionWhy() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink py-24 text-white sm:py-28">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 10%, rgba(11,110,107,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(166,124,82,0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <FadeRise>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-mist">
            Why Ekklesia
          </p>
          <h2 className="prose-display mt-4 max-w-3xl text-4xl sm:text-5xl">
            Built for real churches — and serious about safety.
          </h2>
        </FadeRise>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {whyPoints.map((point, i) => (
            <FadeRise key={point.title} delay={0.07 * (i + 1)}>
              <h3 className="text-lg font-medium tracking-tight text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/65">
                {point.body}
              </p>
            </FadeRise>
          ))}
        </div>
      </div>
    </section>
  );
}
