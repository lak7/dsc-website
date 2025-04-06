"use client";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

const EventDetails = ({ title, subtitle, description, highlights, winners }) => {
  const mainWinners = winners.slice(0, 3);
  const extraWinners = winners.slice(3);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-lg mt-2 text-white/80">{subtitle}</p>
      </div>

      <p className="text-white/70 max-w-3xl">{description}</p>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-orange-400">
          <FaTrophy className="text-yellow-400" /> Winners
        </h2>

        {/* 🥇 Top 3 Winners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mainWinners.map((winner, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center backdrop-blur-md border border-white/10"
            >
              <div className="text-5xl mb-2">{winner.position}</div>
              {winner.image && winner.image !== "#" && (
                <Image
                  src={winner.image}
                  alt={winner.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover mb-2"
                />
              )}
              <h3 className="text-lg font-medium text-white">{winner.name}</h3>
            </div>
          ))}
        </div>

        {/* 👥 TechBola Participants Section */}
        {extraWinners.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-white text-center">
              TechBola Participants
            </h3>
            <div className="flex justify-center">
              <div className="bg-white/5 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center backdrop-blur-md border border-white/10 w-[250px]">
                {extraWinners[0].image && extraWinners[0].image !== "#" && (
                  <Image
                    src={extraWinners[0].image}
                    alt={extraWinners[0].name}
                    width={160}
                    height={160}
                    className="rounded-lg object-cover mb-3"
                  />
                )}
                <h3 className="text-lg font-medium text-white">{extraWinners[0].name}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
