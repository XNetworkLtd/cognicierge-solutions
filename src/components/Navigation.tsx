'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Cpu, Radio, Shield, Orbit, Plane, Bot, FlaskConical, Info, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'AIoT', path: '/aiot', icon: Radio, tag: 'EDGE' },
  { name: 'COSMOS', path: '/cosmos', icon: Orbit, tag: 'SPACE' },
  { name: 'FLIGHT LAB', path: '/flight-lab', icon: Plane, tag: 'AERO' },
  { name: 'ROBOTICS', path: '/robotics', icon: Bot, tag: 'AUTO' },
  { name: 'ATLAS', path: '/atlas', icon: Cpu, tag: 'HW' },
  { name: 'LAB', path: '/lab', icon: FlaskConical, tag: 'R&D' },
  { name: 'ABOUT', path: '/about', icon: Info, tag: 'PHIL' },
  { name: 'CONTACT', path: '/contact', icon: Mail, tag: 'INTAKE' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060B18]/90 backdrop-blur-md border-b border-sky-500/20 py-3 shadow-2xl shadow-blue-950/30'
          : 'bg-gradient-to-b from-[#060B18]/95 via-[#060B18]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-9 h-9 rounded bg-[#0E131F] border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-sm animate-pulse" />
            <div className="absolute inset-0 border border-cyan-400/20 rounded scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
              COGNICIERGE
            </span>
            <span className="font-mono-tech text-[9px] tracking-widest text-slate-400 uppercase -mt-1">
              SOLUTIONS / INDIA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-3 py-1.5 text-xs font-mono-tech tracking-wider uppercase transition-colors rounded ${
                  isActive
                    ? 'text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full glow-cyan-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-tech font-bold uppercase tracking-wider text-[#07090E] bg-cyan-400 hover:bg-cyan-300 rounded transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#07090E]/95 backdrop-blur-xl z-40 border-t border-cyan-500/20 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="space-y-2">
            <div className="text-[10px] font-mono-tech text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              SYSTEM DOMAINS &amp; SECTORS
            </div>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                    isActive
                      ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-300'
                      : 'bg-[#0E131F]/60 border-slate-800 text-slate-200 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="font-display font-bold text-base">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 bg-slate-800 text-slate-400 rounded">
                    {item.tag}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-mono-tech font-bold uppercase tracking-wider text-[#07090E] bg-cyan-400 hover:bg-cyan-300 rounded shadow-lg shadow-cyan-500/20"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="text-center font-mono-tech text-[10px] text-slate-500 tracking-widest uppercase">
              COGNICIERGE SOLUTIONS / DEEP-TECH ENGINEERING INDIA
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
