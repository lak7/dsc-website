"use client";

import VideoBackground from "@/components/common/VideoBackground";
import EventDetails from "../EventDetails";

const RRR = () => {
  return (
    <>
      <div className="z-0 absolute inset-0">
        <VideoBackground />
      </div>
      <div className="z-10 relative py-16">
        <EventDetails
          title="RRR – Reconceive, Rethink, Revise Front End Event"
          subtitle="A celebration of creativity and innovation in front-end development."
          description="The RRR – Reconceive, Rethink, Revise competition, held from 19th to 23rd October 2024, was a celebration of creativity and innovation in front-end development. Organized by Developer Student Club (DSC) BVCOE, the event brought together talented participants to showcase their technical expertise and problem-solving skills."
          highlights={[
            "The competition featured two stages: an online submission round, where 41 teams submitted impressive projects from a pool of 60 registrations, followed by an offline presentation round, held at the Library.",
            "The top 20 teams presented their work before a distinguished panel of judges, demonstrating their creativity, functionality, and usability.",
            "With a prize pool of ₹3,000, the event honored the best projects, while all teams in the final round received participation certificates in recognition of their effort and talent.",
          ]}
          winners={[
            { position: "🥇", name: "Team Pixel" },
            { position: "🥈", name: "Team BugBuster" },
            { position: "🥉", name: "Team Drag & Drop" },
          ]}
          closingNote="The RRR competition wasn’t just a contest; it was a celebration of innovation, teamwork, and creativity in front-end development. DSC BVCOE continues to bring exciting challenges and opportunities. Let’s keep rethinking, revising, and reconceiving the way we build the web!"
          reelLink="https://www.instagram.com/reel/DBWg5mLyk6V/"
        />
      </div>
    </>
  );
};

export default RRR;
