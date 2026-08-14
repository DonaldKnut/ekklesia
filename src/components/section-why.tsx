import { whyPoints } from "@/lib/content";
import { FadeRise } from "@/components/motion";

const icons = ["🏛️", "🛡️", "⚙️", "🕊️"];

export function SectionWhy() {
  return (
    <section className="relative overflow-hidden border-b border-amber-500/20 bg-slate-950 py-24 sm:py-32">
      {/* Sacred light atmosphere */}
      <div className="absolute inset-0 sacred-atmosphere pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <FadeRise>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>🛡️</span> Sanctuary Governance & Safety
          </div>
          <h2 className="prose-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Designed for Real Churches — Secured with Integrity.
          </h2>
        </FadeRise>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {whyPoints.map((point, i) => (
            <FadeRise key={point.title} delay={0.07 * (i + 1)}>
              <div className="glass-panel-hover rounded-2xl border border-slate-800 bg-slate-900/70 p-8 h-full space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center text-xl shadow-inner">
                    {icons[i] || "🛡️"}
                  </div>
                  <h3 className="prose-cinzel text-xl font-bold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {point.body}
                </p>
              </div>
            </FadeRise>
          ))}
        </div>
      </div>
    </section>
  );
}
