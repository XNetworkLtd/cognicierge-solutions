'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

export interface HardwareLayer {
  id: string;
  name: string;
  chip: string;
  offsetY: number;
  color: string;
  description: string;
}

const LAYERS: HardwareLayer[] = [
  { id: 'l0', name: 'BASE CARRIER BOARD', chip: 'Multi-layer High Speed PCB', offsetY: 0, color: '#0A2540', description: 'Custom rugged carrier board with high-density bus routing & ESD protection.' },
  { id: 'l1', name: 'MICROCONTROLLER BUS', chip: 'Dual ESP32-S3 Co-Processor', offsetY: 0.6, color: '#0088FF', description: 'Low-latency real-time sensor processing and motor actuator drive control.' },
  { id: 'l2', name: 'PRIMARY COMPUTE CORE', chip: 'Raspberry Pi CM4 / SOM', offsetY: 1.2, color: '#00E5FF', description: 'Quad-core ARM 64-bit architecture executing local OS & edge gateway.' },
  { id: 'l3', name: 'EDGE NEURAL ACCELERATOR', chip: 'TENSOR NPU (8 TOPS)', offsetY: 1.8, color: '#FFB300', description: 'Dedicated AI engine for real-time computer vision & local model inference.' },
  { id: 'l4', name: 'VISION & SENSOR SHIELD', chip: 'High-Res Optical + IMU Stack', offsetY: 2.4, color: '#00E676', description: 'Integrated spatial perception camera sensor with 9-axis motion fusion.' },
];

function ExplodedBoard({ explodeFactor }: { explodeFactor: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {LAYERS.map((layer, idx) => {
        const currentY = layer.offsetY * explodeFactor;
        return (
          <group key={layer.id} position={[0, currentY, 0]}>
            {/* PCB Layer Slab */}
            <mesh>
              <boxGeometry args={[3, 0.08, 2]} />
              <meshStandardMaterial
                color={layer.color}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Circuit Line Overlay Wireframe */}
            <mesh position={[0, 0.05, 0]}>
              <boxGeometry args={[2.9, 0.01, 1.9]} />
              <meshStandardMaterial
                color="#00E5FF"
                wireframe
                emissive="#00E5FF"
                emissiveIntensity={0.5}
              />
            </mesh>

            {/* Chip Pins & IC Blocks */}
            <mesh position={[0, 0.12, 0]}>
              <boxGeometry args={[0.8, 0.1, 0.8]} />
              <meshStandardMaterial color="#1E293B" metalness={0.9} />
            </mesh>

            {/* Layer Label Tooltip when exploded */}
            {explodeFactor > 0.3 && (
              <Html position={[1.8, 0, 0]} center>
                <div className="bg-[#0E131F]/90 border border-cyan-500/40 px-2 py-1 rounded text-[9px] font-mono-tech text-cyan-300 shadow-xl whitespace-nowrap">
                  <span className="font-bold text-slate-100">{layer.name}</span>
                  <div className="text-[8px] text-slate-400">{layer.chip}</div>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
}

export default function AtlasScene() {
  const [explodeFactor, setExplodeFactor] = useState<number>(0.7);

  return (
    <div className="w-full h-full min-h-[550px] relative flex flex-col justify-between">
      <div className="w-full h-[480px]">
        <Canvas
          camera={{ position: [0, 2, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.8} color="#00E5FF" />
          <directionalLight position={[-10, -5, -5]} intensity={0.5} color="#0088FF" />

          <ExplodedBoard explodeFactor={explodeFactor} />

          <OrbitControls enableZoom={false} autoRotate={false} />
        </Canvas>
      </div>

      {/* Exploded View Control Bar */}
      <div className="bg-[#0E131F]/90 border border-cyan-500/30 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-slate-300 z-10 mx-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold uppercase">EXPLODED VIEW CONTROL:</span>
          <span className="text-slate-400">{Math.round(explodeFactor * 100)}% SEPARATION</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={explodeFactor}
          onChange={(e) => setExplodeFactor(parseFloat(e.target.value))}
          className="w-full sm:w-64 accent-cyan-400 bg-slate-800 cursor-pointer"
        />
      </div>
    </div>
  );
}
