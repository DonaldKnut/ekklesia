import type { Metadata } from "next";
import Link from "next/link";
import { FadeRise } from "@/components/motion";
import { featureGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features Matrix",
  description:
    "Explore Ekklesia's full suite of tools for church administration, worship events, Paystack & Stripe giving, and spiritual life.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-24 bg-slate-950 min-h-screen text-white">
      {/* Header Banner */}
      <section className="relative overflow-hidden border-b border-amber-500/20 py-24 sm:py-32">
        <div className="absolute inset-0 sacred-atmosphere opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <FadeRise>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
              <span>💎</span> Comprehensive Ministry Matrix
            </div>
            <h1 className="prose-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
              Everything Your Sanctuary Needs in One Safe Place.
            </h1>
            <p className="prose-subtitle mt-5 max-w-2xl text-lg text-slate-200/85 sm:text-xl">
              From first-time visitor welcoming to recurring tithes and pastoral prayer intercession — every tool is designed to work seamlessly together.
            </p>
          </FadeRise>

          {/* Quick Group Jumper */}
          <nav
            className="mt-12 flex flex-wrap gap-3 border-t border-slate-800 pt-8"
            aria-label="Feature groups navigation"
          >
            {featureGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="focus-ring rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-amber-500/50 hover:text-amber-300 hover:scale-105"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Feature Groups List */}
      {featureGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 border-b border-amber-500/10 py-20 sm:py-24 ${
            gi % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <FadeRise>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Pillar 0{gi + 1}
              </span>
              <h2 className="prose-cinzel mt-1 text-3xl sm:text-4xl font-bold text-white">
                {group.title}
              </h2>
              <p className="prose-subtitle mt-3 max-w-2xl text-lg text-slate-200/80">
                {group.intro}
              </p>
            </FadeRise>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, i) => (
                <FadeRise key={item.name} delay={0.04 * (i + 1)}>
                  <div className="glass-panel-hover rounded-2xl border border-slate-800 bg-slate-900/80 p-6 h-full space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.detail}
                    </p>
                  </div>
                </FadeRise>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-slate-950 py-20 border-t border-amber-500/20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <h2 className="prose-cinzel text-3xl sm:text-4xl font-bold text-white">
            Ready to See Ekklesia in Action for Your Church?
          </h2>
          <p className="prose-subtitle mx-auto mt-4 max-w-xl text-lg text-slate-200/80">
            Book a personalized walkthrough with our church platform team.
          </p>
          <Link
            href="/contact"
            className="focus-ring mt-8 inline-flex rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
          >
            Book A Demo Today
          </Link>
        </div>
      </section>
    </div>
  );
}
