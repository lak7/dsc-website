"use client";

import VideoBackground from "@/components/common/VideoBackground";
import EventDetails from "../EventDetails";

const RRR = () => {
  return (
    <div className="min-h-dvh bg-[#0A0A0F] text-white/90 overflow-y-auto font-light">
      <div className="fixed inset-0 z-0">
        <VideoBackground />
      </div>

      <main className="relative z-10 min-h-dvh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="mb-8">
            <a
              href="/event-calendar"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Timeline
            </a>
          </div>

          <EventDetails
            title="Design Sprint - UXthon"
            subtitle="Innovate, Design, Solve: A Hands-On UX Challenge"
            description="The DESIGN SPRINT UXTHON was a hands-on UX design competition where participants solved real-world problems using Google’s design sprint methodology. Guided by experts, they enhanced skills in user-centered design, teamwork, and pitching. With 20 teams participating, the event fostered creativity, innovation, and practical experience with industry tools.."
            highlights={[
              "Participants applied Google’s Design Sprint methodology to solve real-world problems through structured, time-bound challenges.",
              "Industry professionals Ankit Yadav and Garvit Singh shared insights on UX design, AR/VR technologies, and industry-standard tools..",
              "Participants gained hands-on experience with Figma, Adobe XD, and other tools to create user-centered, innovative design solutions.",
            ]}
            winners={[
              { position: "🥇", name: "Team Pixel", image: "/Uxthon1.jpg" },
              { position: "🥈", name: "Team BugBuster", image: "/Uxthon2.jpg" },
              {
                position: "🥉",
                name: "Team Drag & Drop",
                image: "/Uxthon3.jpg",
              },
            ]}
            closingNote="The DESIGN SPRINT UXTHON concluded successfully, leaving participants with valuable hands-on experience, enhanced creativity, and improved problem-solving skills. The event fostered collaboration, innovation, and practical knowledge of UX design tools and methodologies. Thanks to the participants, speakers, and organizers for making it a memorable and impactful experience!"
            reelLink="https://www.instagram.com/p/DGQcOeEySfW/"
          />
        </div>
      </main>
    </div>
  );
};

export default RRR;
