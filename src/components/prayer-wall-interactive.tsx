"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PrayerWallInteractive() {
  const [requestTitle, setRequestTitle] = useState("");
  const [category, setCategory] = useState("Healing");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [prayerCount, setPrayerCount] = useState(482);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestTitle.trim()) return;
    setSubmitted(true);
    setPrayerCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setRequestTitle("");
    setDetails("");
    setSubmitted(false);
  };

  return (
    <section className="relative py-20 bg-slate-950/90 border-y border-amber-500/20">
      {/* Background glow */}
      <div className="absolute inset-0 sacred-atmosphere pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Vision & Encouragement */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>🙏</span> Spiritual Life & Prayer
            </div>
            <h2 className="prose-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              &quot;For where two or three gather in my name, there am I with them.&quot;
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Ekklesia isn&apos;t just software for lists — it&apos;s a spiritual sanctuary. Share prayer requests privately or with your church intercessory ministry, track answered prayers, and encourage your congregation through authentic testimony.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
                <div className="text-2xl font-bold text-amber-400 font-mono">{prayerCount}</div>
                <div className="text-xs text-slate-400 mt-1">Intercessory Prayers Raised</div>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
                <div className="text-2xl font-bold text-teal-400 font-mono">100% Secure</div>
                <div className="text-xs text-slate-400 mt-1">Pastoral Confidentiality</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Submission Card */}
          <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 relative">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>🕯️</span> Test the Prayer Wall
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Experience how easy it is for members to send prayer needs to their pastoral team.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Prayer Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prayer for Divine Healing & Guidance"
                      value={requestTitle}
                      onChange={(e) => setRequestTitle(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Ministry Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Healing">Divine Healing & Health</option>
                      <option value="Family">Family & Restoration</option>
                      <option value="Breakthrough">Career & Financial Breakthrough</option>
                      <option value="Wisdom">Spiritual Growth & Wisdom</option>
                      <option value="Thanksgiving">Thanksgiving & Testimony</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Prayer Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share brief details for the intercessors..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl border border-amber-500/50 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Submit Prayer to Intercessors
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center text-3xl mx-auto shadow-xl shadow-amber-500/20">
                    ✨
                  </div>
                  <h4 className="text-xl font-bold text-white prose-cinzel">Prayer Received in Agreement!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Your request titled <strong className="text-amber-300 font-semibold">&quot;{requestTitle}&quot;</strong> has been logged to the intercessory dashboard.
                  </p>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                    &quot;The effectual fervent prayer of a righteous man availeth much.&quot; — James 5:16
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-5 py-2 rounded-xl border border-slate-700 bg-slate-900 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Submit Another Test Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
