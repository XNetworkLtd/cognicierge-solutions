'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import { ArrowRight, Cpu, Radio, Orbit, Plane, Bot, FlaskConical, ChevronDown, Zap, Shield } from 'lucide-react';

const HomeHeroScene = dynamic(() => import('@/components/canvas/HomeHeroScene'), { ssr: false });
const EarthScene = dynamic(() => import('@/components/canvas/EarthScene'), { ssr: false });
const SpaceScene = dynamic(() => import('@/components/canvas/SpaceScene'), { ssr: false });
const FlightScene = dynamic(() => import('@/components/canvas/FlightScene'), { ssr: false });
const RoboticsScene = dynamic(() => import('@/components/canvas/RoboticsScene'), { ssr: false });
const AtlasScene = dynamic(() => import('@/components/canvas/AtlasScene'), { ssr: false });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid">
        {/* Background Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Top HUD Telemetry Stream */}
        <div className="max-w-7xl mx-auto w-full z-10">
          <TelemetryOverlay systemName="COGNICIERGE CORE" subsystem="REAL-WORLD ENGINE" />
        </div>

        {/* Hero Central Content & 3D Environment Split Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-300 font-mono-tech text-xs tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              COGNICIERGE SOLUTIONS / INDIA
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-slate-100">
              INTELLIGENCE, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                ENGINEERED FOR
              </span> <br />
              THE REAL WORLD.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Building intelligent systems where artificial intelligence meets hardware, sensors, machines and the physical world.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono-tech text-xs">
              <a
                href="#four-worlds"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-black font-bold uppercase tracking-wider rounded transition-all shadow-xl shadow-cyan-500/20"
              >
                <span>EXPLORE TECHNOLOGY</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <Link
                href="/lab"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0E131F] hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-wider rounded transition-all"
              >
                <FlaskConical className="w-4 h-4 text-cyan-400" />
                <span>ENTER THE LAB</span>
              </Link>
            </div>
          </div>

          {/* Right 3D Machine Core Viewer */}
          <div className="lg:col-span-5 relative h-[450px] w-full rounded-xl overflow-hidden border border-cyan-500/20 bg-[#0E131F]/40 backdrop-blur">
            <div className="absolute top-3 left-3 z-10 font-mono-tech text-[10px] text-cyan-400 bg-[#07090E]/80 border border-cyan-500/30 px-2.5 py-1 rounded uppercase tracking-wider">
              3D INTELLIGENT MACHINE CORE / LIVE SIMULATION
            </div>
            <CanvasWrapper className="w-full h-full">
              <HomeHeroScene />
            </CanvasWrapper>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center z-10 pt-6">
          <a href="#four-worlds" className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors font-mono-tech text-[10px]">
            <span>SYSTEM GATEWAY</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </section>


      {/* TECHNOLOGY DOMAINS: FOUR WORLDS */}
      <section id="four-worlds" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1328] border-t border-b border-blue-900/40 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              COGNICIERGE TECHNOLOGY ECOSYSTEM
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              FOUR WORLDS. <br />
              <span className="text-cyan-400">ENGINEERING INTELLIGENCE FOR THE PHYSICAL WORLD.</span>
            </h2>
          </div>

          {/* 4 Immersive Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CARD 1: AIoT */}
            <Link href="/aiot" className="group relative rounded-xl border border-cyan-500/20 bg-[#0E131F]/80 hover:border-cyan-400/60 p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono-tech text-[10px] text-cyan-400 bg-cyan-950/40 border-b border-l border-cyan-500/30 rounded-bl-lg">
                DOMAIN 01 / EDGE COMPUTING
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Radio className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    AIoT
                  </h3>
                  <p className="font-mono-tech text-sm font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                    INTELLIGENCE AT THE EDGE.
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connecting sensors, machines, embedded computing and artificial intelligence to create physical systems that can sense, understand and act.
                </p>
              </div>

              <div className="mt-8 h-48 rounded-lg overflow-hidden border border-cyan-500/20 bg-[#07090E]">
                <CanvasWrapper className="w-full h-full">
                  <EarthScene />
                </CanvasWrapper>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-mono-tech text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                <span>EXPLORE AIoT ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* CARD 2: COSMOS */}
            <Link href="/cosmos" className="group relative rounded-xl border border-cyan-500/20 bg-[#0E131F]/80 hover:border-cyan-400/60 p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono-tech text-[10px] text-cyan-400 bg-cyan-950/40 border-b border-l border-cyan-500/30 rounded-bl-lg">
                DOMAIN 02 / SPACE TECH
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Orbit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    COSMOS
                  </h3>
                  <p className="font-mono-tech text-sm font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                    INTELLIGENCE BEYOND EARTH.
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Exploring AI-enabled infrastructure for autonomous space operations, mission intelligence, space situational awareness and digital twins.
                </p>
              </div>

              <div className="mt-8 h-48 rounded-lg overflow-hidden border border-cyan-500/20 bg-[#07090E]">
                <CanvasWrapper className="w-full h-full">
                  <SpaceScene />
                </CanvasWrapper>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-mono-tech text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                <span>ENTER COSMOS SIMULATION</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* CARD 3: FLIGHT LAB */}
            <Link href="/flight-lab" className="group relative rounded-xl border border-cyan-500/20 bg-[#0E131F]/80 hover:border-cyan-400/60 p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono-tech text-[10px] text-cyan-400 bg-cyan-950/40 border-b border-l border-cyan-500/30 rounded-bl-lg">
                DOMAIN 03 / AEROSPACE
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    FLIGHT LAB
                  </h3>
                  <p className="font-mono-tech text-sm font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                    WHERE SOFTWARE LEARNS TO FLY.
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  An experimental environment for exploring intelligent flight systems, embedded computing, sensing, control and autonomous technologies.
                </p>
              </div>

              <div className="mt-8 h-48 rounded-lg overflow-hidden border border-cyan-500/20 bg-[#07090E]">
                <CanvasWrapper className="w-full h-full">
                  <FlightScene />
                </CanvasWrapper>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-mono-tech text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                <span>INSPECT FLIGHT SYSTEMS</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* CARD 4: ROBOTICS */}
            <Link href="/robotics" className="group relative rounded-xl border border-cyan-500/20 bg-[#0E131F]/80 hover:border-cyan-400/60 p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono-tech text-[10px] text-cyan-400 bg-cyan-950/40 border-b border-l border-cyan-500/30 rounded-bl-lg">
                DOMAIN 04 / AUTONOMY
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    ROBOTICS &amp; AUTONOMY
                  </h3>
                  <p className="font-mono-tech text-sm font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                    MACHINES THAT UNDERSTAND.
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Autonomous mobile platforms and robotic systems operating perception-action loops to execute tasks in physical environments.
                </p>
              </div>

              <div className="mt-8 h-48 rounded-lg overflow-hidden border border-cyan-500/20 bg-[#07090E]">
                <CanvasWrapper className="w-full h-full">
                  <RoboticsScene />
                </CanvasWrapper>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-mono-tech text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                <span>OPEN ROBOTICS LAB</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* ATLAS HARDWARE FEATURE SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/40 border border-amber-500/40 text-amber-400 font-mono-tech text-xs tracking-widest uppercase rounded">
              <Cpu className="w-4 h-4" />
              FLAGSHIP HARDWARE PLATFORM
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              BUILDING INTELLIGENT <br />
              <span className="text-amber-400">PHYSICAL SYSTEMS.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ATLAS is an intelligent hardware computing platform designed for real-world physical experimentation, embedded AI inference, sensor fusion and digital twin interaction.
            </p>

            <div className="pt-2 font-mono-tech text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>INTEGRATED RASPBERRY PI + DUAL ESP32 ARCHITECTURE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>8 TOPS TENSOR EDGE AI ACCELERATOR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>HARD REAL-TIME PHYSICAL SENSOR TELEMETRY BUS</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/atlas"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-mono-tech font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg shadow-amber-500/20"
              >
                <span>EXPLORE ATLAS PLATFORM →</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 h-[450px] rounded-xl overflow-hidden border border-amber-500/30 bg-[#0E131F]/50">
            <CanvasWrapper className="w-full h-full">
              <AtlasScene />
            </CanvasWrapper>
          </div>

        </div>
      </section>


      {/* LAB PREVIEW SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C14] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <FlaskConical className="w-4 h-4" />
              R&amp;D REPOSITORY
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              THE LAB
            </h2>
            <p className="font-mono-tech text-lg text-cyan-400 uppercase font-semibold">
              IDEAS BECOME SYSTEMS.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Explore Cognicierge&apos;s active technical research, prototype builds, demonstrator setups and verified engineering evidence.
            </p>
            <div className="pt-4">
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E131F] hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-mono-tech font-bold text-xs uppercase tracking-wider rounded transition-all"
              >
                <span>ENTER THE LAB →</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 font-mono-tech text-xs">
            <div className="p-5 rounded-lg bg-[#0E131F] border border-cyan-500/20">
              <div className="text-cyan-400 text-2xl font-bold mb-1">08+</div>
              <div className="text-slate-200 font-bold uppercase">TECHNICAL DOMAINS</div>
              <p className="text-[10px] text-slate-400 mt-1">AI, IoT, Space, Flight, Robotics, Digital Twins, Vision &amp; Embedded Systems</p>
            </div>
            <div className="p-5 rounded-lg bg-[#0E131F] border border-cyan-500/20">
              <div className="text-emerald-400 text-2xl font-bold mb-1">VERIFIED</div>
              <div className="text-slate-200 font-bold uppercase">FACT-BASED R&amp;D</div>
              <p className="text-[10px] text-slate-400 mt-1">Honest engineering statuses (Concept, Prototype, Demonstrator)</p>
            </div>
          </div>
        </div>
      </section>


      {/* FINAL HOME CONVERSION CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070A] border-t border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 uppercase tracking-tight">
            THE NEXT SYSTEM <br />
            <span className="text-cyan-400">STARTS WITH AN IDEA.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
            Partner with Cognicierge Solutions to engineer intelligent physical systems for AIoT, Space, Aviation or Robotics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-mono-tech text-xs">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-bold uppercase tracking-wider rounded transition-all shadow-xl shadow-cyan-500/20"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E131F] hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold uppercase tracking-wider rounded transition-all"
            >
              <span>CONTACT COGNICIERGE</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
