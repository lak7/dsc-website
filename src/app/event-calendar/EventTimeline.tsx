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
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            A front-end development competition celebrating innovation and
            creativity. 41 teams competed across two rounds, with the top 20
            teams presenting their projects at the Library for a prize pool of
            ₹3,000.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/event-calendar/RRR">
              <Image
                src="/rrr.jpg"
                alt="RRR Winners"
                width={500}
                height={500}
                className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
                🥇 Team Pixel
              </div>
              <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
                🥈 Team BugBuster
              </div>
              <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
                🥉 Team Drag & Drop
              </div>
              <Link
                href="/event-calendar/RRR"
                className="inline-block mt-4 text-blue-500 hover:text-blue-600 text-sm"
              >
                View Full Details →
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
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Part of BVEST, DSC BVCOE and TechShuttle Society brought this
            two-stage coding challenge that tested technical expertise and
            problem-solving abilities of participants across multiple
            institutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/event-calendar/GameOfCode">
              <Image
                src="/code.jpg"
                alt="Game of Code Event"
                width={500}
                height={500}
                className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] object-contain"
              />
            </Link>
            <div className="space-y-2">
              <div
                className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm 
              "
              >
                🥇 Over Engineers
              </div>
              <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
                🥈 Chote Miya - Bade Miya
              </div>
              <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
                🥉 Hex Questers
              </div>
              <Link
                href="/event-calendar/GameOfCode"
                className="inline-block mt-4 text-blue-500 hover:text-blue-600 text-sm"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Upcoming Events",
    //   content: (
    //     <div className="mb-24">
    //       <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    //         Stay tuned for more exciting events from DSC BVCOE! We're planning
    //         new challenges and learning opportunities.
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
    //           📅 Technical Workshops
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
    //           📅 Coding Competitions
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-300 text-xs md:text-sm">
    //           📅 Hackathons
    //         </div>
    //       </div>
    //       <Link
    //         href="/events/upcoming"
    //         className="inline-block text-blue-500 hover:text-blue-600 text-sm"
    //       >
    //         Check Our Event Calendar →
    //       </Link>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default SocietyTimelineDemo;
