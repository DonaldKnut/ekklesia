"use client";

import { FormEvent, useState } from "react";
import { flattenZodErrors, newsletterSchema } from "@/lib/schemas";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "sent">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setError(flattenZodErrors(parsed.error).email ?? "Enter a valid email.");
      return;
    }

    setError("");
    setStatus("saving");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as { ok?: boolean; errors?: Record<string, string> };
      if (!res.ok || !data.ok) {
        setError(data.errors?.email ?? "Unable to subscribe right now.");
        setStatus("idle");
        return;
      }
      setStatus("sent");
      setEmail("");
    } catch {
      setError("Unable to subscribe right now.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
        You are on the list. We will only send useful church-platform notes.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          autoComplete="email"
          placeholder="you@yourchurch.org"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className="min-w-0 flex-1 rounded-full border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        <button
          type="submit"
          disabled={status === "saving"}
          className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 transition-transform hover:scale-[1.03] disabled:opacity-70"
        >
          {status === "saving" ? "Joining…" : "Join"}
        </button>
      </div>
      {error ? <p className="text-xs text-rose-400">{error}</p> : null}
    </form>
  );
}
