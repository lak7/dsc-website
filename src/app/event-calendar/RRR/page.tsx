"use client";

import VideoBackground from "@/components/common/VideoBackground";
import EventDetails from "../EventDetails";

const RRR = () => {
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
            title="RRR – Reconceive, Rethink, Revise"
            subtitle="A celebration of creativity and innovation in front-end development."
            description="The RRR – Reconceive, Rethink, Revise competition, held from 19th to 23rd October 2024, was a celebration of creativity and innovation in front-end development. Organized by Developer Student Club (DSC) BVCOE, the event brought together talented participants to showcase their technical expertise and problem-solving skills."
            highlights={[
              "The competition featured two stages: an online submission round, where 41 teams submitted impressive projects from a pool of 60 registrations, followed by an offline presentation round, held at the Library.",
              "The top 20 teams presented their work before a distinguished panel of judges, demonstrating their creativity, functionality, and usability.",
              "With a prize pool of ₹3,000, the event honored the best projects, while all teams in the final round received participation certificates in recognition of their effort and talent.",
            ]}
            winners={[
              { position: "🥇", name: "Team Pixel" ,image:"/rrr1.jpg"},
              { position: "🥈", name: "Team BugBuster",image:"/rrr2.jpg" },
              { position: "🥉", name: "Team Drag & Drop",image:"/rrr3.jpg" },
            ]}
            closingNote="The RRR competition wasn't just a contest; it was a celebration of innovation, teamwork, and creativity in front-end development. DSC BVCOE continues to bring exciting challenges and opportunities. Let's keep rethinking, revising, and reconceiving the way we build the web!"
            reelLink="https://www.instagram.com/reel/DBWg5mLyk6V/"
          />
        </div>
      </main>
    </div>
  );
};

export default RRR;
