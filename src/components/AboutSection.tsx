"use client";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full bg-black py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="absolute -left-4 top-0 w-0.5 h-full bg-blue-500/30" />
          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light text-justify">
            Developer Student Club (DSC) BVCOE, is a dynamic community of tech
            enthusiasts committed to fostering innovation and collaboration. We
            empower students to connect with peers, learn emerging technologies,
            and build impactful solutions for real-world challenges.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
