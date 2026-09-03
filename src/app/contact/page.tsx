'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Shield, Globe } from 'lucide-react';

const INTEREST_AREAS = [
  'AIoT',
  'COSMOS',
  'Flight Lab',
  'Robotics',
  'ATLAS',
  'AI / Software',
  'Research Collaboration',
  'Technology Partnership',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    areaOfInterest: 'AIoT',
    projectDescription: '',
    budgetStage: 'Prototype Stage',
    timeline: '3-6 Months',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-300 font-mono-tech text-xs tracking-widest uppercase">
            <Mail className="w-4 h-4" />
            MISSION CONTROL SYSTEM INTAKE
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight uppercase">
            HAVE A SYSTEM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              WORTH BUILDING?
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Tell us what you&apos;re trying to build. Let&apos;s explore the technology required to make it real.
          </p>

        </div>
      </section>


      {/* FORM & DIRECTORY GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-xl bg-[#0E1322] border border-cyan-500/20 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4 font-mono-tech">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-100 uppercase">
                  SYSTEM TRANSMISSION RECEIVED
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you for initiating contact. A Cognicierge engineering specialist will review your project requirements and respond shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider rounded"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono-tech text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-300 font-bold uppercase tracking-wider block">NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Arjun Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-300 font-bold uppercase tracking-wider block">ORGANISATION *</label>
                    <input
                      type="text"
                      required
                      placeholder="Aerospace R&D / Robotics Lab"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-300 font-bold uppercase tracking-wider block">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="engineering@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-300 font-bold uppercase tracking-wider block">PHONE (OPTIONAL)</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-300 font-bold uppercase tracking-wider block">AREA OF INTEREST *</label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400 cursor-pointer"
                  >
                    {INTEREST_AREAS.map((area) => (
                      <option key={area} value={area} className="bg-[#07090E] text-slate-200">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-300 font-bold uppercase tracking-wider block">PROJECT DESCRIPTION *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Outline your technical requirements, sensors, computing hardware or system goals..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-300 font-bold uppercase tracking-wider block">BUDGET / STAGE (OPTIONAL)</label>
                    <input
                      type="text"
                      placeholder="e.g. Prototype / R&D Pilot"
                      value={formData.budgetStage}
                      onChange={(e) => setFormData({ ...formData, budgetStage: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-300 font-bold uppercase tracking-wider block">TIMELINE (OPTIONAL)</label>
                    <input
                      type="text"
                      placeholder="e.g. 3-6 Months"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[#07090E] border border-slate-700 rounded text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs rounded transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <span>START THE CONVERSATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Headquarters Info & Channels */}
          <div className="lg:col-span-5 space-y-8 font-mono-tech text-xs">
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>COGNICIERGE SOLUTIONS / INDIA</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs font-light">
                Deep-Tech Hardware R&amp;D Facilities &amp; Autonomous Systems Innovation Hub.
              </p>
              <div className="text-[11px] text-slate-400 space-y-1">
                <div>BANGALORE, KARNATAKA, INDIA</div>
                <div>PRIMARY COORDINATES: 12.9716° N, 77.5946° E</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>ENGINEERING CHANNELS</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div>contact@cognicierge.in</div>
                <div>engineering@cognicierge.in</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-3">
              <div className="text-slate-400 uppercase text-[10px]">VERIFIED DISCLOSURE</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All communications are handled directly by Cognicierge engineering teams. No automated sales bots.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
