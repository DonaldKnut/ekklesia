"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "people", label: "Members & People", icon: "👥" },
  { id: "services", label: "Gatherings & Services", icon: "🏛️" },
  { id: "giving", label: "Giving & Tithes", icon: "💛" },
  { id: "prayer", label: "Prayer Wall", icon: "🙏" },
  { id: "analytics", label: "Ministry Analytics", icon: "📈" },
];

export function InteractiveDashboardPreview() {
  const [activeTab, setActiveTab] = useState("people");

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <span>✨</span> Interactive Sanctuary Dashboard
          </div>
          <h2 className="prose-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Experience Ekklesia in Action
          </h2>
          <p className="prose-subtitle mt-4 text-lg text-slate-200/85 sm:text-xl">
            Click through the live ministry tools below to see how Ekklesia unifies your people, worship services, giving, and prayer requests into one serene system.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`focus-ring relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-105"
                    : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-white"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Mockup Display */}
        <div className="glass-panel-gold rounded-2xl p-4 sm:p-8 shadow-2xl shadow-black/80">
          {/* Top Bar Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-slate-400 font-mono pl-3 border-l border-slate-800">
                https://grace-cathedral.ekklesia.app
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Sanctuary Active
              </span>
              <span className="text-xs text-amber-300 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                Grace Cathedral Assembly
              </span>
            </div>
          </div>

          {/* Dynamic Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "people" && (
              <motion.div
                key="people"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Congregation & Visitor Roster</h3>
                    <p className="text-xs text-slate-400">1,248 active members registered this quarter</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-medium">Export CSV</span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-medium">+ Add Member</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead className="text-xs text-slate-400 uppercase bg-slate-900/60">
                      <tr>
                        <th className="px-4 py-3 rounded-l-lg">Name</th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3">Department</th>
                        <th className="px-4 py-3">Attendance</th>
                        <th className="px-4 py-3 rounded-r-lg">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-white flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 font-bold text-xs">PA</div>
                          Pastor Emmanuel Adebayo
                        </td>
                        <td className="px-4 py-3"><span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-xs font-medium">Lead Pastor</span></td>
                        <td className="px-4 py-3">Pastoral Care</td>
                        <td className="px-4 py-3"><div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-amber-400 h-full w-[98%]" /></div></td>
                        <td className="px-4 py-3"><span className="text-xs text-emerald-400 font-semibold">Active</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-white flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-300 flex items-center justify-center text-slate-950 font-bold text-xs">SJ</div>
                          Sister Sarah Johnson
                        </td>
                        <td className="px-4 py-3"><span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-xs font-medium">Worship Leader</span></td>
                        <td className="px-4 py-3">Choir & Music</td>
                        <td className="px-4 py-3"><div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-amber-400 h-full w-[92%]" /></div></td>
                        <td className="px-4 py-3"><span className="text-xs text-emerald-400 font-semibold">Active</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-white flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-300 flex items-center justify-center text-slate-950 font-bold text-xs">DO</div>
                          Deacon David Okon
                        </td>
                        <td className="px-4 py-3"><span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-medium">Finance Elder</span></td>
                        <td className="px-4 py-3">Stewardship</td>
                        <td className="px-4 py-3"><div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-amber-400 h-full w-[95%]" /></div></td>
                        <td className="px-4 py-3"><span className="text-xs text-emerald-400 font-semibold">Active</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-white flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-pink-300 flex items-center justify-center text-slate-950 font-bold text-xs">GV</div>
                          Grace Visitor (1st Sunday)
                        </td>
                        <td className="px-4 py-3"><span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">First-time Guest</span></td>
                        <td className="px-4 py-3">Welcome Team</td>
                        <td className="px-4 py-3"><div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-emerald-400 h-full w-[100%]" /></div></td>
                        <td className="px-4 py-3"><span className="text-xs text-amber-400 font-semibold">Follow-up Sent</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="p-5 rounded-xl border border-amber-500/30 bg-slate-900/60">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Upcoming Sunday</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">9:00 AM & 11:30 AM</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Divine Encounter & Anointing Service</h4>
                  <p className="text-xs text-slate-400 mb-4">Main Sanctuary · 45 Voluntaries Roster Assigned</p>
                  <div className="flex justify-between items-center text-xs text-slate-300 border-t border-slate-800 pt-3">
                    <span>Expected: 850 Believers</span>
                    <span className="text-amber-300 font-semibold">Tickets Active</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Wednesday Prayer</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-bold">6:00 PM</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Hour of Power & Intercession</h4>
                  <p className="text-xs text-slate-400 mb-4">Chapel & Online Livestream</p>
                  <div className="flex justify-between items-center text-xs text-slate-300 border-t border-slate-800 pt-3">
                    <span>Expected: 320 Believers</span>
                    <span className="text-teal-400 font-semibold">Livestream Ready</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Youth Gathering</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-bold">Friday 5:00 PM</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Ignite Youth & Young Adults Fellowship</h4>
                  <p className="text-xs text-slate-400 mb-4">Youth Hall · Worship & Panel Discussion</p>
                  <div className="flex justify-between items-center text-xs text-slate-300 border-t border-slate-800 pt-3">
                    <span>Registered: 195 Youths</span>
                    <span className="text-amber-400 font-semibold">RSVP Open</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "giving" && (
              <motion.div
                key="giving"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30">
                    <span className="text-xs text-slate-400 font-medium">Monthly Tithes Received</span>
                    <div className="text-2xl font-bold text-amber-400 mt-1">$48,250.00</div>
                    <span className="text-[10px] text-emerald-400">↑ 14% vs last month</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Building & Mission Fund</span>
                    <div className="text-2xl font-bold text-white mt-1">$19,400.00</div>
                    <span className="text-[10px] text-slate-400">82% of campaign goal</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Recurring Monthly Donors</span>
                    <div className="text-2xl font-bold text-teal-400 mt-1">312 Members</div>
                    <span className="text-[10px] text-teal-400">Automated Paystack & Stripe</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300">
                  <div className="flex justify-between items-center font-semibold text-white mb-2">
                    <span>Recent Stewardship Audit Ledger</span>
                    <span className="text-amber-400">Encrypted & Immutable</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span>Monthly Tithe — Member #0482</span>
                      <span className="font-mono text-emerald-400">+$450.00 (Stripe)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span>Welfare & Needy Fund — Anonymous</span>
                      <span className="font-mono text-emerald-400">+$200.00 (Paystack)</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span>Children Ministry Project</span>
                      <span className="font-mono text-emerald-400">+$1,000.00 (Direct Transfer)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "prayer" && (
              <motion.div
                key="prayer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="p-5 rounded-xl border border-amber-500/30 bg-slate-900/80 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">Healing & Strength</span>
                    <span className="text-xs text-slate-400">12 mins ago</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Prayer for Sister Mary’s Quick Recovery</h4>
                  <p className="text-xs text-slate-300 italic">&quot;Please agree with our family as Sister Mary undergoes surgery this Thursday morning. We stand on Isaiah 53:5.&quot;</p>
                  <div className="flex justify-between items-center border-t border-slate-800 pt-3">
                    <span className="text-xs text-amber-300 font-medium">🙏 148 Believers Prayed</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-bold">Interceding</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/80 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">Testimony & Praise</span>
                    <span className="text-xs text-slate-400">2 hours ago</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Praise God for Job Breakthrough!</h4>
                  <p className="text-xs text-slate-300 italic">&quot;After 6 months of praying with the church intercessory group, God provided a new leadership position today!&quot;</p>
                  <div className="flex justify-between items-center border-t border-slate-800 pt-3">
                    <span className="text-xs text-emerald-400 font-medium">🙌 310 Rejoicing Notes</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold">Approved Story</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-amber-400">96.4%</div>
                    <div className="text-xs text-slate-400 mt-1">Sunday Attendance Rate</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-teal-400">42 Groups</div>
                    <div className="text-xs text-slate-400 mt-1">Active Small Groups</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-purple-400">100% MFA</div>
                    <div className="text-xs text-slate-400 mt-1">Admin Security Enforcement</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-emerald-400">2,450+</div>
                    <div className="text-xs text-slate-400 mt-1">Monthly Active Faith Users</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
