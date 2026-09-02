'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import StatusBadge from '@/components/StatusBadge';
import { Plane, Cpu, Activity, ArrowRight, Gauge, Radio, Shield, Zap, Eye, RotateCw } from 'lucide-react';
import type { ComponentNode } from '@/components/canvas/FlightScene';

const FlightScene = dynamic(() => import('@/components/canvas/FlightScene'), { ssr: false });

const CONTROL_STEPS = [
  { step: '01', title: 'SENSORS', desc: 'IMU, Optical Flow, LiDAR, RTK GPS & Airspeed pitot stream.' },
  { step: '02', title: 'STATE ESTIMATION', desc: 'Extended Kalman Filter (EKF3) fusion for attitude & position.' },
  { step: '03', title: 'AI / DECISION', desc: 'Neural network obstacle mapping & dynamic flight path update.' },
  { step: '04', title: 'FLIGHT CONTROL', desc: 'Sub-millisecond PID rate loop execution on micro-kernel.' },
  { step: '05', title: 'ACTUATION', desc: 'PWM motor ESC drive & digital surface actuator positioning.' },
  { step: '06', title: 'FEEDBACK', desc: 'Real-time telemetry sensor loop closure & logger record.' },
];

export default function FlightLabPage() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentNode | null>(null);

  // Live Simulated Telemetry Stream
  const [alt, setAlt] = useState(124.5);
  const [speed, setSpeed] = useState(18.4);
  const [battery, setBattery] = useState(94);
  const [pitch, setPitch] = useState(2.1);
  const [roll, setRoll] = useState(-0.8);

  useEffect(() => {
    const timer = setInterval(() => {
      setAlt((prev) => Number((prev + (Math.random() - 0.5) * 0.4).toFixed(1)));
      setSpeed((prev) => Number((prev + (Math.random() - 0.5) * 0.2).toFixed(1)));
      setPitch((prev) => Number((prev + (Math.random() - 0.5) * 0.3).toFixed(1)));
      setRoll((prev) => Number((prev + (Math.random() - 0.5) * 0.3).toFixed(1)));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-400">
                <Plane className="w-5 h-5" />
              </span>
              <span className="font-mono-tech text-xs tracking-widest text-cyan-400 uppercase font-bold">
                EXPERIMENTAL AEROSPACE FACILITY
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight">
              FLIGHT LAB <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400">
                WHERE SOFTWARE LEARNS TO FLY.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              An experimental environment for exploring intelligent flight systems, embedded computing, sensing, control and autonomous technologies.
            </p>

            <div className="pt-2 flex items-center gap-4 font-mono-tech text-xs">
              <StatusBadge status="EXPERIMENTAL" />
              <span className="text-slate-400">UAV EMBEDDED R&amp;D HANGAR</span>
            </div>
          </div>

          {/* 3D Hangar UAV Viewer */}
          <div className="lg:col-span-6 h-[520px] rounded-xl overflow-hidden border border-cyan-500/30 bg-[#0E1322]/50 relative">
            <div className="absolute top-3 left-3 z-10 space-y-1">
              <TelemetryOverlay systemName="FLIGHT LAB" subsystem="HANGAR BAY 01" showCoordinates={false} />
            </div>
            <CanvasWrapper className="w-full h-full">
              <FlightScene onSelectNode={(node) => setSelectedComponent(node)} />
            </CanvasWrapper>
          </div>

        </div>
      </section>


      {/* DEMONSTRATION TELEMETRY CONSOLE */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#090C16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
              <Gauge className="w-4 h-4 animate-pulse" />
              <span>LIVE FLIGHT TELEMETRY</span>
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-amber-950/40 border border-amber-500/50 rounded text-amber-300 text-[10px] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              DEMONSTRATION TELEMETRY
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono-tech text-xs">
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20">
              <div className="text-slate-400 text-[10px] uppercase">ALTITUDE (AGL)</div>
              <div className="text-cyan-400 text-xl font-bold mt-1">{alt} M</div>
            </div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20">
              <div className="text-slate-400 text-[10px] uppercase">AIRSPEED</div>
              <div className="text-blue-400 text-xl font-bold mt-1">{speed} M/S</div>
            </div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20">
              <div className="text-slate-400 text-[10px] uppercase">ATTITUDE (P/R)</div>
              <div className="text-slate-200 text-xl font-bold mt-1">{pitch}° / {roll}°</div>
            </div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20">
              <div className="text-slate-400 text-[10px] uppercase">GPS LOCK</div>
              <div className="text-emerald-400 text-xl font-bold mt-1">3D FIX (18 SAT)</div>
            </div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20">
              <div className="text-slate-400 text-[10px] uppercase">BATTERY VOLTS</div>
              <div className="text-amber-400 text-xl font-bold mt-1">{battery}% (22.8V)</div>
            </div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20">
              <div className="text-slate-400 text-[10px] uppercase">THROTTLE BUS</div>
              <div className="text-indigo-400 text-xl font-bold mt-1">42.5%</div>
            </div>
          </div>

        </div>
      </section>


      {/* CLOSED FLIGHT CONTROL LOOP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#06080E] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <RotateCw className="w-4 h-4" />
              CLOSED LOOP CONTROL ARCHITECTURE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase tracking-tight">
              AUTONOMOUS FLIGHT FEEDBACK CYCLE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {CONTROL_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-lg bg-[#0E1322] border border-cyan-500/20 space-y-2">
                <div className="font-mono-tech text-xs text-cyan-400 font-bold">{step.step}</div>
                <h3 className="font-display font-bold text-base text-slate-100">{step.title}</h3>
                <p className="text-[11px] text-slate-400 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* FLIGHT R&D FOCUS AREAS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C16]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div>
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-2">
              CORE AEROSPACE R&amp;D DOMAINS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase">
              FLIGHT LAB RESEARCH AREAS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono-tech text-xs">
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-3">
              <div className="text-cyan-400 font-bold text-base">AUTONOMOUS FLIGHT CONTROL</div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                High-performance flight stabilization algorithms executing adaptive gain control to withstand wind gusts and sensor degradation.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-3">
              <div className="text-blue-400 font-bold text-base">COMPUTER VISION NAVIGATION</div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                GPS-denied navigation utilizing optical flow velocity calculation, visual inertial odometry (VIO) and terrain mapping.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-3">
              <div className="text-indigo-400 font-bold text-base">EDGE AI FLIGHT INTELLIGENCE</div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Embedded neural models executing onboard target detection, dynamic search-and-track and collision avoidance.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-3">
              <div className="text-amber-400 font-bold text-base">EMBEDDED AVIONICS COMPUTING</div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Ruggedized dual-redundant micro-controllers, custom carrier PCBs, and failsafe parachute emergency deployment circuits.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
