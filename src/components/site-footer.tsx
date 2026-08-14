import Link from "next/link";
import { navLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="prose-display text-3xl">Ekklesia</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Simple church tools for people, events, giving, and spiritual growth
            — safe and ready as you grow.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            Get started
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Want to see Ekklesia for your church?
          </p>
          <Link
            href="/contact"
            className="focus-ring mt-5 inline-flex rounded-sm bg-teal px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-deep"
          >
            Book a demo
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ekklesia. All rights reserved.</p>
          <p>Church management · Spiritual growth · Built to be safe</p>
        </div>
      </div>
    </footer>
  );
}
