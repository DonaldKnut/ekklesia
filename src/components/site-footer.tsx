import Link from "next/link";
import { navLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-500/20 bg-slate-950 text-white relative">
      {/* Scripture Quote Header Banner */}
      <div className="border-b border-amber-500/10 bg-slate-900/60 py-6 px-6 text-center">
        <p className="prose-cinzel text-sm sm:text-base text-amber-300 tracking-wide font-medium italic max-w-3xl mx-auto">
          &quot;Let all things be done decently and in order.&quot; — 1 Corinthians 14:40
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:px-12 md:grid-cols-12">
        {/* Brand & Mission */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/40 bg-slate-900 shadow-inner">
              <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m-6-12h12" />
              </svg>
            </div>
            <span className="prose-cinzel text-2xl font-bold tracking-wider text-white">EKKLESIA</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-light">
            One sacred digital sanctuary for church administration, worship planning, Paystack & Stripe tithing, intercessory prayer walls, and spiritual growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Platform Navigation
          </span>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring text-xs sm:text-sm text-slate-300 hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/solutions"
                className="focus-ring text-xs sm:text-sm text-slate-300 hover:text-amber-300 transition-colors"
              >
                Role Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="md:col-span-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Shepherd Your Church Well
          </span>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            Ready to give your church a world-class administrative and faith experience?
          </p>
          <Link
            href="/contact"
            className="focus-ring inline-flex rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
          >
            Book A Demo Today
          </Link>
        </div>
      </div>

      {/* Copyright Footer Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6 px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Ekklesia Church Platform. All rights reserved.</p>
          <p className="text-slate-400">Sanctuary Governance · Spiritual Growth · Bank-Grade Encryption</p>
        </div>
      </div>
    </footer>
  );
}
