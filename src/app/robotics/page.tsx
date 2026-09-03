'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TelemetryOverlay from '@/components/TelemetryOverlay';
import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import StatusBadge from '@/components/StatusBadge';
import { Bot, Cpu, Activity, Eye, Compass, Brain, MapPin, Zap, Shield, ArrowRight } from 'lucide-react';

const RoboticsScene = dynamic(() => import('@/components/canvas/RoboticsScene'), { ssr: false });

const CORE_LOOP = [
  { step: '01', title: 'PERCEIVE', icon: Eye, desc: '3D LiDAR point-cloud generation & optical depth sensor capture.' },
  { step: '02', title: 'LOCALIZE', icon: Compass, desc: 'Real-time SLAM pose estimation & spatial map feature matching.' },
  { step: '03', title: 'REASON', icon: Brain, desc: 'Semantic scene understanding & dynamic obstacle classification.' },
  { step: '04', title: 'PLAN', icon: MapPin, desc: 'Kinematic motion path generation & collision-free trajectory computation.' },
  { step: '05', title: 'CONTROL', icon: Activity, desc: 'Sub-millisecond inverse kinematics & joint motor torque distribution.' },
  { step: '06', title: 'ACT', icon: Zap, desc: 'Articulated joint movement & end-effector manipulator execution.' },
];

const EXPERIMENTS = [
  { title: 'AUTONOMOUS MOBILE ROVER', domain: 'MOBILE ROBOTICS', desc: '4-wheel differential drive platform operating optical-LiDAR sensor fusion for indoor facility navigation.', status: 'PROTOTYPE' as const },
  { title: 'ARTICULATED ARM INVERSE KINEMATICS', domain: 'MOTION CONTROL', desc: '6-DOF joint trajectory solver with micro-second trajectory interpolation and collision boundary protection.', status: 'RESEARCH' as const },
  { title: 'COMPACT COMPUTER VISION HEAD', domain: 'COMPUTER VISION', desc: 'Dual-camera stereo optical assembly with onboard NPU hardware for sub-10ms depth map generation.', status: 'DEMONSTRATOR' as const },
  { title: 'INDUSTRIAL CELL AUTOMATION', domain: 'AUTOMATION', desc: 'Programmable logic controller bridge with AI vision quality inspection and automated relay sorting.', status: 'CONCEPT' as const },
];

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col selection:bg-sky-400 selection:text-black">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-tech-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-cyan-950/60 border border-cyan-500/40 rounded text-cyan-400">
                <Bot className="w-5 h-5" />
              </span>
              <span className="font-mono-tech text-xs tracking-widest text-cyan-400 uppercase font-bold">
                ROBOTICS &amp; AUTONOMOUS SYSTEMS FACILITY
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight leading-tight">
              ROBOTICS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-400 to-emerald-400">
                MACHINES THAT UNDERSTAND.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Designing intelligent autonomous machines that perceive physical environments, reason through multi-sensor data, and act with kinematic precision.
            </p>

            <div className="pt-2 flex items-center gap-4 font-mono-tech text-xs">
              <StatusBadge status="DEVELOPMENT" />
              <span className="text-slate-400">PERCEIVE-ACTION ROBOTIC LOOP</span>
            </div>
          </div>

          <div className="lg:col-span-6 h-[500px] rounded-xl overflow-hidden border border-cyan-500/30 bg-[#0E1322]/50 relative">
            <div className="absolute top-3 left-3 z-10">
              <TelemetryOverlay systemName="ROBOTICS LAB" subsystem="KINEMATIC ENGINE" showCoordinates={false} />
            </div>
            <CanvasWrapper className="w-full h-full">
              <RoboticsScene />
            </CanvasWrapper>
          </div>

        </div>
      </section>


      {/* CORE PERCEPTION-ACTION LOOP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest">
              AUTONOMY EXECUTION LOOP
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase tracking-tight">
              THE ROBOTIC REASONING CYCLE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {CORE_LOOP.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="p-5 rounded-lg bg-[#0E1322] border border-cyan-500/20 space-y-3">
                  <div className="flex items-center justify-between font-mono-tech text-xs">
                    <span className="text-cyan-400 font-bold">{step.step}</span>
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-100">{step.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* TECHNOLOGY STACK GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07090E] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest text-center">
            ROBOTICS TECHNOLOGY STACK
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 font-mono-tech text-xs text-center">
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20 text-cyan-300 font-bold">COMPUTER VISION</div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20 text-cyan-300 font-bold">EDGE AI</div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20 text-cyan-300 font-bold">LiDAR &amp; IMU</div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20 text-cyan-300 font-bold">EMBEDDED RTOS</div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20 text-cyan-300 font-bold">MOTION CONTROL</div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20 text-cyan-300 font-bold">ROS2 AUTONOMY</div>
            <div className="p-4 rounded bg-[#0E1322] border border-cyan-500/20 text-cyan-300 font-bold">CAN BUS</div>
          </div>
        </div>
      </section>


      {/* ROBOTICS LAB EXPERIMENTS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090C16]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div>
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-2">
              RESEARCH &amp; PROTOTYPE EXPERIMENTS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-100 uppercase">
              ROBOTICS EXPERIMENTAL LAB
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIMENTS.map((exp) => (
              <div key={exp.title} className="p-6 rounded-xl bg-[#0E1322] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[10px] text-slate-400 bg-slate-900 px-2.5 py-1 rounded uppercase">
                    {exp.domain}
                  </span>
                  <StatusBadge status={exp.status} size="sm" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-100">{exp.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono-tech">{exp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
