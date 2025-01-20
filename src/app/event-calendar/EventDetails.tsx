"use client";

import { Card } from "@chakra-ui/react/card";
import { FC } from "react";

type EventDetailsProps = {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  winners?: { position: string; name: string }[];
  closingNote?: string;
  reelLink?: string;
};

const EventDetails: FC<EventDetailsProps> = ({
  title,
  subtitle,
  description,
  highlights,
  winners,
  closingNote,
  reelLink,
}) => {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          {title}
        </h1>
        <p className="text-xl text-gray-400 italic">{subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed text-gray-100 my-4">
        {description}
      </p>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="space-y-4 mt-8">
          <h2 className="text-3xl font-bold text-purple-400">
            Event Highlights
          </h2>
          <ul className="space-y-3 text-gray-300">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-400 mr-2">●</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Winners Section */}
      {winners && winners.length > 0 && (
        <div className="space-y-4 mt-8">
          <h2 className="text-3xl font-bold text-purple-400">Winners</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {winners.map((winner, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-yellow-500/20 to-transparent border-yellow-500/20"
              >
                <div className="text-4xl mb-2">{winner.position}</div>
                <div className="font-bold">{winner.name}</div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Closing Note */}
      {closingNote && (
        <Card className="p-6 bg-gray-900/50 border-purple-500/20 mt-8">
          <p className="text-gray-700">{closingNote}</p>
        </Card>
      )}

      {/* Instagram Link */}
      {reelLink && (
        <div className="flex justify-center mt-8">
          <a
            href={reelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-purple-500/20 px-4 py-2 rounded hover:border-purple-500 hover:text-purple-400 transition-colors"
          >
            <span>Watch Event Reel</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
