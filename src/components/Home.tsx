"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GradientBackground from "./common/GradientBackground";
import CircularCounter from "./common/CircularCounter";
import { useState } from "react";
import ParticleField from "./common/ParticleField";
import TechGraphics from "./common/TechGraphics";
import DistopianCircuit from "./common/DistopianCircuit";
import ScanlineEffect from "./common/ScanlineEffect";
import TypewriterText from "./common/TypewriterText";
import { TiLocationArrow } from "react-icons/ti";
import VideoBackground from "./common/VideoBackground";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-dvh bg-black text-white/90 overflow-hidden font-light">
      <VideoBackground />

      {/* Main Content */}
      <main className="relative mt-4 sm:mt-8 z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100 text-left ">
                D<b>EV</b>ELOPER <br /> STUDE<b>NT</b>S <br /> <b>CL</b>UB
              </h1>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
