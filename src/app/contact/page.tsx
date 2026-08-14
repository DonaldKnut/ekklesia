import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeRise } from "@/components/motion";

export const metadata: Metadata = {
  title: "Book A Demo",
  description: "Schedule a personalized demonstration of Ekklesia for your church leadership team.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-slate-950 min-h-screen text-white">
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 sacred-atmosphere opacity-60 pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:px-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-6">
            <FadeRise>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-2">
                <span>✉️</span> Get In Touch
              </div>
              <h1 className="prose-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Book A Sacred Demo.
              </h1>
              <p className="prose-subtitle text-lg text-slate-200/85 sm:text-xl">
                Tell us about your congregation. We will arrange a tailored walk-through showing how Ekklesia fits your church&apos;s structure, giving, and care workflow.
              </p>
            </FadeRise>

            <FadeRise delay={0.1}>
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    What To Expect
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    A focused 25-minute overview covering member rosters, Sunday check-in, Paystack & Stripe tithes, intercessory prayer walls, and multi-tenant security.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Direct Email & Support
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono">hello@ekklesia.app</p>
                </div>
              </div>
            </FadeRise>
          </div>

          <div className="lg:col-span-7">
            <FadeRise delay={0.12}>
              <ContactForm />
            </FadeRise>
          </div>
        </div>
      </section>
    </div>
  );
}
