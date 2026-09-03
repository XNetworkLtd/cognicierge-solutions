'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import StatusBadge from '@/components/StatusBadge';
import { Radio, Cpu, ArrowRight, Activity, Zap, CheckCircle2, Shield, Eye, Layers, Server, Cloud } from 'lucide-react';

const EarthScene = dynamic(() => import('@/components/canvas/EarthScene'), { ssr: false });

const ARCH_STEPS = [
  { step: '01', title: 'SENSE', icon: Eye, color: 'text-cyan-400', desc: 'Optical, thermal, vibrational and environmental sensor ingestion.' },
  { step: '02', title: 'CONNECT', icon: Radio, color: 'text-blue-400', desc: 'Cellular, LoRaWAN, Satellite and Industrial Modbus protocol bridges.' },
  { step: '03', title: 'COMPUTE', icon: Cpu, color: 'text-indigo-400', desc: 'Local embedded microcontroller & ARM neural accelerator processing.' },
  { step: '04', title: 'UNDERSTAND', icon: Layers, color: 'text-purple-400', desc: 'Edge AI model inference and anomaly pattern recognition.' },
  { step: '05', title: 'DECIDE', icon: Activity, color: 'text-amber-400', desc: 'Deterministic rule evaluation and real-time state decision matrix.' },
  { step: '06', title: 'ACT', icon: Zap, color: 'text-emerald-400', desc: 'Relay actuation, motor control drive and cloud telemetry sync.' },
];

const NODE_CATALOG = [
  { name: 'Computer Vision', category: 'PERCEIVE', spec: 'YOLOv8 Edge / 60 FPS Optical Stream' },
  { name: 'Sensors', category: 'PERCEIVE', spec: 'I2C / SPI / CAN Bus Telemetry Array' },
  { name: 'Edge AI', category: 'INFERENCE', spec: 'TFLite / ONNX Runtime on NPU' },
  { name: 'Microcontrollers', category: 'CONTROL', spec: 'Dual-core ESP32-S3 / STM32 RTOS' },
  { name: 'IoT Gateways', category: 'NETWORK', spec: 'MQTT / gRPC / LoRa Gateway' },
  { name: 'Robotics', category: 'ACTUATE', spec: 'ROS2 / Motor Servo Drives' },
  { name: 'Cloud Integration', category: 'PERSIST', spec: 'Time-series DB / AWS IoT Core' },
  { name: 'Digital Twins', category: 'SIMULATE', spec: 'Real-time State Mirroring' },
];

const APPLICATIONS = [
  { title: 'SMART AGRICULTURE', tag: 'SOIL & CLIMATE', desc: 'Soil moisture telemetry, autonomous irrigation relays, crop health optical scanning and microclimate prediction nodes.', status: 'PILOT' as const },
  { title: 'INDUSTRIAL SYSTEMS', tag: 'PREDICTIVE MAINTENANCE', desc: 'Vibration frequency analysis, motor thermal monitoring, automated fault isolation and industrial machine uptime tracking.', status: 'DEPLOYMENT' as const },
  { title: 'INTELLIGENT INFRASTRUCTURE', tag: 'SMART CITIES', desc: 'Structural health strain sensors, traffic flow computer vision, environmental air quality monitoring networks.', status: 'PROTOTYPE' as const },
  { title: 'ROBOTICS EDGE', tag: 'AUTONOMOUS NAVIGATION', desc: 'Low-power obstacle detection, local SLAM map updating and edge motion planning controllers.', status: 'DEVELOPMENT' as const },
  { title: 'EDGE AI COMPUTING', tag: 'LOCAL INFERENCE', desc: 'Sub-10ms neural network execution on embedded silicon without requiring internet connectivity.', status: 'DEMONSTRATOR' as const },
  { title: 'REMOTE MONITORING', tag: 'TELEMETRY PIPELINE', desc: 'Low-bandwidth satellite telemetry uplink for remote energy grids and harsh outdoor deployments.', status: 'R&D' as const },
];

