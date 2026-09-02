'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Terminal, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#05070A] border-t border-slate-800/80 text-slate-400 text-sm overflow-hidden">
      {/* Subtle top tech grid line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-sm animate-pulse" />
              <span className="font-display font-extrabold text-xl tracking-wider text-slate-100">
                COGNICIERGE SOLUTIONS
              </span>
            </div>
            <p className="font-display text-cyan-400 text-sm font-semibold tracking-wide uppercase">
              INTELLIGENCE, ENGINEERED FOR THE REAL WORLD.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Building intelligent physical infrastructure across AIoT, Space Domain Awareness, Autonomous Flight, Robotics &amp; Physical Computing.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>HEADQUARTERS &amp; R&amp;D LABS — INDIA</span>
            </div>
          </div>

          {/* Technology Domains Column */}
          <div className="space-y-3">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-slate-200 font-bold border-b border-slate-800 pb-2">
              TECHNOLOGY DOMAINS
            </h4>
            <ul className="space-y-2 font-mono-tech text-xs">
              <li>
                <Link href="/aiot" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>AIoT / Edge Computing</span>
                </Link>
              </li>
              <li>
                <Link href="/cosmos" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>COSMOS Space Systems</span>
                </Link>
              </li>
              <li>
                <Link href="/flight-lab" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>Experimental Flight Lab</span>
                </Link>
              </li>
              <li>
                <Link href="/robotics" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>Robotics &amp; Autonomy</span>
                </Link>
              </li>
              <li>
                <Link href="/atlas" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>ATLAS Hardware Platform</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & R&D Column */}
          <div className="space-y-3">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-slate-200 font-bold border-b border-slate-800 pb-2">
              ENGINEERING HUB
            </h4>
            <ul className="space-y-2 font-mono-tech text-xs">
              <li>
                <Link href="/lab" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>Cognicierge Lab R&amp;D</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>About Cognicierge</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>System Intake / Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Credibility & Metrics */}
          <div className="space-y-3">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-slate-200 font-bold border-b border-slate-800 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>DISCLOSURE</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              All R&amp;D projects display precise development statuses (<span className="text-cyan-400 font-mono-tech">CONCEPT, PROTOTYPE, DEMONSTRATOR</span>). Simulated telemetry graphics are explicitly labeled for visual demonstration.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} COGNICIERGE SOLUTIONS PVT. LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              SYSTEM STATUS: ONLINE
            </span>
            <span>INDIA DEEP-TECH INITIATIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
