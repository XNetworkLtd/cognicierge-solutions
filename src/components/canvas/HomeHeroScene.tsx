'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function MachineCore() {
  const coreRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const nodeParticlesRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.2;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x += delta * 0.4;
      innerRingRef.current.rotation.z += delta * 0.3;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y -= delta * 0.25;
      outerRingRef.current.rotation.x -= delta * 0.15;
    }
    if (nodeParticlesRef.current) {
      nodeParticlesRef.current.rotation.y += delta * 0.08;
    }
  });

  // Create point particles around core
  const particleCount = 400;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = 2.5 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={coreRef}>
        {/* Central Core Sphere */}
        <mesh>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial
            color="#00E5FF"
            wireframe
            emissive="#0088FF"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Inner Solid Metallic Nucleus */}
        <mesh>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#0E131F"
            emissive="#00E5FF"
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>

        {/* Ring 1 - Inner Gyroscope */}
        <mesh ref={innerRingRef}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
        </mesh>

        {/* Ring 2 - Outer Gyroscope */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[2.3, 0.015, 16, 100]} />
          <meshStandardMaterial color="#0088FF" emissive="#0088FF" emissiveIntensity={0.8} />
        </mesh>

        {/* Particle Cloud */}
        <points ref={nodeParticlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[positions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial size={0.03} color="#00E5FF" transparent opacity={0.7} />
        </points>
      </group>
    </Float>
  );
}

export default function HomeHeroScene() {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0088FF" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <MachineCore />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
