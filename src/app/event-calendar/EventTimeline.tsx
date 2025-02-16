import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function SocietyTimelineDemo() {
  const data = [
    {
      title: "RRR – Reconceive, Rethink, Revise",
      content: (
        <div className="mb-24">
          <div className="flex flex-col gap-8">
            <div className="w-full group">
              <Link href="/event-calendar/RRR">
                <div className="relative w-full aspect-[2.5/1] transform transition-all duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/rrr.jpg"
                    alt="RRR Winners"
                    fill
                    className="rounded-xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
                  />
                </div>
              </Link>
            </div>
            <p className="text-neutral-300 text-sm md:text-base font-normal">
              A front-end development competition celebrating innovation and
              creativity. 41 teams competed across two rounds, with the top 20
              teams presenting their projects at the Library for a prize pool of
              ₹3,000.
            </p>
            <div className="relative backdrop-blur-md bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-white/10 p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="space-y-4">
                <h3 className="text-purple-300/90 text-base font-medium tracking-wide">
                  Winners
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center text-neutral-200 text-sm">
                    🥇{" "}
                    <span className="font-medium tracking-wide hover:text-purple-300 transition-colors">
                      Team Pixel
                    </span>
                  </div>
                  <div className="flex gap-3 items-center text-neutral-200 text-sm">
                    🥈{" "}
                    <span className="font-medium tracking-wide hover:text-purple-300 transition-colors">
                      Team BugBuster
                    </span>
                  </div>
                  <div className="flex gap-3 items-center text-neutral-200 text-sm">
                    🥉{" "}
                    <span className="font-medium tracking-wide hover:text-purple-300 transition-colors">
                      Team Drag & Drop
                    </span>
                  </div>
                </div>
                <Link
                  href="/event-calendar/RRR"
                  className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 backdrop-blur-lg"
                >
                  View Full Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Game of Code 2.0",
      content: (
        <div className="mb-24">
          <div className="flex flex-col gap-8">
            <div className="w-full group">
              <Link href="/event-calendar/GameOfCode">
                <div className="relative w-full aspect-[2.5/1] transform transition-all duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/code.jpg"
                    alt="Game of Code Event"
                    fill
                    className="rounded-xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
                  />
                </div>
              </Link>
            </div>
            <p className="text-neutral-300 text-sm md:text-base font-normal">
              Part of BVEST, DSC BVCOE and TechShuttle Society brought this
              two-stage coding challenge that tested technical expertise and
              problem-solving abilities of participants across multiple
              institutions.
            </p>
            <div className="relative backdrop-blur-md bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-white/10 p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="space-y-4">
                <h3 className="text-purple-300/90 text-base font-medium tracking-wide">
                  Winners
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center text-neutral-200 text-sm">
                    🥇{" "}
                    <span className="font-medium tracking-wide hover:text-purple-300 transition-colors">
                      Over Engineers
                    </span>
                  </div>
                  <div className="flex gap-3 items-center text-neutral-200 text-sm">
                    🥈{" "}
                    <span className="font-medium tracking-wide hover:text-purple-300 transition-colors">
                      Chote Miya - Bade Miya
                    </span>
                  </div>
                  <div className="flex gap-3 items-center text-neutral-200 text-sm">
                    🥉{" "}
                    <span className="font-medium tracking-wide hover:text-purple-300 transition-colors">
                      Hex Questers
                    </span>
                  </div>
                </div>
                <Link
                  href="/event-calendar/GameOfCode"
                  className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 backdrop-blur-lg"
                >
                  View Full Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default SocietyTimelineDemo;
