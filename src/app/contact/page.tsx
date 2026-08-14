import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeRise } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a demo of Ekklesia for your church.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="atmosphere relative min-h-[calc(100svh-6rem)] overflow-hidden py-20 sm:py-24">
        <div className="grain" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          <FadeRise>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Contact
            </p>
            <h1 className="prose-display mt-4 text-4xl text-ink sm:text-5xl">
              Book a demo
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Tell us a little about your church. We will follow up and show you
              Ekklesia in a way that fits your needs.
            </p>
            <dl className="mt-10 space-y-4 text-sm text-ink-soft">
              <div>
                <dt className="font-medium text-ink">What to expect</dt>
                <dd className="mt-1">
                  A short conversation about people, giving, events, and the
                  care work that matters most to you.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Email</dt>
                <dd className="mt-1">hello@ekklesia.app</dd>
              </div>
            </dl>
          </FadeRise>

          <FadeRise delay={0.12}>
            <ContactForm />
          </FadeRise>
        </div>
      </section>
    </div>
  );
}
