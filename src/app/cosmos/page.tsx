'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import StatusBadge from '@/components/StatusBadge';
import { Orbit, Shield, Cpu, Activity, ArrowRight, Eye, Radio, Database, Zap, Sparkles } from 'lucide-react';

const SpaceScene = dynamic(() => import('@/components/canvas/SpaceScene'), { ssr: false });

const COSMOS_PRODUCTS = [
  {
    name: 'COSMOS SENTINEL',
    subtitle: 'SPACE DOMAIN AWARENESS & INTELLIGENT ANALYSIS',
    desc: 'Automated satellite conjunction assessment, orbital debris tracking, space weather telemetry ingestion and trajectory anomaly detection.',
    status: 'R&D' as const,
    icon: Shield,
    features: ['Orbital Trajectory Prediction', 'RF Telemetry Signal Ingestion', 'Debris Proximity Alerts'],
  },
  {
    name: 'COSMOS TWIN',
    subtitle: 'AUTONOMOUS SPACECRAFT DIGITAL TWIN PLATFORM',
    desc: 'High-fidelity real-time physics and state synchronization models for satellite subsystems, solar array degradation and attitude dynamics.',
    status: 'DEVELOPMENT' as const,
    icon: Database,
    features: ['Subsystem State Mirroring', 'Thermal & Power Simulation', 'Hardware-in-the-Loop Validation'],
  },
  {
    name: 'COSMOS COPILOT',
    subtitle: 'AI-ASSISTED MISSION INTELLIGENCE & DECISION SUPPORT',
    desc: 'Onboard & ground station conversational AI agent assisting flight controllers during mission critical station-keeping and orbit insertion.',
    status: 'CONCEPT' as const,
    icon: Cpu,
    features: ['Flight Anomaly Diagnostics', 'Real-time Command Telemetry', 'Automated Maneuver Planning'],
  },
];

const ARCHITECTURE_STEPS = [
  { step: '01', title: 'SPACE ASSETS', desc: 'Satellites, payloads, ground stations & orbital sensors.' },
  { step: '02', title: 'SENSORS / DATA', desc: 'RF spectrum telemetry, optical tracking & radar ephemeris.' },
  { step: '03', title: 'INGESTION', desc: 'Real-time ground station data pipeline & protocol decoding.' },
  { step: '04', title: 'AI / ANALYTICS', desc: 'Machine learning trajectory fitting & hazard classification.' },
  { step: '05', title: 'DIGITAL TWIN', desc: 'Subsystem state mirror & predictive physics simulation.' },
  { step: '06', title: 'MISSION INTELLIGENCE', desc: 'Conjunction alerts & telemetry health scoring.' },
  { step: '07', title: 'DECISION SUPPORT', desc: 'Automated flight controller action recommendations.' },
];

export default function CosmosPage() {
  const [selectedSatInfo, setSelectedSatInfo] = useState<string>('COSMOS SENTINEL Orbital Node');

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-blue-950/60 border border-cyan-500/40 rounded text-cyan-400">
                <Orbit className="w-5 h-5" />
              </span>
              <span className="font-mono-tech text-xs tracking-widest text-cyan-400 uppercase font-bold">
                COSMOS SPACE TECHNOLOGY LAB
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight">
              COSMOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                INTELLIGENCE BEYOND EARTH.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Exploring AI-enabled infrastructure for autonomous space operations, mission intelligence, space situational awareness and digital twins.
            </p>

            <div className="pt-2 flex items-center gap-4 font-mono-tech text-xs">
              <StatusBadge status="R&D" />
              <span className="text-slate-400">ORBITAL SIMULATION &amp; SDA CONTEXT</span>
            </div>
          </div>

          {/* 3D Orbit Simulation Viewer */}
          <div className="lg:col-span-6 h-[550px] rounded-xl overflow-hidden border border-cyan-500/30 bg-[#0A0D1A]/60 relative">
            <div className="absolute top-3 left-3 z-10 space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#04060B]/90 border border-amber-500/50 rounded font-mono-tech text-[10px] text-amber-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                SIMULATION / DEMONSTRATION
              </div>
              <TelemetryOverlay systemName="COSMOS SDA" subsystem="LEO/GEO RADAR" showCoordinates={false} />
            </div>
            
            <CanvasWrapper className="w-full h-full">
              <SpaceScene onSelectSatellite={(sat) => setSelectedSatInfo(`${sat.name} (${sat.type})`)} />
            </CanvasWrapper>
          </div>

        </div>
      </section>


      {/* COSMOS R&D SHOWCASE: SENTINEL, TWIN, COPILOT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070A12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              FLAGSHIP SPACE INITIATIVES
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              AUTONOMOUS SPACE ARCHITECTURE
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Developing conceptual software modules for the next generation of space domain awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COSMOS_PRODUCTS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="p-8 rounded-xl bg-[#0E1322] border border-cyan-500/20 hover:border-cyan-400/60 transition-all space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <StatusBadge status={p.status} />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-2xl text-slate-100">{p.name}</h3>
                      <div className="font-mono-tech text-[10px] text-cyan-400 uppercase font-semibold mt-1">
                        {p.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <div className="font-mono-tech text-[10px] text-slate-400 uppercase">KEY CAPABILITIES:</div>
                    <ul className="space-y-1 text-xs font-mono-tech text-slate-300">
                      {p.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* COSMOS SYSTEM ARCHITECTURE FLOW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060B] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-3xl text-slate-100 uppercase">
              SPACE DATA &amp; MISSION INTELLIGENCE PIPELINE
            </h2>
            <p className="text-slate-400 text-xs font-mono-tech">
              FROM ORBITAL SENSORS TO DECISION SUPPORT
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 font-mono-tech text-xs">
            {ARCHITECTURE_STEPS.map((step) => (
              <div key={step.step} className="p-4 rounded-lg bg-[#0A0E1A] border border-cyan-500/20 text-center space-y-2">
                <div className="text-cyan-400 font-bold text-sm">{step.step}</div>
                <div className="text-slate-200 font-bold uppercase text-[11px]">{step.title}</div>
                <p className="text-[10px] text-slate-400 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* COSMOS CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020306] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-100 uppercase tracking-tight">
            THE NEXT FRONTIER <br />
            <span className="text-cyan-400">IS INTELLIGENT.</span>
          </h2>
          <p className="text-slate-300 text-sm font-light">
            Collaborate on space situational awareness, digital twins, and autonomous mission intelligence.
          </p>
          <div>
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-mono-tech font-bold text-xs uppercase tracking-wider rounded transition-all shadow-xl shadow-cyan-500/20"
            >
              <span>EXPLORE OUR R&amp;D →</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
