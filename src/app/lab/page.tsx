'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import StatusBadge, { StatusType } from '@/components/StatusBadge';
import { FlaskConical, Search, Filter, Cpu, Layers, Terminal, CheckCircle2, Shield, Eye, FileText, Code2 } from 'lucide-react';

const LabScene = dynamic(() => import('@/components/canvas/LabScene'), { ssr: false });

const DOMAINS = ['ALL', 'AI', 'IoT', 'ROBOTICS', 'SPACE', 'FLIGHT', 'DIGITAL TWINS', 'VISION', 'EMBEDDED'];

interface ProjectItem {
  id: string;
  name: string;
  domain: string;
  status: StatusType;
  tech: string[];
  objective: string;
  evidenceType: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    name: 'COSMOS SENTINEL SDA PIPELINE',
    domain: 'SPACE',
    status: 'R&D',
    tech: ['Python', 'Three.js', 'PyTorch', 'Orbital Propagator'],
    objective: 'Demonstrate real-time orbital conjunction assessment & SDA RF signal ingestion.',
    evidenceType: 'Ephemeris Trajectory Log',
  },
  {
    id: 'proj-2',
    name: 'ATLAS HARDWARE PLATFORM V1',
    domain: 'EMBEDDED',
    status: 'DEVELOPMENT',
    tech: ['RPi CM4', 'ESP32-S3', 'Tensor NPU', 'Altium PCB'],
    objective: 'Build rugged physical computing hardware with dual MCU-Linux bus interface.',
    evidenceType: 'Schematic & PCB Gerber',
  },
  {
    id: 'proj-3',
    name: 'UAV OPTICAL FLOW VIO NAVIGATION',
    domain: 'FLIGHT',
    status: 'EXPERIMENTAL',
    tech: ['C++', 'ROS2', 'OpenCV', 'PX4 Autopilot'],
    objective: 'Achieve sub-5cm drift GPS-denied position hold using forward optical sensors.',
    evidenceType: 'Hangar Flight Log',
  },
  {
    id: 'proj-4',
    name: 'INDUSTRIAL AIoT VIBRATION NODE',
    domain: 'IoT',
    status: 'PILOT',
    tech: ['FreeRTOS', 'I2C Accelerometer', 'LoRaWAN', 'MQTT'],
    objective: 'Deploy 24/7 motor bearing fault prediction with onboard FFT spectral analysis.',
    evidenceType: 'Test Bench Spectrum',
  },
  {
    id: 'proj-5',
    name: '6-DOF ROBOTIC ARM INVERSE KINEMATICS',
    domain: 'ROBOTICS',
    status: 'PROTOTYPE',
    tech: ['ROS2 MoveIt', 'Pinocchio IK', 'CANopen Motors'],
    objective: 'Execute high-speed collision-free payload manipulation under load.',
    evidenceType: 'Torque Curve Plot',
  },
  {
    id: 'proj-6',
    name: 'PHYSICAL ASSET DIGITAL TWIN MIRROR',
    domain: 'DIGITAL TWINS',
    status: 'DEMONSTRATOR',
    tech: ['gRPC', 'TimeScaleDB', 'WebGL', 'Three.js'],
    objective: 'Synchronize 1000+ sensor telemetry channels into 3D digital twin under 5ms latency.',
    evidenceType: 'Telemetry Log Bench',
  },
];

export default function LabPage() {
  const [selectedDomain, setSelectedDomain] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesDomain = selectedDomain === 'ALL' || p.domain === selectedDomain;
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.objective.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-400">
                <FlaskConical className="w-5 h-5" />
              </span>
              <span className="font-mono-tech text-xs tracking-widest text-cyan-400 uppercase font-bold">
                COGNICIERGE RESEARCH &amp; DEVELOPMENT HUB
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight">
              THE LAB <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
                IDEAS BECOME SYSTEMS.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Explore Cognicierge&apos;s active project registry, prototype developments, architecture evidence and verified engineering benchmarks.
            </p>

            <div className="pt-2 flex items-center gap-4 font-mono-tech text-xs">
              <StatusBadge status="R&D" />
              <span className="text-slate-400">ACTIVE PROJECT EXPLORER</span>
            </div>
          </div>

          <div className="lg:col-span-6 h-[480px] rounded-xl overflow-hidden border border-cyan-500/30 bg-[#0E1322]/50 relative">
            <div className="absolute top-3 left-3 z-10">
              <TelemetryOverlay systemName="COGNICIERGE LAB" subsystem="HOLOGRAPHIC MATRIX" showCoordinates={false} />
            </div>
            <CanvasWrapper className="w-full h-full">
              <LabScene />
            </CanvasWrapper>
          </div>

        </div>
      </section>


      {/* INTERACTIVE PROJECT EXPLORER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-1">
                PROJECT REPOSITORY
              </div>
              <h2 className="font-display font-extrabold text-3xl text-slate-100 uppercase">
                ACTIVE R&amp;D PROJECTS
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="SEARCH PROJECTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#07090E] border border-slate-700 rounded font-mono-tech text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
            {DOMAINS.map((domain) => {
              const isSelected = selectedDomain === domain;
              return (
                <button
                  key={domain}
                  type="button"
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-3 py-1.5 rounded transition-all ${
                    isSelected
                      ? 'bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/20'
                      : 'bg-[#0E1322] text-slate-400 border border-slate-800 hover:border-cyan-500/40'
                  }`}
                >
                  {domain}
                </button>
              );
            })}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="p-6 rounded-xl bg-[#0E1322] border border-cyan-500/20 hover:border-cyan-400/50 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded uppercase">
                      {proj.domain}
                    </span>
                    <StatusBadge status={proj.status} size="sm" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-100">{proj.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{proj.objective}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3 font-mono-tech text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300 text-[10px] rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>EVIDENCE: {proj.evidenceType}</span>
                    <span className="text-cyan-400 font-bold">VERIFIED</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* EVIDENCE SECTION: "SEE THE SYSTEM." */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              VERIFIED TECHNICAL PROOF
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              SEE THE SYSTEM.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-mono-tech">
              Cognicierge replaces generic stock claims with genuine technical schematics, test bench telemetry logs, and circuit architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-tech text-xs">
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-4">
              <FileText className="w-6 h-6 text-cyan-400" />
              <h3 className="font-bold text-slate-100 text-sm">CIRCUIT SCHEMATICS &amp; PCB GERBERS</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Inspect component footprints, impedance routing specs and signal isolation for ATLAS hardware.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-4">
              <Terminal className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-slate-100 text-sm">TEST BENCH TELEMETRY LOGS</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Raw CSV signal exports, frequency domain FFT spectrum logs, and thermal sensor traces.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-4">
              <Code2 className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-slate-100 text-sm">HARDWARE FIRMWARE REPOSITORIES</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                FreeRTOS C++ drivers, ROS2 kinematics packages and TensorFlow Lite quantized model weights.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
