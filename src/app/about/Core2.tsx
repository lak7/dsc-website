"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TeamMember, teamMembers } from "@/constants/teamdata";
import { motion } from "framer-motion";
import VideoBackground from "@/components/common/VideoBackground";

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const featuredMember = teamMembers.find((member) => member.featured);
  const regularMembers = teamMembers.filter((member) => !member.featured);

  return (
    <div className="relative bg-black min-h-screen py-16 px-4 overflow-hidden">
      <VideoBackground />
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Overlay for readability */}
      <div className="container mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white/90 text-center mb-16 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            MEET OUR FACULTY INCHARGE
          </span>
        </motion.h1>

        <div className="flex flex-col items-center space-y-20">
          {/* Featured Team Member */}
          {featuredMember && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative cursor-pointer group w-64 h-64 md:w-80 md:h-80"
              onClick={() => setSelectedMember(featuredMember)}
            >
              <div className="relative w-full h-full">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-50 group-hover:opacity-75 blur transition duration-1000 group-hover:duration-200" />

                {/* Square container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
                  <Image
                    src={featuredMember.imageUrl || "/placeholder.svg"}
                    alt={featuredMember.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white/90 font-bold text-2xl mb-2">
                        {featuredMember.name}
                      </p>
                      <p className="text-blue-300/90 text-lg">
                        {featuredMember.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-16 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              MEET OUR CORE
            </span>
          </motion.h1>

          {/* Regular Team Members Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
          >
            {regularMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative cursor-pointer group w-40 h-40 md:w-56 md:h-56 mx-auto"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative w-full h-full">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-1000 group-hover:duration-200" />

                  {/* Square container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white/90 font-bold text-lg mb-1">
                          {member.name}
                        </p>
                        <p className="text-blue-300/90 text-sm">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Member Details Modal */}
        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogContent className="sm:max-w-[425px] bg-black/95 border border-white/10">
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white/90">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-6">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-30 blur" />
                    <div className="relative w-48 h-48 mx-auto rounded-3xl overflow-hidden border border-white/10">
                      <Image
                        src={selectedMember.imageUrl || "/placeholder.svg"}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <h2 className="text-xl font-semibold text-blue-300/90 mb-2">
                      {selectedMember.role}
                    </h2>
                    <p className="text-white/80 leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
