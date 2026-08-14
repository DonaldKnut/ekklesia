"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [church, setChurch] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Ekklesia demo request — ${church || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nChurch: ${church || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:hello@ekklesia.app?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-line bg-white p-6 shadow-[0_1px_0_rgba(14,20,25,0.04)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-ink-soft">Your name</span>
          <input
            className="focus-ring mt-2 w-full rounded-sm border border-line bg-stone/40 px-3 py-2.5 text-ink outline-none transition-colors focus:border-teal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-ink-soft">Email</span>
          <input
            type="email"
            className="focus-ring mt-2 w-full rounded-sm border border-line bg-stone/40 px-3 py-2.5 text-ink outline-none transition-colors focus:border-teal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label className="mt-5 block text-sm">
        <span className="text-ink-soft">Church name</span>
        <input
          className="focus-ring mt-2 w-full rounded-sm border border-line bg-stone/40 px-3 py-2.5 text-ink outline-none transition-colors focus:border-teal"
          value={church}
          onChange={(e) => setChurch(e.target.value)}
          autoComplete="organization"
        />
      </label>

      <label className="mt-5 block text-sm">
        <span className="text-ink-soft">How can we help you?</span>
        <textarea
          className="focus-ring mt-2 min-h-32 w-full resize-y rounded-sm border border-line bg-stone/40 px-3 py-2.5 text-ink outline-none transition-colors focus:border-teal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      {status === "error" ? (
        <p className="mt-4 text-sm text-bronze" role="alert">
          Please add your name, email, and a short message.
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="mt-4 text-sm text-teal" role="status">
          Opening your email app — send when you are ready.
        </p>
      ) : null}

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex rounded-sm bg-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-deep"
      >
        Book a demo
      </button>
    </form>
  );
}