export default function AiotPage() {
  const [selectedNode, setSelectedNode] = useState(NODE_CATALOG[0]);

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-400">
                <Radio className="w-5 h-5" />
              </span>
              <span className="font-mono-tech text-xs tracking-widest text-cyan-400 uppercase font-bold">
                PHYSICAL INFRASTRUCTURE LABORATORY
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight">
              AIoT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
                INTELLIGENCE AT THE EDGE.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Connecting sensors, machines, embedded computing and artificial intelligence to create physical systems that can sense, understand and act.
            </p>

            <div className="pt-2 flex items-center gap-4 font-mono-tech text-xs">
              <StatusBadge status="DEVELOPMENT" />
              <span className="text-slate-400">HARDWARE &amp; EDGE SOFTWARE STACK</span>
            </div>
          </div>

          <div className="lg:col-span-5 h-[450px] rounded-xl overflow-hidden border border-cyan-500/30 bg-[#0E131F]/50 relative">
            <div className="absolute top-3 left-3 z-10">
              <TelemetryOverlay systemName="AIoT EDGE" subsystem="GLOBE CONSTELLATION" showCoordinates={false} />
            </div>
            <CanvasWrapper className="w-full h-full">
              <EarthScene />
            </CanvasWrapper>
          </div>

        </div>
      </section>


      {/* INTERACTIVE SYSTEM ARCHITECTURE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C14] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest">
              SYSTEM ARCHITECTURE PIPELINE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase tracking-tight">
              THE PERCEPTION-ACTION CYCLE
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Every Cognicierge AIoT system operates on a closed deterministic loop.
            </p>
          </div>

          {/* 6 Step Loop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {ARCH_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="p-5 rounded-lg bg-[#0E131F] border border-cyan-500/20 space-y-3 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-center justify-between font-mono-tech text-xs">
                    <span className="text-slate-500 font-bold">{s.step}</span>
                    <Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-100">{s.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-normal">{s.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive Technology Node Selector */}
          <div className="p-6 rounded-xl bg-[#0E131F] border border-slate-800 space-y-6">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-wider flex items-center justify-between">
              <span>INTERACTIVE SYSTEM NODES</span>
              <span className="text-slate-400 text-[10px]">CLICK NODE TO INSPECT SPECIFICATION</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {NODE_CATALOG.map((node) => {
                const isSelected = selectedNode.name === node.name;
                return (
                  <button
                    key={node.name}
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    className={`px-3 py-1.5 rounded font-mono-tech text-xs transition-all ${
                      isSelected
                        ? 'bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/30'
                        : 'bg-[#07090E] text-slate-300 border border-slate-700 hover:border-cyan-500/40'
                    }`}
                  >
                    {node.name}
                  </button>
                );
              })}
            </div>

            {/* Selected Node Spec Sheet */}
            <div className="p-4 rounded-lg bg-[#07090E] border border-cyan-500/30 font-mono-tech text-xs flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-cyan-400 font-bold uppercase">{selectedNode.name}</span>
                <span className="text-slate-500 mx-2">•</span>
                <span className="text-slate-400 uppercase">LAYER: {selectedNode.category}</span>
              </div>
              <div className="text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded text-[11px]">
                SPEC: {selectedNode.spec}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* TECHNICAL ARCHITECTURE FLOW DIAGRAM */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-extrabold text-3xl text-slate-100 uppercase">
              HARDWARE &amp; DATA FLOW PIPELINE
            </h2>
            <p className="text-slate-400 text-xs font-mono-tech">
              SENSOR → ESP32 / EDGE DEVICE → AI → DECISION ENGINE → ACTUATOR → DIGITAL TWIN
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 font-mono-tech text-xs text-center">
            <div className="p-4 rounded bg-[#0E131F] border border-cyan-500/30">
              <div className="text-cyan-400 font-bold mb-1">01. SENSOR</div>
              <div className="text-[10px] text-slate-400">Raw Signal Stream</div>
            </div>
            <div className="p-4 rounded bg-[#0E131F] border border-cyan-500/30">
              <div className="text-blue-400 font-bold mb-1">02. ESP32 / MCU</div>
              <div className="text-[10px] text-slate-400">Bus Digitization</div>
            </div>
            <div className="p-4 rounded bg-[#0E131F] border border-cyan-500/30">
              <div className="text-indigo-400 font-bold mb-1">03. EDGE AI</div>
              <div className="text-[10px] text-slate-400">Model Inference</div>
            </div>
            <div className="p-4 rounded bg-[#0E131F] border border-cyan-500/30">
              <div className="text-amber-400 font-bold mb-1">04. DECISION</div>
              <div className="text-[10px] text-slate-400">State Matrix</div>
            </div>
            <div className="p-4 rounded bg-[#0E131F] border border-cyan-500/30">
              <div className="text-emerald-400 font-bold mb-1">05. ACTUATOR</div>
              <div className="text-[10px] text-slate-400">Physical Action</div>
            </div>
            <div className="p-4 rounded bg-[#0E131F] border border-cyan-500/30">
              <div className="text-purple-400 font-bold mb-1">06. DIGITAL TWIN</div>
              <div className="text-[10px] text-slate-400">State Sync</div>
            </div>
          </div>

        </div>
      </section>


      {/* AIoT APPLICATIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C14]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div>
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-2">
              REAL-WORLD SECTOR DEPLOYMENTS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase">
              AIoT DOMAIN APPLICATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPLICATIONS.map((app) => (
              <div key={app.title} className="p-6 rounded-xl bg-[#0E131F] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[10px] text-slate-400 tracking-wider bg-slate-900 px-2 py-1 rounded uppercase">
                    {app.tag}
                  </span>
                  <StatusBadge status={app.status} size="sm" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100">{app.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* AIoT CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070A] border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-100 uppercase tracking-tight">
            WHAT SHOULD <br />
            <span className="text-cyan-400">YOUR MACHINES KNOW?</span>
          </h2>
          <p className="text-slate-300 text-sm font-light">
            Deploy intelligent edge sensing and physical machine automation.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-mono-tech font-bold text-xs uppercase tracking-wider rounded transition-all shadow-xl shadow-cyan-500/20"
            >
              <span>START A PROJECT →</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
