import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function SocietyTimelineDemo() {
  const data = [
    {
      title: "Design Sprint - UXthon",
      content: (
        <div className="mb-24">
          <div className="flex flex-col gap-8">
            <div className="w-full group">
              <Link href="/event-calendar/RRR">
                <div className="relative w-full aspect-[3/1] transform transition-all duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/Uxthon.jpg"
                    alt="RRR Winners"
                    fill
                    className="rounded-xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
                  />
                </div>
              </Link>
            </div>
            <h5 className="text-neutral-290 text-sm md:text-base font-normal">
              The logo design competition challenged participants to create
              impactful logos in 1 hour, reflecting themes like smart nutrition
              tracking and AI-driven travel planning. Designs showcased
              creativity, innovation, and attention to detail.
            </h5>
            <div className="flex justify-center">
              <Link
                href="/event-calendar/Uxthon"
                className="inline-flex items-center gap-2 py-2.5 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 backdrop-blur-lg"
              >
                View More
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
      ),
    },
    {
      title: "RRR – Reconceive, Rethink, Revise",
      content: (
        <div className="mb-24">
          <div className="flex flex-col gap-8">
            <div className="w-full group">
              <Link href="/event-calendar/RRR">
                <div className="relative w-full aspect-[3/1] transform transition-all duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/rrr.jpg"
                    alt="RRR Winners"
                    fill
                    className="rounded-xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
                  />
                </div>
              </Link>
            </div>
            <h5 className="text-neutral-290 text-sm md:text-base font-normal">
              A front-end development competition celebrating innovation and
              creativity.41 teams competed across two rounds, with the top 20
              teams presenting their projects at the Library for a prize pool of
              ₹3,000.
            </h5>
            <div className="flex justify-center">
              <Link
                href="/event-calendar/RRR"
                className="inline-flex items-center gap-2 py-2.5 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 backdrop-blur-lg"
              >
                View More
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
      ),
    },
    {
      title: "Game of Code 2.0",
      content: (
        <div className="mb-24">
          <div className="flex flex-col gap-8">
            <div className="w-full group">
              <Link href="/event-calendar/GameOfCode">
                <div className="relative w-full aspect-[3/1] transform transition-all duration-300 group-hover:scale-[1.02]">
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
            <div className="flex justify-center">
              <Link
                href="/event-calendar/GameOfCode"
                className="inline-flex items-center gap-2 py-2.5 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 backdrop-blur-lg"
              >
                View More
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
