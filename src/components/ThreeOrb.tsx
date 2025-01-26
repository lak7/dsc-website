"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFrame } from "@react-three/drei";
import { useRef } from "react";
import { type Mesh, Vector3 } from "three";
import { useSpring, animated } from "@react-spring/three";

function Orb({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);
  const time = useRef(Math.random() * 100);

  // Create floating animation
  useFrame((state) => {
    if (meshRef.current) {
      time.current += 0.01;
      meshRef.current.position.y += Math.sin(time.current) * 0.001;
    }
  });

  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 280, friction: 120 },
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={new Vector3(...position)}
      scale={scale}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        roughness={0.1}
        metalness={0.9}
        clearcoat={1}
        clearcoatRoughness={0.1}
        color="#300000"
      />
      <pointLight color="#ff0000" intensity={2} distance={3} />
    </animated.mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 15]} />

        <Orb position={[-2, 1, 0]} />
        <Orb position={[2, 1, 0]} />
        <Orb position={[0, -1, 0]} />

        <Environment preset="warehouse" />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
