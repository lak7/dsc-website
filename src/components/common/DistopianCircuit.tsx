"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Branch {
  id: number;
  startX: number;
  startY: number;
  path: string;
  nodes: { x: number; y: number; filled: boolean }[];
}

export default function DystopianCircuit() {
  const [branches, setBranches] = useState<Branch[]>([]);

  // Generate a single branch path with increased randomness
  const generateBranch = (
    startX: number,
    startY: number,
    direction: "tl" | "tr" | "bl" | "br"
  ): Branch => {
    let currentX = startX;
    let currentY = startY;
    let path = `M ${currentX} ${currentY}`;
    let nodes = [];

    // Increased random segments
    const segments = 4 + Math.floor(Math.random() * 6);

    for (let i = 0; i < segments; i++) {
      const length = 40 + Math.random() * 100; // Increased length variance
      const isVertical = Math.random() > 0.5;

      // More complex directional logic
      switch (direction) {
        case "tl":
          if (isVertical) {
            currentY -= length;
          } else {
            currentX -= length;
          }
          break;
        case "tr":
          if (isVertical) {
            currentY -= length;
          } else {
            currentX += length;
          }
          break;
        case "bl":
          if (isVertical) {
            currentY += length;
          } else {
            currentX -= length;
          }
          break;
        case "br":
          if (isVertical) {
            currentY += length;
          } else {
            currentX += length;
          }
          break;
      }

      path += ` L ${currentX} ${currentY}`;

      // Add node at each turn with random size
      nodes.push({
        x: currentX,
        y: currentY,
        filled: Math.random() > 0.4, // Increased probability of filled nodes
      });
    }

    return {
      id: Math.random(),
      startX,
      startY,
      path,
      nodes,
    };
  };

  useEffect(() => {
    // Generate branches from all corners and some middle points
    const allBranches = [
      // Top left branches
      ...Array.from({ length: 12 }, (_, i) =>
        generateBranch(Math.random() * 400, Math.random() * 300, "br")
      ),
      // Top right branches
      ...Array.from({ length: 12 }, (_, i) =>
        generateBranch(
          window.innerWidth - Math.random() * 400,
          Math.random() * 300,
          "bl"
        )
      ),
      // Bottom left branches
      ...Array.from({ length: 12 }, (_, i) =>
        generateBranch(
          Math.random() * 400,
          window.innerHeight - Math.random() * 300,
          "tr"
        )
      ),
      // Bottom right branches
      ...Array.from({ length: 12 }, (_, i) =>
        generateBranch(
          window.innerWidth - Math.random() * 400,
          window.innerHeight - Math.random() * 300,
          "tl"
        )
      ),
      // Random middle points
      ...Array.from({ length: 20 }, () =>
        generateBranch(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight,
          ["tl", "tr", "bl", "br"][Math.floor(Math.random() * 4)] as any
        )
      ),
    ];

    setBranches(allBranches);
  }, []);

  return (
    <div className="absolute inset-0 bg-transparent opacity-10">
      <svg
        className="w-full h-full"
        style={{
          filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))",
        }}
      >
        {branches.map((branch, index) => (
          <g key={branch.id}>
            {/* Animated circuit path */}
            <motion.path
              d={branch.path}
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: index * 0.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                repeatType: "reverse",
              }}
            />

            {/* Nodes at the turns */}
            {branch.nodes.map((node, nodeIndex) => (
              <motion.circle
                key={`${branch.id}-${nodeIndex}`}
                cx={node.x}
                cy={node.y}
                r={2 + Math.random() * 3}
                fill={node.filled ? "white" : "transparent"}
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth={1.5}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: index * 0.1 + nodeIndex * 0.05,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                  repeatType: "reverse",
                }}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
