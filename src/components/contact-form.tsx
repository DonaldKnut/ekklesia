"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema, flattenZodErrors, type ContactInput } from "@/lib/schemas";

const empty: ContactInput = {
  name: "",
  email: "",
  church: "",
  role: "Lead Pastor",
  size: "100-500 members",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "saving" | "sent" | "failed">("idle");

  function setField<K extends keyof ContactInput>(key: K, value: ContactInput[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(flattenZodErrors(parsed.error));
      return;
    }

    setStatus("saving");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as { ok?: boolean; errors?: Record<string, string> };
      if (!res.ok || !data.ok) {
        setErrors(data.errors ?? { form: "Unable to send right now. Please try again." });
        setStatus("failed");
        return;
      }
      setStatus("sent");
    } catch {
      setErrors({ form: "Unable to send right now. Please try again." });
      setStatus("failed");
    }
  }

  const fieldClass =
    "w-full rounded-xl border bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";

  return (
    <div className="glass-panel-gold relative overflow-hidden rounded-3xl p-6 shadow-2xl sm:p-10">
      <AnimatePresence mode="wait">
        {status !== "sent" ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your full name" required error={errors.name}>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Pastor David Adebayo"
                  className={`${fieldClass} ${errors.name ? "border-rose-400/60" : "border-slate-800"}`}
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                />
              </Field>
              <Field label="Email address" required error={errors.email}>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="pastor@yourchurch.org"
                  className={`${fieldClass} ${errors.email ? "border-rose-400/60" : "border-slate-800"}`}
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Church / ministry name" error={errors.church}>
                <input
                  type="text"
                  autoComplete="organization"
                  placeholder="e.g. Grace Assembly Cathedral"
                  className={`${fieldClass} ${errors.church ? "border-rose-400/60" : "border-slate-800"}`}
                  value={values.church ?? ""}
                  onChange={(e) => setField("church", e.target.value)}
                />
              </Field>
              <Field label="Ministry role" error={errors.role}>
                <select
                  value={values.role}
                  onChange={(e) => setField("role", e.target.value)}
                  className={`${fieldClass} border-slate-800`}
                >
                  <option value="Lead Pastor">Lead Pastor / Senior Minister</option>
                  <option value="Executive Pastor">Executive Pastor / Administrator</option>
                  <option value="Finance Leader">Finance Elder / Treasurer</option>
                  <option value="Ministry Leader">Worship / Youth Leader</option>
                  <option value="IT Director">IT / Operations Director</option>
                </select>
              </Field>
            </div>

            <Field label="Congregation size" error={errors.size}>
              <select
                value={values.size}
                onChange={(e) => setField("size", e.target.value)}
                className={`${fieldClass} border-slate-800`}
              >
                <option value="Planting (< 100 members)">Planting congregation (under 100)</option>
                <option value="100-500 members">Growing fellowship (100–500)</option>
                <option value="500-2,000 members">Large cathedral (500–2,000)</option>
                <option value="Multi-site Network (2,000+ members)">Multi-site network (2,000+)</option>
              </select>
            </Field>

            <Field label="How can Ekklesia serve your church?" required error={errors.message}>
              <textarea
                rows={4}
                placeholder="Tell us about member care, giving, or event needs..."
                className={`${fieldClass} ${errors.message ? "border-rose-400/60" : "border-slate-800"}`}
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
              />
            </Field>

            {errors.form ? (
              <p className="rounded-lg border border-rose-500/20 bg-rose-500/10 p-3 text-xs font-medium text-rose-400">
                {errors.form}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "saving"}
              className="w-full rounded-full border border-amber-500/60 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.015] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
            >
              {status === "saving" ? "Sending…" : "Request a demo"}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="form-success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-5 py-12 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/50 bg-amber-500/20 text-2xl text-amber-300 shadow-2xl shadow-amber-500/30">
              ✓
            </div>
            <h3 className="prose-cinzel text-2xl font-bold text-white">
              We received your request
            </h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-300">
              Thank you, <strong className="text-amber-300">{values.name}</strong>. We will
              write to <strong className="text-amber-300">{values.email}</strong> to set a
              walk-through for{" "}
              <strong className="text-amber-300">{values.church || "your congregation"}</strong>.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(empty);
                setErrors({});
                setStatus("idle");
              }}
              className="rounded-full border border-slate-800 bg-slate-900 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
            >
              Send another request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
        {label}
        {required ? <span className="text-amber-400"> *</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-rose-400">{error}</span> : null}
    </label>
  );
}
