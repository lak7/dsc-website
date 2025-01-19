import VideoBackground from "@/components/common/VideoBackground";
import React from "react";
import SocietyTimelineDemo from "./EventTimeline";

const page = () => {
  return (
    <div className="overflow-hidden">
      <VideoBackground />
      <main className="py-24">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 z-10 relative">
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
            Event Timeline
          </h2>
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
