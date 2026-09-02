'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

export interface ComponentNode {
  id: string;
  name: string;
  pos: [number, number, number];
  description: string;
}

const FLIGHT_NODES: ComponentNode[] = [
  { id: 'gps', name: 'GPS / GNSS MODULE', pos: [0, 0.4, -0.6], description: 'Multi-band RTK GNSS receiver for high-precision autonomous positioning.' },
  { id: 'imu', name: 'DUAL IMU SENSORS', pos: [0, 0.2, 0], description: '6-DOF inertial measurement units for attitude estimation and stabilization.' },
  { id: 'camera', name: 'OPTICAL COMPUTER VISION', pos: [0, -0.2, 1.2], description: 'Forward high-speed optical flow camera for obstacle avoidance & navigation.' },
  { id: 'fc', name: 'AUTOPILOT FLIGHT CONTROLLER', pos: [0, 0.25, 0.4], description: 'Real-time flight control unit executing sub-millisecond stabilization loops.' },
  { id: 'edge', name: 'EDGE NEURAL COMPUTER', pos: [0, 0.1, -0.2], description: 'Embedded AI accelerator for real-time trajectory planning & object tracking.' },
  { id: 'motor', name: 'BRUSHLESS POWER PLANT', pos: [1.2, 0.1, 0.8], description: 'High-efficiency electric propulsion drives with dynamic thrust vectoring.' },
  { id: 'control', name: 'SURFACE ACTUATORS', pos: [-1.4, 0.1, -1.0], description: 'Precision digital servos controlling elevator and aileron surfaces.' },
];

function StealthUAV({
  selectedId,
  onSelectNode,
}: {
  selectedId: string | null;
  onSelectNode: (node: ComponentNode) => void;
}) {
  const planeRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (planeRef.current) {
      planeRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={planeRef}>
        {/* Fuselage / Wing Body (Delta Wing Aircraft Wireframe + Solid) */}
        <mesh>
          <coneGeometry args={[1.5, 3, 4]} />
          <meshStandardMaterial
            color="#0E131F"
            wireframe
            emissive="#00E5FF"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Inner Solid Composite Hull */}
        <mesh scale={[0.95, 0.95, 0.95]}>
          <coneGeometry args={[1.5, 3, 4]} />
          <meshStandardMaterial color="#070A10" roughness={0.8} metalness={0.5} />
        </mesh>

        {/* Wing Tip Extension Beacons */}
        <mesh position={[1.8, 0, -1]}>
          <boxGeometry args={[0.2, 0.05, 0.6]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
        </mesh>
        <mesh position={[-1.8, 0, -1]}>
          <boxGeometry args={[0.2, 0.05, 0.6]} />
          <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1} />
        </mesh>

        {/* Subsystem Interactive Hotspot Nodes */}
        {FLIGHT_NODES.map((node) => {
          const isSelected = selectedId === node.id;
          return (
            <group key={node.id} position={node.pos} onClick={() => onSelectNode(node)}>
              <mesh>
                <sphereGeometry args={[0.09, 16, 16]} />
                <meshStandardMaterial
                  color={isSelected ? '#FFB300' : '#00E5FF'}
                  emissive={isSelected ? '#FFB300' : '#00E5FF'}
                  emissiveIntensity={1}
                />
              </mesh>
              <Html distanceFactor={8} position={[0, 0.2, 0]} center>
                <button
                  type="button"
                  onClick={() => onSelectNode(node)}
                  className={`px-2 py-0.5 rounded font-mono-tech text-[9px] uppercase border transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-lg shadow-amber-500/50 scale-110'
                      : 'bg-[#0E131F]/90 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/20'
                  }`}
                >
                  {node.name.split(' ')[0]}
                </button>
              </Html>
            </group>
          );
        })}
      </group>
    </Float>
  );
}

export default function FlightScene({
  onSelectNode,
}: {
  onSelectNode?: (node: ComponentNode) => void;
}) {
  const [selectedNode, setSelectedNode] = useState<ComponentNode | null>(FLIGHT_NODES[3]);

  const handleSelect = (node: ComponentNode) => {
    setSelectedNode(node);
    if (onSelectNode) onSelectNode(node);
  };

  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 2, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#00E5FF" />
        <directionalLight position={[-10, -5, -5]} intensity={0.6} color="#0088FF" />

        {/* Hangar Grid Floor */}
        <gridHelper args={[20, 20, '#00E5FF', '#1E293B']} position={[0, -2, 0]} />

        <StealthUAV selectedId={selectedNode?.id || null} onSelectNode={handleSelect} />

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>

      {/* Subsystem Telemetry Card */}
      {selectedNode && (
        <div className="absolute bottom-4 right-4 bg-[#0E131F]/95 backdrop-blur border border-cyan-500/40 p-4 rounded text-xs font-mono-tech text-slate-300 max-w-sm z-10">
          <div className="text-amber-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>{selectedNode.name}</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
            {selectedNode.description}
          </p>
          <div className="text-[9px] text-cyan-400/80 uppercase">
            STATUS: NOMINAL • BUS FREQUENCY: 400HZ
          </div>
        </div>
      )}
    </div>
  );
}
