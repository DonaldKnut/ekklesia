import Link from "next/link";
import { FadeRise } from "@/components/motion";

export function SectionProduct() {
  return (
    <section className="border-b border-line bg-stone py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeRise>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
              What it is
            </p>
            <h2 className="prose-display mt-4 text-4xl text-ink sm:text-5xl">
              Church management and spiritual growth — together.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Ekklesia helps churches manage members, events, and giving, while
              also supporting prayer, devotionals, and care. One secure system
              for everyday church life.
            </p>
          </FadeRise>

          <FadeRise delay={0.12}>
            <div className="border-l border-teal/30 pl-6 sm:pl-8">
              <p className="text-sm leading-relaxed text-ink-soft">
                Built for pastors, admins, finance teams, volunteers, and
                members — with permissions that match how your church really
                works.
              </p>
              <Link
                href="/solutions"
                className="focus-ring mt-6 inline-flex text-sm font-medium text-teal transition-colors hover:text-teal-deep"
              >
                Who it helps →
              </Link>
            </div>
          </FadeRise>
        </div>
      </div>
    </section>
  );
}
