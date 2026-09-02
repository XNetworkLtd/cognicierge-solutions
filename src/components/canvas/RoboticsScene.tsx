'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function RobotArmMachine() {
  const baseRef = useRef<THREE.Group>(null);
  const joint1Ref = useRef<THREE.Group>(null);
  const joint2Ref = useRef<THREE.Group>(null);
  const sensorConeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (baseRef.current) {
      baseRef.current.rotation.y = Math.sin(t * 0.5) * 0.4;
    }
    if (joint1Ref.current) {
      joint1Ref.current.rotation.z = Math.sin(t * 0.8) * 0.3 - 0.2;
    }
    if (joint2Ref.current) {
      joint2Ref.current.rotation.z = Math.cos(t * 1.1) * 0.4;
    }
    if (sensorConeRef.current) {
      sensorConeRef.current.rotation.y += delta * 2;
    }
  });

  return (
    <group position={[0, -1.2, 0]}>
      {/* Heavy Base Support */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[1.2, 1.4, 0.4, 32]} />
        <meshStandardMaterial color="#0E131F" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Rotating Shoulder Base */}
      <group ref={baseRef} position={[0, 0.4, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.8, 0.9, 0.6, 24]} />
          <meshStandardMaterial color="#141C2E" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Joint 1 (Lower Arm) */}
        <group ref={joint1Ref} position={[0, 0.6, 0]}>
          <mesh position={[0, 0.9, 0]}>
            <boxGeometry args={[0.3, 1.8, 0.3]} />
            <meshStandardMaterial
              color="#00E5FF"
              wireframe
              emissive="#0088FF"
              emissiveIntensity={0.5}
            />
          </mesh>

          {/* Joint 2 (Upper Arm) */}
          <group ref={joint2Ref} position={[0, 1.8, 0]}>
            <mesh position={[0, 0.8, 0]}>
              <boxGeometry args={[0.25, 1.6, 0.25]} />
              <meshStandardMaterial color="#0E131F" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* End Effector & Optical Sensor Head */}
            <group position={[0, 1.6, 0]}>
              <mesh>
                <sphereGeometry args={[0.22, 16, 16]} />
                <meshStandardMaterial color="#FFB300" emissive="#FFB300" emissiveIntensity={0.8} />
              </mesh>
              {/* Lidar Perception Scanning Cone */}
              <mesh ref={sensorConeRef} position={[0, 0.6, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.8, 1.2, 16, 1, true]} />
                <meshStandardMaterial color="#00E5FF" transparent opacity={0.3} side={THREE.DoubleSide} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default function RoboticsScene() {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 1, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#00E5FF" />
        <directionalLight position={[-10, -5, -5]} intensity={0.5} color="#0088FF" />

        <gridHelper args={[16, 16, '#00E5FF', '#1E293B']} position={[0, -1.2, 0]} />

        <RobotArmMachine />

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
