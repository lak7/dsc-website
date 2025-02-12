"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type EventDetailsProps = {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  winners?: { position: string; name: string ,image:string}[];
  closingNote?: string;
  reelLink?: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const EventDetails: FC<EventDetailsProps> = ({
  title,
  subtitle,
  description,
  highlights,
  winners,
  closingNote,
  reelLink,
}) => {
  return (
    <motion.div initial="initial" animate="animate" className="w-full">
      {/* Title Section */}
      <motion.div variants={fadeInUp} className="space-y-4 mb-16">
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600">
            {title}
          </h1>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl font-light">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Description */}
      <motion.div
        variants={fadeInUp}
        className="prose prose-lg prose-invert max-w-none"
      >
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <motion.div variants={stagger} className="mt-16 space-y-8">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              ✨
            </span>
            Event Highlights
          </motion.h2>
          <motion.ul variants={stagger} className="space-y-6">
            {highlights.map((highlight, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 text-gray-300 group"
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  {index + 1}
                </span>
                <span className="text-base sm:text-lg leading-relaxed flex-1">
                  {highlight}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}

      {/* Winners Section */}
      {winners && winners.length > 0 && (
        <motion.div variants={stagger} className="mt-16 space-y-8">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
              🏆
            </span>
            Winners
          </motion.h2>
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {winners.map((winner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  <div className="hidden">
                      {winner.position}
                  </div>
                 <img src={winner.image} alt="winner.name"/> 
                </div>
                <div className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 group-hover:from-blue-300 group-hover:to-purple-400 transition-all">
                  {winner.name} 
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Closing Note */}
      {closingNote && (
        <motion.div
          variants={fadeInUp}
          className="mt-16 p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
        >
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed italic">
            {closingNote}
          </p>
        </motion.div>
      )}

      {/* Instagram Link */}
      {reelLink && (
        <motion.div variants={fadeInUp} className="flex justify-center mt-16">
          <a
            href={reelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-purple-500/30 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 group-hover:via-purple-500/10 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="flex items-center gap-3">
              <span className="text-base sm:text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                Watch Event Reel
              </span>
              <svg
                className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors transform group-hover:translate-x-1 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventDetails;
