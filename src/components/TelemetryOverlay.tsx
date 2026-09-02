'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Radio, Cpu, Shield, Clock } from 'lucide-react';

interface TelemetryProps {
  systemName?: string;
  subsystem?: string;
  showCoordinates?: boolean;
  className?: string;
}

export default function TelemetryOverlay({
  systemName = 'COGNICIERGE OS',
  subsystem = 'DEEP-TECH ENGINE',
  showCoordinates = true,
  className = '',
}: TelemetryProps) {
  const [timeStr, setTimeStr] = useState<string>('');
  const [lat, setLat] = useState<string>('12.9716° N');
  const [lng, setLng] = useState<string>('77.5946° E');
  const [packet, setPacket] = useState<number>(10482);
  const [latency, setLatency] = useState<number>(4);

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      setTimeStr(d.toUTCString().slice(17, 25) + ' UTC');
      setPacket((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setLatency(3 + Math.floor(Math.random() * 3));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`pointer-events-none select-none font-mono-tech text-[10px] text-slate-400 z-20 flex flex-col gap-2 ${className}`}
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between bg-[#0E131F]/80 backdrop-blur border border-cyan-500/20 px-3 py-1.5 rounded text-cyan-300">
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span className="font-bold tracking-wider">{systemName}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-300">{subsystem}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            {latency}ms
          </span>
          <span className="text-slate-300">{timeStr || '00:00:00 UTC'}</span>
        </div>
      </div>

      {/* Bottom Coordinates & Stream Data */}
      {showCoordinates && (
        <div className="flex items-center justify-between text-[9px] text-slate-400 px-1">
          <div className="flex items-center gap-3">
            <span>LOC: {lat}, {lng} (IND)</span>
            <span>PKT: #{packet}</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400/80">
            <span>SENSORS: ACTIVE</span>
            <span>GRID: LOCKED</span>
          </div>
        </div>
      )}
    </div>
  );
}
