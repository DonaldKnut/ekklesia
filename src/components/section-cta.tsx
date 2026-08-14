import Link from "next/link";
import { FadeRise } from "@/components/motion";

export function SectionCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-slate-950 border-t border-amber-500/20">
      {/* Radiant ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
        <FadeRise>
          <div className="glass-panel-gold rounded-3xl p-8 sm:p-14 space-y-6 shadow-2xl shadow-black">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <span>🕊️</span> Step Into Divine Order
            </div>

            <h2 className="prose-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Give Your Ministry A Mindblowing Digital Sanctuary.
            </h2>

            <p className="prose-subtitle mx-auto max-w-xl text-lg text-slate-200/85 sm:text-xl">
              Whether you shepherd a planting fellowship of 50 believers or a multi-site network of thousands, Ekklesia scales effortlessly with your mission.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/contact"
                className="focus-ring relative group overflow-hidden rounded-full border border-amber-500/60 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 px-9 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-amber-500/50 active:scale-95"
              >
                Book A Sacred Demo
              </Link>
              <Link
                href="/features"
                className="focus-ring rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-xl transition-all hover:border-amber-500/50 hover:bg-slate-800 hover:text-white"
              >
                Explore All Capabilities
              </Link>
            </div>
          </div>
        </FadeRise>
      </div>
    </section>
  );
}
