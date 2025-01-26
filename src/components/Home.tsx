"use client";

import { motion } from "framer-motion";
import VideoBackground from "./common/VideoBackground";

export default function Home() {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-dvh bg-black text-white/90 overflow-hidden font-light">
      {/* Main Content */}
      <main className="relative mt-4 sm:mt-8 z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <VideoBackground />
        <div className="max-w-[90vw] lg:max-w-7xl mx-auto text-center px-4">
          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100 text-left text-sm">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  D
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <b>EV</b>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  ELOPER
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  STUDE
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <b>NT</b>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  S
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <b>CL</b>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  UB
                </motion.span>
              </h1>
            </div>

            {/* Text section */}
            <div className="absolute bottom-20 right-0 lg:right-[10%] 2xl:right-64 lg:top-1/2 lg:-translate-y-1/2 flex flex-row lg:flex-row items-end lg:items-center gap-4 lg:gap-8 px-5 sm:px-10 max-w-[85vw] lg:max-w-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden lg:block"
              >
                <h2 className="text-2xl lg:text-4xl font-light [writing-mode:vertical-lr] rotate-180">
                  WE ARE A
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-row items-start gap-4 mr-4 mb-10"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="lg:hidden"
                >
                  <h2 className="text-2xl font-light [writing-mode:vertical-lr] rotate-180">
                    WE ARE A
                  </h2>
                </motion.div>

                <div className="max-w-[260px] lg:max-w-[400px] 2xl:max-w-sm">
                  <p className="text-lg lg:text-2xl font-light text-justify leading-relaxed">
                    vibrant community of tech enthusiasts dedicated to
                    innovation and collaboration, empowering students to learn
                    and create impactful solutions
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
