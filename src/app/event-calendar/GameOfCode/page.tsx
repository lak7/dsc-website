"use client";

import VideoBackground from "@/components/common/VideoBackground";
import EventDetails from "../EventDetails";

const GameOfCode = () => {
  return (
    <>
      <div className="z-0 absolute inset-0">
        <VideoBackground />
      </div>
      <div className="z-10 relative py-16">
        <EventDetails
          title="Game of Code 2.0 – A Coding Extravaganza!"
          subtitle="Part of BVEST, hosted by DSC BVCOE and TechShuttle Society."
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
    </>
  );
};

export default GameOfCode;
