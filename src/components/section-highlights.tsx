import Link from "next/link";
import { homeHighlights } from "@/lib/content";
import { FadeRise } from "@/components/motion";

const icons = ["👥", "🏛️", "💳", "📖"];

export function SectionHighlights() {
  return (
    <section className="relative border-b border-amber-500/20 bg-slate-950 py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <FadeRise>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>🌟</span> Key Pillars of Ekklesia
          </div>
          <h2 className="prose-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Tools to Govern the Church — and Nurture Believers.
          </h2>
        </FadeRise>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {homeHighlights.map((item, i) => (
            <FadeRise key={item.title} delay={0.06 * (i + 1)}>
              <div className="glass-panel-hover rounded-2xl border border-slate-800 bg-slate-900/60 p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center text-2xl shadow-inner">
                    {icons[i] || "🌟"}
                  </div>
                  <h3 className="prose-cinzel text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {item.body}
                </p>
              </div>
            </FadeRise>
          ))}
        </div>

        <FadeRise delay={0.2} className="mt-14 text-center sm:text-left">
          <Link
            href="/features"
            className="focus-ring relative inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
          >
            Explore All Features Matrix →
          </Link>
        </FadeRise>
      </div>
    </section>
  );
}
