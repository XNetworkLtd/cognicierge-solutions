'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import StatusBadge from '@/components/StatusBadge';
import { Cpu, Shield, Eye, Layers, Radio, Activity, Zap, CheckCircle2, ArrowRight, Server } from 'lucide-react';

const AtlasScene = dynamic(() => import('@/components/canvas/AtlasScene'), { ssr: false });

const CAPABILITIES = [
  { title: 'SELF-DIAGNOSTICS', icon: Shield, desc: 'Automated bus current monitoring, thermal throttling protection and hardware health pinging.' },
  { title: 'VISION SENSING', icon: Eye, desc: 'High-speed MIPI CSI camera interface supporting real-time optical flow & object detection.' },
  { title: 'EDGE COMPUTING', icon: Cpu, desc: 'Dual-processor architecture combining ARM linux environment with real-time microcontroller bus.' },
  { title: 'DIGITAL TWIN INTERFACE', icon: Layers, desc: 'Bidirectional state synchronization with cloud/local digital twin mirrors via gRPC & MQTT.' },
  { title: 'GUIDED EXPERIMENTATION', icon: Activity, desc: 'Pre-loaded physical computing laboratory exercises for rapid deep-tech R&D prototyping.' },
  { title: 'HIGH-DENSITY SENSING', icon: Radio, desc: 'I2C, SPI, CAN bus, UART and analog GPIO expansion shields for multi-sensor integration.' },
];

const ARCHITECTURE_STEPS = [
  { step: '01', title: 'PHYSICAL SYSTEM', desc: 'Real-world machine or environment interaction.' },
  { step: '02', title: 'SENSING', desc: 'Analog & digital sensor signal telemetry ingestion.' },
  { step: '03', title: 'EDGE COMPUTE', desc: 'Dual ESP32-S3 + Raspberry Pi CM4 bus handling.' },
  { step: '04', title: 'AI INFERENCE', desc: '8 TOPS Tensor NPU model execution.' },
  { step: '05', title: 'DECISION', desc: 'Deterministic state machine & safety interlock.' },
  { step: '06', title: 'DIGITAL TWIN', desc: 'Real-time telemetry mirror & cloud dashboard.' },
];

export default function AtlasPage() {
  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-amber-950/60 border border-amber-500/40 rounded text-amber-400">
                <Cpu className="w-5 h-5" />
              </span>
              <span className="font-mono-tech text-xs tracking-widest text-amber-400 uppercase font-bold">
                ATLAS FLAGSHIP HARDWARE PLATFORM
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight">
              ATLAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400">
                INTELLIGENT PHYSICAL COMPUTING.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              An intelligent hardware platform for experimentation, learning, embedded AI and physical-system interaction.
            </p>

            <div className="pt-2 flex items-center gap-4 font-mono-tech text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/40 border border-amber-500/50 rounded text-amber-400 font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                ATLAS / DEVELOPMENT
              </div>
              <span className="text-slate-400">HARDWARE ENGINE R&amp;D</span>
            </div>
          </div>

          {/* 3D Exploded Hardware Viewer */}
          <div className="lg:col-span-6 h-[560px] rounded-xl overflow-hidden border border-amber-500/30 bg-[#0E1322]/50 relative">
            <div className="absolute top-3 left-3 z-10">
              <TelemetryOverlay systemName="ATLAS HW" subsystem="EXPLODED BOARD" showCoordinates={false} />
            </div>
            <CanvasWrapper className="w-full h-full">
              <AtlasScene />
            </CanvasWrapper>
          </div>

        </div>
      </section>


      {/* SYSTEM ARCHITECTURE PIPELINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="font-mono-tech text-xs text-amber-400 uppercase tracking-widest">
              ATLAS HARDWARE PIPELINE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase tracking-tight">
              PHYSICAL COMPUTING SYSTEM ARCHITECTURE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {ARCHITECTURE_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-lg bg-[#0E1322] border border-amber-500/20 space-y-2">
                <div className="font-mono-tech text-xs text-amber-400 font-bold">{step.step}</div>
                <h3 className="font-display font-bold text-base text-slate-100">{step.title}</h3>
                <p className="text-[11px] text-slate-400 leading-normal font-mono-tech">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CORE CAPABILITIES GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div>
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-2">
              HARDWARE CAPABILITY SPECS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase">
              ATLAS CORE CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 hover:border-amber-500/40 transition-all space-y-3">
                  <div className="w-10 h-10 rounded bg-amber-950/40 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-100">{cap.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono-tech">{cap.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
