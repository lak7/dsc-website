"use client";

import VideoBackground from "@/components/common/VideoBackground";
import EventDetails from "../EventDetails";

const GameOfCode = () => {
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
            title="Game of Code 2.0"
            subtitle="A Coding Extravaganza at BVEST, hosted by DSC BVCOE and TechShuttle Society"
            description="As part of our annual college fest BVEST, the Developer Student Club (DSC) BVCOE, in collaboration with TechShuttle Society, hosted the highly anticipated Game of Code 2.0 on 19th October. This exciting event was crafted to challenge, inspire, and bring together tech enthusiasts from multiple institutions."
            highlights={[
              "A two-stage challenge designed to test participants' technical expertise, coding skills, and problem-solving abilities.",
              "A platform for students to collaborate, innovate, and showcase their programming talent.",
              "Enthusiastic participation from passionate coders across colleges, fostering learning and knowledge exchange.",
            ]}
            winners={[
              { position: "🥇", name: "Over Engineers" },
              { position: "🥈", name: "Chote Miya - Bade Miya" },
              { position: "🥉", name: "Hex Questers" },
            ]}
            closingNote="Kudos to all the participants for their exceptional performance and innovative approaches. The competition was fierce, but the collaborative spirit and enthusiasm stood out the most. Together, we created a memorable experience that inspired and empowered participants."
            reelLink="https://www.instagram.com/reel/DBI8vlwSVKy/"
          />
        </div>
      </main>
    </div>
  );
};

export default GameOfCode;
