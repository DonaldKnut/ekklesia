import Link from "next/link";
import { navLinks } from "@/lib/content";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-amber-500/20 bg-slate-950 text-white">
      <div className="border-b border-amber-500/10 bg-slate-900/60 px-6 py-6 text-center">
        <p className="prose-cinzel mx-auto max-w-3xl text-sm font-medium tracking-wide text-amber-300 sm:text-base">
          &quot;Let all things be done decently and in order.&quot; — 1 Corinthians 14:40
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12 lg:px-12">
        <div className="space-y-4 md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/40 bg-slate-900 shadow-inner">
              <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m-6-12h12" />
              </svg>
            </div>
            <span className="prose-cinzel text-2xl font-bold tracking-wider text-white">EKKLESIA</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed tracking-wide text-slate-300">
            One home for church administration, worship planning, giving, prayer, and spiritual growth.
          </p>
        </div>

        <div className="space-y-3 md:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
            Explore
          </span>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring text-sm tracking-wide text-slate-300 transition-colors hover:text-amber-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 md:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
            Newsletter
          </span>
          <p className="text-sm leading-relaxed tracking-wide text-slate-300">
            Occasional notes on church operations, giving, and care — no noise.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-slate-800/80 bg-slate-950 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-center text-xs tracking-wide text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ekklesia. All rights reserved.</p>
          <p>Church management · Spiritual growth · Built to be safe</p>
        </div>
      </div>
    </footer>
  );
}
