'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function HolographicLabMatrix() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Holographic Node Grid */}
      <mesh>
        <dodecahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#00E5FF"
          wireframe
          emissive="#0088FF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Orbiting Tech Cube Data Clusters */}
      {[-2, 2].map((x) =>
        [-1.5, 1.5].map((y) => (
          <mesh key={`${x}-${y}`} position={[x, y, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial
              color="#FFB300"
              wireframe
              emissive="#FFB300"
              emissiveIntensity={0.8}
            />
          </mesh>
        ))
      )}
    </group>
  );
}

export default function LabScene() {
  return (
    <div className="w-full h-full min-h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#00E5FF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#0088FF" />

        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
        <HolographicLabMatrix />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
