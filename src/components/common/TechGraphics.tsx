import { motion } from "framer-motion";

const TechGraphics = () => {
  const randomPos = (min: number, max: number) =>
    Math.random() * (max - min) + min;
  const randomDelay = () => Math.random() * 3;

  // Circuit board pattern component
  const CircuitPattern = ({ position }: { position: "left" | "right" }) => (
    <g
      transform={
        position === "left" ? "translate(50, 700)" : "translate(1270, 300)"
      }
    >
      <motion.path
        d={
          position === "left"
            ? `
          M0,0 h80 v30 h50 v-80 h30 v120 h-40
          M120,70 v-120 h40 v80 h30
          M190,30 h60 v40 h-30 v80
          M250,100 v50 h-60 v30
          M160,150 h-120 v30
          M20,180 v-50 h-20
          M80,160 v70 h40 v-40
        `
            : `
          M0,0 h120 v60 h-40 v100 h80 v-40 h60
          M220,120 v80 h-120 v40 h200
          M300,180 v-80 h100 v40 h-60 v80
          M340,220 h120 v-120 h60
          M520,100 v160 h-80 v-40
          M440,180 h-120 M380,180 v60
          
          M0,300 h160 v-40 h80 v80 h-120
          M240,340 h80 v-120 h40 v80 h60
          M420,300 v-60 h100 v100 h-60
          M460,280 h120 v60 h-80
          
          M100,400 v80 h160 v-40 h80
          M380,440 h140 v-80 h60 v120
          M520,480 h60 v-160 M520,400 h60
          
          M0,120 v-80 M60,120 v-60 M160,160 v-40
          M280,80 v40 M400,60 v60 M480,40 v80
          M180,280 v60 M300,260 v80 M420,240 v60
        `
        }
        stroke="white"
        strokeWidth="0.6"
        fill="none"
        initial={{ pathLength: 0, opacity: 0.15 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      {/* Connection Points */}
      {position === "right"
        ? [...Array(15)].map((_, i) => (
            <motion.circle
              key={`circuit-point-${position}-${i}`}
              cx={40 + (i % 5) * 120}
              cy={80 + Math.floor(i / 5) * 160}
              r="1"
              fill="white"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: 0.4, scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          ))
        : [...Array(6)].map((_, i) => (
            <motion.circle
              key={`circuit-point-${position}-${i}`}
              cx={30 + i * 40}
              cy={100 + (i % 2) * 30}
              r="1"
              fill="white"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: 0.4, scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.3,
              }}
            />
          ))}
      {/* Circuit Intersections */}
      <motion.path
        d={
          position === "left"
            ? `
          M40,40 l10,10 m-10,0 l10,-10
          M120,90 l10,10 m-10,0 l10,-10
          M200,60 l10,10 m-10,0 l10,-10
        `
            : `
          M120,120 l10,10 m-10,0 l10,-10
          M240,180 l10,10 m-10,0 l10,-10
          M360,240 l10,10 m-10,0 l10,-10
          M480,300 l10,10 m-10,0 l10,-10
          M180,360 l10,10 m-10,0 l10,-10
          M300,420 l10,10 m-10,0 l10,-10
          M420,280 l10,10 m-10,0 l10,-10
        `
        }
        stroke="white"
        strokeWidth="0.4"
        initial={{ opacity: 0.15 }}
        animate={{ opacity: 0.35 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {/* Flowing Pulse Effects */}
      {position === "right" ? (
        [...Array(3)].map((_, i) => (
          <motion.circle
            key={`pulse-${position}-${i}`}
            r="2"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
              translateX: [0, 580],
              translateY: [i * 160, 100 + i * 160],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
          />
        ))
      ) : (
        <motion.circle
          r="2"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 0.8],
            translateX: [0, 250],
            translateY: [0, 100],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </g>
  );

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Circuit Board Patterns */}
        <CircuitPattern position="left" />
        <CircuitPattern position="right" />

        {/* Subtle Tech Accents */}
        {[...Array(6)].map((_, i) => {
          const x = randomPos(100, 1820);
          const y = randomPos(100, 900);
          const size = randomPos(15, 25);
          return (
            <motion.path
              key={`accent-${i}`}
              d={`M${x},${y} l${size},0 l0,${size} M${x},${
                y + size
              } l${size},0`}
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              initial={{ opacity: 0.05 }}
              animate={{ opacity: 0.2 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: randomDelay(),
              }}
            />
          );
        })}

        {/* Ethereal Connection Points */}
        {[...Array(12)].map((_, i) => {
          const x = randomPos(50, 1870);
          const y = randomPos(50, 900);
          const isCenter = x > 700 && x < 1220;
          return (
            <motion.circle
              key={`point-${i}`}
              cx={x}
              cy={y}
              r={isCenter ? 0.8 : 1}
              fill="white"
              initial={{ opacity: isCenter ? 0.05 : 0.1 }}
              animate={{
                opacity: isCenter ? [0.05, 0.15] : [0.1, 0.25],
                scale: isCenter ? [1, 1.2] : [1, 1.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: randomDelay(),
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Minimal Circuit Lines */}
        {[...Array(4)].map((_, i) => {
          const startX = randomPos(100, 1820);
          const startY = randomPos(100, 900);
          const angle = randomPos(0, Math.PI * 2);
          const length = randomPos(30, 60);
          const endX = startX + Math.cos(angle) * length;
          const endY = startY + Math.sin(angle) * length;

          return (
            <motion.line
              key={`line-${i}`}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="white"
              strokeWidth="0.5"
              initial={{ opacity: 0.05, pathLength: 0 }}
              animate={{ opacity: 0.2, pathLength: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: randomDelay(),
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Subtle Center Flow */}
        <motion.path
          d="M800,200 Q960,300 960,400 T960,600"
          stroke="white"
          strokeWidth="0.3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.05 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Delicate Corner Accents */}
        {[...Array(4)].map((_, i) => {
          const x = i % 2 === 0 ? 100 : 1820;
          const y = i < 2 ? 100 : 980;
          return (
            <motion.path
              key={`corner-${i}`}
              d={`M${x},${y} ${i % 2 === 0 ? "h30" : "h-30"} ${
                i < 2 ? "v30" : "v-30"
              }`}
              stroke="white"
              strokeWidth="0.4"
              fill="none"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 0.3 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 1.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default TechGraphics;
