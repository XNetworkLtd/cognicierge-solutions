'use client';

import React, { useState, useEffect } from 'react';

interface CanvasWrapperProps {
  children: React.ReactNode;
  fallbackText?: string;
  className?: string;
}

export default function CanvasWrapper({
  children,
  fallbackText = 'INITIALIZING 3D TELEMETRY ENVIRONMENT...',
  className = 'w-full h-full min-h-[400px]',
}: CanvasWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`relative flex flex-col items-center justify-center bg-[#07090E] border border-cyan-500/20 rounded-lg p-8 ${className}`}>
        <div className="relative flex items-center justify-center w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-cyan-500/30 border-l-transparent animate-spin" />
          <div className="w-8 h-8 rounded-full border border-cyan-500/40 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
        </div>
        <span className="font-mono-tech text-xs tracking-widest text-cyan-400 uppercase animate-pulse">
          {fallbackText}
        </span>
        <span className="text-[10px] font-mono-tech text-slate-500 mt-1">
          WEBGL 2.0 SHADER PIPELINE LOADING
        </span>
      </div>
    );
  }

  return <div className={`relative ${className}`}>{children}</div>;
}
