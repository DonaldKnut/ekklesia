"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [church, setChurch] = useState("");
  const [role, setRole] = useState("Lead Pastor");
  const [size, setSize] = useState("100-500 members");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(true);
      return;
    }

    setError(false);
    setSubmitted(true);
  }

  return (
    <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {!submitted ? (
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
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pastor David Adebayo"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="pastor@yourchurch.org"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Church / Ministry Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grace Assembly Cathedral"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={church}
                  onChange={(e) => setChurch(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Ministry Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="Lead Pastor">Lead Pastor / Senior Minister</option>
                  <option value="Executive Pastor">Executive Pastor / Administrator</option>
                  <option value="Finance Leader">Finance Elder / Treasurer</option>
                  <option value="Ministry Leader">Worship / Youth Leader</option>
                  <option value="IT Director">IT / Operations Director</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Congregation Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="Planting (< 100 members)">Planting Congregation (&lt; 100 members)</option>
                <option value="100-500 members">Growing Fellowship (100 - 500 members)</option>
                <option value="500-2,000 members">Large Cathedral (500 - 2,000 members)</option>
                <option value="Multi-site Network (2,000+ members)">Multi-site Network (2,000+ members)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                How Can Ekklesia Serve Your Church? <span className="text-amber-400">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your member care, giving, or event needs..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg font-medium">
                Please fill in your name, email address, and a message so our platform team can reach out.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full border border-amber-500/60 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Request A Sacred Demo
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="form-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 flex items-center justify-center text-3xl mx-auto shadow-2xl shadow-amber-500/30">
              ✨
            </div>
            <h3 className="prose-cinzel text-2xl font-bold text-white">
              Demo Request Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-300">{name}</strong>. Our church platform specialist will contact you at <strong className="text-amber-300">{email}</strong> to schedule a walk-through for <strong className="text-amber-300">{church || "your congregation"}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 max-w-md mx-auto">
              &quot;Commit thy works unto the LORD, and thy thoughts shall be established.&quot; — Proverbs 16:3
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-full border border-slate-800 bg-slate-900 text-xs font-semibold text-slate-300 hover:text-white"
            >
              Submit Another Request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
