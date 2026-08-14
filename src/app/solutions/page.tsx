import type { Metadata } from "next";
import Link from "next/link";
import { FadeRise } from "@/components/motion";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Role Solutions",
  description:
    "How Ekklesia empowers Lead Pastors, Finance Elders, Ministry Leaders, Church Families, and Multi-Site Networks.",
};

const icons = ["✝️", "💰", "🤝", "🏡", "🌐"];

export default function SolutionsPage() {
  return (
    <div className="pt-24 bg-slate-950 min-h-screen text-white">
      {/* Header Banner */}
      <section className="relative overflow-hidden border-b border-amber-500/20 py-24 sm:py-32">
        <div className="absolute inset-0 sacred-atmosphere opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <FadeRise>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
              <span>🎯</span> Solutions By Ministry Role
            </div>
            <h1 className="prose-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
              Tailored Solutions for Every Ministry Calling.
            </h1>
            <p className="prose-subtitle mt-5 max-w-2xl text-lg text-slate-200/85 sm:text-xl">
              Different roles carry unique responsibilities in the body of Christ. Ekklesia provides dedicated views and permissions tailored to how your church operates.
            </p>
          </FadeRise>
        </div>
      </section>

      {/* Solutions Cards List */}
      <div>
        {solutions.map((solution, i) => (
          <section
            key={solution.audience}
            className={`border-b border-amber-500/10 py-20 sm:py-24 ${
              i % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"
            }`}
          >
            <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:px-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <FadeRise>
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <span>{icons[i] || "✝️"}</span>
                    {solution.audience}
                  </div>
                  <h2 className="prose-cinzel text-2xl sm:text-4xl font-bold text-white mt-3">
                    {solution.problem}
                  </h2>
                </FadeRise>
              </div>

              <div className="lg:col-span-7">
                <FadeRise delay={0.1}>
                  <div className="glass-panel-gold rounded-2xl p-8 space-y-6">
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                        ✨ The Ekklesia Outcome
                      </span>
                      <p className="prose-subtitle text-lg text-slate-200/90 sm:text-xl">
                        {solution.outcome}
                      </p>
                    </div>

                    <div className="border-t border-slate-800 pt-6">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
                        Key Capabilities Provided:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">
                              ✓
                            </span>
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeRise>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-slate-950 py-24 border-t border-amber-500/20 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="prose-cinzel text-3xl sm:text-4xl font-bold text-white">
            Transform Your Ministry Ecosystem Today.
          </h2>
          <p className="prose-subtitle mx-auto mt-4 max-w-xl text-lg text-slate-200/80">
            Speak with our team about how Ekklesia can serve your specific congregation size and denomination.
          </p>
          <Link
            href="/contact"
            className="focus-ring mt-8 inline-flex rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
          >
            Book A Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
