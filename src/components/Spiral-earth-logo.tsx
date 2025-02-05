"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import type * as THREE from "three";

function Logo() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group>
      <Text
        ref={meshRef}
        font="/fonts/Inter-Bold.woff"
        fontSize={0.5}
        letterSpacing={0.05}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {"{;}"}
        <meshStandardMaterial
          color={hovered ? "#ff9f1c" : "#4361ee"}
          emissive={hovered ? "#ff9f1c" : "#4361ee"}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Text>
    </group>
  );
}

export default function SpiralEarthLogo() {
  return (
    <div className="h-screen w-screen bg-transparent">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Logo />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
