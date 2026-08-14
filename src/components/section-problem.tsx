import { problemPoints } from "@/lib/content";
import { FadeRise } from "@/components/motion";

const icons = ["📱", "🔒", "📈"];

export function SectionProblem() {
  return (
    <section className="relative overflow-hidden border-b border-amber-500/20 bg-slate-950 py-24 sm:py-32">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <FadeRise>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>⚠️</span> The Ministry Challenge
          </div>
          <h2 className="prose-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Shepherding God&apos;s flock should not feel fragmented.
          </h2>
          <p className="prose-subtitle mt-4 max-w-2xl text-lg text-slate-200/85 sm:text-xl">
            When church member lists, prayer requests, tithe records, and group messages sit in isolated apps, pastoral leaders spend more energy fighting spreadsheets than discipling people.
          </p>
        </FadeRise>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problemPoints.map((point, i) => (
            <FadeRise key={point.title} delay={0.08 * (i + 1)}>
              <div className="glass-panel-hover rounded-2xl border border-slate-800 bg-slate-900/60 p-8 h-full space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center text-2xl shadow-inner">
                  {icons[i] || "⚠️"}
                </div>
                <h3 className="prose-cinzel text-xl font-bold text-white">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
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
