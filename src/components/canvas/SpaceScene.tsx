'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SatelliteData {
  id: string;
  name: string;
  type: string;
  orbitRadius: number;
  speed: number;
  inclination: number;
  initialAngle: number;
}

const SATELLITES: SatelliteData[] = [
  { id: 'sat-1', name: 'COSMOS SENTINEL-Alpha', type: 'SDA Sensor', orbitRadius: 2.7, speed: 0.4, inclination: 0.3, initialAngle: 0 },
  { id: 'sat-2', name: 'COSMOS TWIN-Node 1', type: 'Digital Twin Orbit', orbitRadius: 3.2, speed: 0.3, inclination: -0.5, initialAngle: 2 },
  { id: 'sat-3', name: 'COSMOS COPILOT Relay', type: 'AI Telemetry Hub', orbitRadius: 3.6, speed: 0.2, inclination: 0.8, initialAngle: 4 },
];

function OrbitRing({ radius, inclination }: { radius: number; inclination: number }) {
  return (
    <group rotation={[inclination, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 16, 100]} />
        <meshStandardMaterial color="#00E5FF" transparent opacity={0.3} emissive="#00E5FF" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function OrbitingSatellite({
  data,
  onSelect,
}: {
  data: SatelliteData;
  onSelect: (sat: SatelliteData) => void;
}) {
  const satRef = useRef<THREE.Group>(null);
  const angleRef = useRef(data.initialAngle);

  useFrame((_, delta) => {
    angleRef.current += delta * data.speed;
    const x = data.orbitRadius * Math.cos(angleRef.current);
    const z = data.orbitRadius * Math.sin(angleRef.current);
    const y = z * Math.sin(data.inclination);
    if (satRef.current) {
      satRef.current.position.set(x, y, z);
    }
  });

  return (
    <group ref={satRef} onClick={() => onSelect(data)}>
      {/* Satellite Hardware Body */}
      <mesh>
        <boxGeometry args={[0.12, 0.12, 0.18]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Solar Arrays */}
      <mesh position={[0.2, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.1]} />
        <meshStandardMaterial color="#0088FF" metalness={0.8} />
      </mesh>
      <mesh position={[-0.2, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.1]} />
        <meshStandardMaterial color="#0088FF" metalness={0.8} />
      </mesh>
      {/* Target Marker Beacon */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#00E5FF" transparent opacity={0.4} emissive="#00E5FF" />
      </mesh>
      {/* Label Tooltip */}
      <Html distanceFactor={10} position={[0, 0.25, 0]} center>
        <div className="bg-[#0E131F]/90 border border-cyan-500/40 text-[9px] font-mono-tech text-cyan-300 px-2 py-0.5 rounded shadow-lg whitespace-nowrap pointer-events-none">
          {data.name}
        </div>
      </Html>
    </group>
  );
}

function CosmosEarth({ onSelect }: { onSelect: (sat: SatelliteData) => void }) {
  const earthGroupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={earthGroupRef}>
      {/* Primary Earth Globe Sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#0B1D3A"
          wireframe
          emissive="#0055FF"
          emissiveIntensity={0.25}
          roughness={0.3}
        />
      </mesh>
      {/* Inner Ocean Core */}
      <mesh>
        <sphereGeometry args={[1.97, 32, 32]} />
        <meshStandardMaterial color="#040914" roughness={0.9} />
      </mesh>
      {/* Outer Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[2.18, 32, 32]} />
        <meshStandardMaterial
          color="#00E5FF"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Orbit Paths & Satellites */}
      {SATELLITES.map((sat) => (
        <React.Fragment key={sat.id}>
          <OrbitRing radius={sat.orbitRadius} inclination={sat.inclination} />
          <OrbitingSatellite data={sat} onSelect={onSelect} />
        </React.Fragment>
      ))}
    </group>
  );
}

export default function SpaceScene({
  onSelectSatellite,
}: {
  onSelectSatellite?: (sat: SatelliteData) => void;
}) {
  const [activeSat, setActiveSat] = useState<SatelliteData | null>(SATELLITES[0]);

  const handleSelect = (sat: SatelliteData) => {
    setActiveSat(sat);
    if (onSelectSatellite) onSelectSatellite(sat);
  };

  return (
    <div className="w-full h-full min-h-[550px] relative">
      <Canvas
        camera={{ position: [0, 2, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[12, 12, 10]} intensity={1.8} color="#00E5FF" />
        <directionalLight position={[-10, -10, -10]} intensity={0.4} color="#0088FF" />

        <Stars radius={120} depth={60} count={4000} factor={5} saturation={0} fade speed={0.5} />
        <CosmosEarth onSelect={handleSelect} />

        <OrbitControls
          enableZoom={true}
          maxDistance={12}
          minDistance={3.5}
          autoRotate={false}
        />
      </Canvas>

      {/* Telemetry Target Inspector Box */}
      {activeSat && (
        <div className="absolute bottom-4 left-4 bg-[#0E131F]/90 backdrop-blur border border-cyan-500/30 p-3 rounded text-xs font-mono-tech text-slate-300 max-w-xs z-10">
          <div className="text-cyan-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>{activeSat.name}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div className="text-[10px] text-slate-400 space-y-0.5">
            <div>TYPE: {activeSat.type}</div>
            <div>ORBIT RADIUS: {activeSat.orbitRadius * 1000} KM (SIMULATED)</div>
            <div>STATUS: TELEMETRY ACTIVE</div>
          </div>
        </div>
      )}
    </div>
  );
}
