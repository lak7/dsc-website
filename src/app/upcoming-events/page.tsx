"use client";
import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { VideoBackground6 } from "@/components/common/VideoBackground";

interface Event {
  title: string;
  tagline?: string;
  prizePool: string;
  prizeBreakdown?: string[];
  description: string;
  rounds?: string[];
  highlights?: string[];
}

const events: Event[] = [
  // {
  //   title: "Design Sprint Challenge",
  //   tagline: "Design. Build. Innovate!",
  //   prizePool: "₹5k",
  //   description:
  //     "A fast-paced design competition where participants tackle real-world problems by designing solutions in a limited time frame.",
  //   rounds: [
  //     "Ideation: Brainstorm and sketch solutions",
  //     "Prototype: Build low-fidelity prototype using Figma, Canva, or paper",
  //     "Presentation: Present design solution and explain process",
  //   ],
  //   highlights: [
  //     "Hands-on design experience",
  //     "Creative thinking under pressure",
  //     "Collaborative environment",
  //   ],
  // },
  {
    title: "Tech Knockout",
    tagline: "Rise as a Team",
    prizePool: "₹5k",
    description: "A team-based knockout competition with multiple rounds.",
    rounds: [
      "Tech Quiz - Teams answer rapid-fire questions",
      "Debugging Challenge - Find and fix code errors quickly",
      "Final Build - Teams create a small, innovative solution",
    ],
    highlights: [
      "Quick decision-making",
      "Effective communication",
      "Competitive spirit",
    ],
  },
  {
    title: "Technical Bingo",
    tagline: "TechTambola: The Grid Challenge",
    prizePool: "₹5k",
    description:
      "A fun twist on Tambola where participants mark tech-related terms on grids based on questions called out. Patterns like Full House, Rows, or Corners determine the winners.",
    highlights: [
      "Interactive gameplay",
      "Test tech knowledge playfully",
      "Exciting rewards",
    ],
  },
  {
    title: "Code Wars",
    tagline: "Compete. Code. Conquer!",
    prizePool: "₹5k",
    description:
      "A thrilling tech competition with coding and problem-solving challenges.",
    rounds: [
      "Tech Pictionary: Draw and guess tech-related terms",
      "Code Hunt: Solve a simple coding puzzle",
      "Quick Quiz: Answer rapid-fire tech trivia",
    ],
    highlights: [
      "Showcase coding prowess",
      "Stimulating problem-solving tasks",
      "Fun with tech challenges",
    ],
  },
  {
    title: "Hackathon",
    tagline: "CodeClash 2.0",
    prizePool: "₹5k",
    description: "An intensive coding marathon to build innovative solutions.",
    rounds: ["Tech Pictionary", "Judging", "Presentation"],
    highlights: [
      "Collaborate with like-minded peers",
      "Create impactful solutions",
      "Refine presentation skills",
    ],
  },
];

const EventCard = ({ event }: { event: Event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all"
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        {event.title}
      </h3>
      {event.tagline && (
        <p className="text-neutral-400 mt-1 italic">{event.tagline}</p>
      )}
      <div className="mt-2">
        <span className="text-emerald-400 font-semibold">Prize Pool: </span>
        <span className="text-neutral-200">{event.prizePool}</span>
      </div>
      <p className="mt-4 text-neutral-300">{event.description}</p>
      {event.rounds && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-purple-400">Rounds:</h4>
          <ul className="mt-2 list-disc list-inside text-neutral-300">
            {event.rounds.map((round, index) => (
              <li key={index}>{round}</li>
            ))}
          </ul>
        </div>
      )}
      {event.highlights && (
        <div className="mt-4 flex flex-wrap gap-2">
          {event.highlights.map((highlight, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Page = () => {
  return (
    <main className="min-h-screen bg-black text-white ">
      <VideoBackground6 />
      <HeroHighlight containerClassName="h-[15rem] pt-32">
        <div className="text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Upcoming Events
          </h1>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Join us for exciting technical events, competitions, and challenges.
          </p>
        </div>
      </HeroHighlight>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
