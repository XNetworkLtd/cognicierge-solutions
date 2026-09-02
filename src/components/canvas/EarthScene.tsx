'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function EdgeGlobe() {
  const globeRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
    }
  });

  // Generate node coordinates on sphere surface
  const nodeCount = 30;
  const nodePositions: [number, number, number][] = [];
  for (let i = 0; i < nodeCount; i++) {
    const lat = (Math.random() - 0.5) * Math.PI * 0.8;
    const lng = Math.random() * Math.PI * 2;
    const r = 2.02;
    const x = r * Math.cos(lat) * Math.sin(lng);
    const y = r * Math.sin(lat);
    const z = r * Math.cos(lat) * Math.cos(lng);
    nodePositions.push([x, y, z]);
  }

  return (
    <group ref={globeRef}>
      {/* Globe Wireframe Body */}
      <mesh>
        <sphereGeometry args={[2, 48, 48]} />
        <meshStandardMaterial
          color="#071527"
          wireframe
          emissive="#0088FF"
          emissiveIntensity={0.2}
          roughness={0.4}
        />
      </mesh>

      {/* Inner Globe Solid Nucleus */}
      <mesh>
        <sphereGeometry args={[1.95, 32, 32]} />
        <meshStandardMaterial color="#050B14" roughness={0.9} />
      </mesh>

      {/* Atmospheric Atmosphere Glow Ring */}
      <mesh>
        <sphereGeometry args={[2.15, 32, 32]} />
        <meshStandardMaterial
          color="#00E5FF"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Equatorial Telemetry Sensor Belt */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.6, 0.01, 16, 100]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={0.8} />
      </mesh>

      {/* Edge Sensor Nodes */}
      {nodePositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          <mesh>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function EarthScene() {
  return (
    <div className="w-full h-full min-h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#0088FF" />
        <EdgeGlobe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
