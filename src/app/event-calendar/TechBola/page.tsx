"use client";

import VideoBackground from "@/components/common/VideoBackground";
import EventDetails from "../EventDetails";

const TechBola = () => {
  return (
    <div className="min-h-dvh bg-[#0A0A0F] text-white/90 overflow-y-auto font-light">
      <div className="fixed inset-0 z-0">
        <VideoBackground />
      </div>

      <main className="relative z-10 min-h-dvh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="mb-8">
            <a
              href="/event-calendar"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Timeline
            </a>
          </div>

          <EventDetails
            title="TechBola"
            subtitle="Code, Play, Win – A Thrilling Fusion of Tambola and Coding!"
            description="TechBola was an exciting coding quiz with a unique Tambola twist, where participants solved programming challenges while playing a strategic number game, making learning fun and competitive!"
            highlights={[
              "Innovative Blend – A unique fusion of Tambola and coding, combining strategy, luck, and programming skills.",
              "Competitive Spirit – Participants tackled coding challenges while engaging in a thrilling number-based game.",
              "Exciting Rewards – Winners showcased their coding Expertise and game strategy to claim top prizes.",
            ]}
            winners={[
              { position: "🥇", name: "Aditya Tyagi" ,image:"#"},
              { position: "🥈", name: "Kirthika", image:"#" },
              { position: "🥉", name: "Ayush Mittal", image:"#" },
              { position: "#", name: "TechBola Event", image: "/TechBola2.jpeg" },
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default TechBola;
