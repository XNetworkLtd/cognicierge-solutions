'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import { Shield, Eye, Brain, Activity, Zap, MapPin, Globe, Cpu, Radio, ArrowRight } from 'lucide-react';

const PRINCIPLES = [
  { title: 'PERCEIVE', icon: Eye, desc: 'Capturing physical reality through optical, thermal, vibrational and spatial sensors.' },
  { title: 'UNDERSTAND', icon: Brain, desc: 'Filtering raw telemetry into contextual models using embedded AI algorithms.' },
  { title: 'DECIDE', icon: Activity, desc: 'Executing deterministic state evaluation and real-time safety interlocks.' },
  { title: 'ACT', icon: Zap, desc: 'Manipulating actuators, flight surfaces and physical hardware drives.' },
];

const GLOBAL_NODES = [
  { city: 'INDIA R&D HQ', role: 'Primary Engineering & Hardware Prototyping Lab (Bangalore)', coord: '12.9716° N, 77.5946° E' },
  { city: 'GLOBAL DEEP-TECH NETWORK', role: 'Interconnected edge telemetry, aerospace research & satellite ground nodes', coord: 'Global Topology' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-300 font-mono-tech text-xs tracking-widest uppercase">
            <Shield className="w-4 h-4" />
            ENGINEERING PHILOSOPHICAL MANIFESTO
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight uppercase">
            WE BUILD WHERE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              SOFTWARE MEETS REALITY.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Cognicierge Solutions is an India-focused deep-tech engineering organization developing intelligent physical systems across AI, Electronics, IoT, Robotics, Autonomous Systems, Space Tech and Edge Computing.
          </p>

        </div>
      </section>


      {/* ENGINEERING PHILOSOPHY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest">
              OUR CORE ENGINEERING FOUNDATION
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              PERCEIVE. UNDERSTAND. <br />
              <span className="text-cyan-400">DECIDE. ACT.</span>
            </h2>
            <blockquote className="text-slate-300 text-sm sm:text-base italic leading-relaxed max-w-2xl mx-auto font-light pt-2">
              &ldquo;We believe the next generation of intelligent technology will not simply generate information. It will perceive the physical world, reason about it and act within it.&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 rounded-xl bg-[#0E1322] border border-cyan-500/20 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-100">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono-tech">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* BUILT IN INDIA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono-tech text-xs tracking-widest uppercase rounded">
              <Globe className="w-4 h-4" />
              GLOBAL TECH ECOSYSTEM
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              BUILT IN INDIA. <br />
              <span className="text-emerald-400">DESIGNED FOR THE WORLD.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Cognicierge operates from India&apos;s premier deep-tech hardware R&amp;D ecosystems, pioneering sovereign engineering solutions in space domain awareness, autonomous aviation, and edge AI hardware platforms built for international interoperability.
            </p>

            <div className="space-y-3 font-mono-tech text-xs pt-2">
              {GLOBAL_NODES.map((node) => (
                <div key={node.city} className="p-4 rounded-lg bg-[#0E1322] border border-slate-800 space-y-1">
                  <div className="text-emerald-400 font-bold flex items-center justify-between">
                    <span>{node.city}</span>
                    <span className="text-[10px] text-slate-400">{node.coord}</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">{node.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Tech World Map Visualizer */}
          <div className="lg:col-span-6 p-8 rounded-xl bg-[#0E1322] border border-emerald-500/30 space-y-6 font-mono-tech text-xs">
            <div className="text-emerald-400 font-bold uppercase tracking-wider flex items-center justify-between">
              <span>INDIA DEEP-TECH NODE TOPOLOGY</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="relative h-64 border border-slate-800 rounded bg-[#07090E] p-4 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid-dense opacity-40 pointer-events-none" />
              
              <div className="relative z-10 flex justify-between text-[10px] text-slate-500">
                <span>LAT: 12.9716° N</span>
                <span>LON: 77.5946° E</span>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-2">
                <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                <span className="text-slate-100 font-bold text-sm">BANGALORE R&amp;D HARDWARE CORE</span>
                <span className="text-emerald-400 text-[10px]">CONNECTED TO GLOBAL TECH ECOSYSTEMS</span>
              </div>

              <div className="relative z-10 flex justify-between text-[10px] text-slate-500">
                <span>STATUS: OPERATIONAL</span>
                <span>SECURITY: ENCRYPTED</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 leading-relaxed">
              Engineered with physical rigor, sovereign self-reliance and global engineering standards.
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
