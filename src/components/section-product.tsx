import Link from "next/link";
import { FadeRise } from "@/components/motion";

export function SectionProduct() {
  return (
    <section className="relative border-b border-amber-500/20 bg-slate-950 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeRise>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
                <span>⚡</span> The Unified Platform
              </div>
              <h2 className="prose-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Church Management & Spiritual Growth — Unified as One.
              </h2>
              <p className="prose-subtitle mt-5 text-lg text-slate-200/85 sm:text-xl">
                Most platforms only handle spreadsheets or only stream media. Ekklesia bridges administrative order with pastoral care — empowering leaders to manage members, events, and tithes while feeding spiritual growth through devotionals and intercessory prayer.
              </p>
            </FadeRise>
          </div>

          <div className="lg:col-span-5">
            <FadeRise delay={0.12}>
              <div className="glass-panel-gold rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-lg">
                    ✝️
                  </div>
                  <h3 className="prose-cinzel text-xl font-bold text-white">Role-Tailored Architecture</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Built specifically for Lead Pastors, Church Admins, Finance Elders, Volunteer Leaders, and Congregation Members — with multi-tenant isolation and MFA security.
                </p>
                <Link
                  href="/solutions"
                  className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
                >
                  See Solutions for Your Team →
                </Link>
              </div>
            </FadeRise>
          </div>
        </div>
      </div>
    </section>
  );
}
