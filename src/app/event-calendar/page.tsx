import VideoBackground from "@/components/common/VideoBackground";
import React from "react";
import SocietyTimelineDemo from "./EventTimeline";

const page = () => {
  return (
    <div>
      <VideoBackground />
      <main className="pt-16">
        <div className="mx-auto py-20 px-4 md:px-8 lg:px-10 z-10 relative">
          <div className="special-font hero-heading text-blue-100 text-left text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            E<b>VEN</b>T TI<b>MEL</b>INE <br />
          </div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Here's a look at the past events hosted by DSC BVCOE. We've had
            workshops, hackathons, and competitions. Stay tuned for more
            exciting events!
          </p>
        </div>
        <SocietyTimelineDemo />
      </main>
    </div>
  );
};

export default page;
