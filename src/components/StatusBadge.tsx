'use client';
import React from 'react';

export type StatusType = 
  | 'CONCEPT' 
  | 'RESEARCH' 
  | 'R&D'
  | 'PROTOTYPE' 
  | 'DEMONSTRATOR' 
  | 'PILOT' 
  | 'DEPLOYMENT' 
  | 'DEVELOPMENT'
  | 'EXPERIMENTAL';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
  size?: 'sm' | 'md';
}

export default function StatusBadge({ status, className = '', size = 'md' }: StatusBadgeProps) {
  const getColors = () => {
    switch (status) {
      case 'CONCEPT':
        return 'bg-purple-950/40 text-purple-400 border-purple-800/50';
      case 'RESEARCH':
      case 'R&D':
        return 'bg-blue-950/40 text-blue-400 border-blue-800/50';
      case 'EXPERIMENTAL':
        return 'bg-amber-950/40 text-amber-400 border-amber-800/50';
      case 'PROTOTYPE':
      case 'DEVELOPMENT':
        return 'bg-cyan-950/40 text-cyan-400 border-cyan-800/50';
      case 'DEMONSTRATOR':
        return 'bg-teal-950/40 text-teal-300 border-teal-800/50';
      case 'PILOT':
        return 'bg-emerald-950/40 text-emerald-400 border-emerald-800/50';
      case 'DEPLOYMENT':
        return 'bg-green-950/40 text-green-400 border-green-700/60';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-700';
    }
  };

  const pxClass = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono-tech font-semibold tracking-wider border rounded uppercase ${pxClass} ${getColors()} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}
