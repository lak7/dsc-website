import {
  VideoBackground2,
  VideoBackground4,
  VideoBackground5,
  VideoBackground6,
} from "@/components/common/VideoBackground";
import React from "react";
import SocietyTimelineDemo from "./EventTimeline";

const page = () => {
  return (
    <div className="min-h-dvh bg-[#0A0A0F] text-white/90 overflow-y-auto font-light">
      <VideoBackground6 />

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Content */}
          <div className="pt-24 sm:pt-32 pb-12 sm:pb-20">
            <div className="max-w-4xl">
              <h1 className="special-font hero-heading text-blue-100 text-left mb-6 sm:text-nowrap">
                E<b>VEN</b>T-
                <br className="block sm:hidden" />
                TI<b>MEL</b>INE
              </h1>

              <div className="mt-6 sm:mt-8 max-w-2xl">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Here's a look at the past events hosted by DSC BVCOE. We've
                  had workshops, hackathons, and competitions. Stay tuned for
                  more exciting events!
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Component */}
          <div className="pb-10">
            <SocietyTimelineDemo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
