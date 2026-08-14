"use client";

import { useState } from "react";

export function GivingCalculator() {
  const [congregationSize, setCongregationSize] = useState(350);
  const [avgGivingPercentage, setAvgGivingPercentage] = useState(65);

  // Simple stewardship formula simulation
  const estimatedMonthlyGiving = Math.round(congregationSize * (avgGivingPercentage / 100) * 125);
  const estimatedAnnualGiving = estimatedMonthlyGiving * 12;

  return (
    <section className="relative py-20 bg-slate-900/60 border-b border-amber-500/20">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>💳</span> Transparent Stewardship & Money
          </div>
          <h2 className="prose-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Giving & Tithes Calculator
          </h2>
          <p className="prose-subtitle mt-3 text-lg text-slate-200/85">
            See how centralized online giving via Paystack and Stripe elevates generosity and provides clear audit records for your church.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 glass-panel-gold rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Congregation Size (Members & Regulars)
                </label>
                <span className="text-base font-bold text-amber-400 font-mono">{congregationSize} Members</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="25"
                value={congregationSize}
                onChange={(e) => setCongregationSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Active Digital Giving Participation
                </label>
                <span className="text-base font-bold text-teal-400 font-mono">{avgGivingPercentage}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="95"
                step="5"
                value={avgGivingPercentage}
                onChange={(e) => setAvgGivingPercentage(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
            </div>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-xs text-slate-300 font-medium">Paystack & Stripe Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">✓</div>
                <span className="text-xs text-slate-300 font-medium">Automatic Tithe Statements</span>
              </div>
            </div>
          </div>

          {/* Results Projection */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/40 p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Projected Monthly Digital Stewardship
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-mono mt-2">
                ${estimatedMonthlyGiving.toLocaleString()}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">
                Calculated based on standard member recurring tithes and offerings
              </span>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Annual Ministry Fund Impact
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono mt-1">
                ${estimatedAnnualGiving.toLocaleString()} / year
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex justify-between font-semibold text-amber-300">
                <span>🔒 Bank-Grade Financial Security</span>
                <span>Role-Based Access</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Church leaders only see aggregate metrics while finance admins retain complete, audited transaction records with instant refund capability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
