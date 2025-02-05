"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import CanvasLoader from "./ui/Loader";

function Earth() {
  const gltf = useGLTF("/dist-earth/scene.gltf");
  const earthRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return <primitive object={gltf.scene} ref={earthRef} scale={[1, 1, 1]} />;
}

function LogoField() {
  const groupRef = useRef<THREE.Group>(null);
  const NUM_RINGS = 4;
  const LOGOS_PER_RING = 10;
  const RING_LAYERS = 3;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: RING_LAYERS }).map((_, layerIndex) => {
        const layerRotation = (layerIndex * Math.PI) / RING_LAYERS;

        return (
          <group
            key={layerIndex}
            rotation={[layerRotation, 0, layerRotation / 2]}
          >
            {Array.from({ length: NUM_RINGS }).map((_, ringIndex) => {
              const radius = 1.5 + ringIndex * 0.2;
              const opacity = 1 - ringIndex * 0.15;

              return (
                <group key={ringIndex}>
                  <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[radius - 0.04, radius + 0.04, 64]} />
                    <meshPhysicalMaterial
                      color="#f0f0f0"
                      side={THREE.DoubleSide}
                      transparent
                      opacity={opacity * 0.2}
                      metalness={0.8}
                      roughness={0.2}
                    />
                  </mesh>
                  {Array.from({ length: LOGOS_PER_RING }).map((_, i) => {
                    const angle = (i / LOGOS_PER_RING) * Math.PI * 2;
                    const x = Math.cos(angle) * radius;
                    const z = Math.sin(angle) * radius;
                    const rotationY = -angle + Math.PI / 2;

                    return (
                      <group
                        key={i}
                        position={[x, 0, z]}
                        rotation={[0, rotationY, 0]}
                      >
                        <Text
                          fontSize={0.1}
                          color="#f0f0f0"
                          anchorX="center"
                          anchorY="middle"
                          maxWidth={0.5}
                          renderOrder={1}
                          material-transparent
                          material-opacity={opacity}
                        >
                          {"{;}"}
                        </Text>
                      </group>
                    );
                  })}
                </group>
              );
            })}
          </group>
        );
      })}
    </group>
  );
}

export default function SpiralEarthScene() {
  return (
    <div className="h-screen w-screen bg-transparent">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={<CanvasLoader />}>
          <group>
            <Earth />
            <LogoField />
          </group>
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
