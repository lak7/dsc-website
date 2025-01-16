"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CircularCounter() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Format time to always show two digits
  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  // Only for the rotating second dot
  const secondDegrees = seconds * 6 - 90;

  return (
    <motion.div
      className="relative w-32 h-32 border border-white/20 rounded-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Second dot */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Digital time */}
      <div className="text-white text-center">
        <div className="text-3xl font-light tracking-wider font-orbitron">
          {formatNumber(hours)}:{formatNumber(minutes)}
        </div>
      </div>
    </motion.div>
  );
}
