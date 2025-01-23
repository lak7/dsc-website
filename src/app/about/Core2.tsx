"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TeamMember, teamMembers } from "@/constants/teamdata";

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const featuredMember = teamMembers.find((member) => member.featured);
  const regularMembers = teamMembers.filter((member) => !member.featured);

  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 tracking-tight">
          MEET OUR FACULTY INCHARGE
        </h1>

        <div className="flex flex-col items-center space-y-12">
          {/* Featured Team Member */}
          {featuredMember && (
            <div
              className="relative cursor-pointer group"
              onClick={() => setSelectedMember(featuredMember)}
            >
              <div className="relative">
                {/* Arch frame */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[calc(100%+2px)] h-[calc(100%+2px)] bg-white/10 rounded-t-full" />

                {/* Circle container */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-t-full overflow-hidden relative border-2 border-white/10">
                  <Image
                    src={featuredMember.imageUrl || "/placeholder.svg"}
                    alt={featuredMember.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-semibold text-lg">
                        {featuredMember.name}
                      </p>
                      <p className="text-gray-200 text-sm">
                        {featuredMember.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <h1 className="text-4xl font-bold text-white text-center mb-12 tracking-tight">
            MEET OUR CORE
          </h1>

          {/* Regular Team Members Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {regularMembers.map((member) => (
              <div
                key={member.id}
                className="relative cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative">
                  {/* Arch frame */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[calc(100%+2px)] h-[calc(100%+2px)] bg-white/10 rounded-t-full" />
                  {/* Circle container */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-t-full overflow-hidden relative border-2 border-white/10">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white font-semibold text-sm">
                          {member.name}
                        </p>
                        <p className="text-gray-200 text-xs">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Member Details Modal */}
        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogContent
            className=" sm:max-w-[425px]"
            style={{ backgroundColor: "cornflowerblue" }}
          >
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle className=" text-xxl font-bold">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="relative">
                    {/* Arch frame */}

                    {/* Circle container */}
                    <div className="relative w-32 h-32 mx-auto rounded-t-full overflow-hidden border-2 border-white/10">
                      <Image
                        src={selectedMember.imageUrl || "/placeholder.svg"}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="font-large text-primary text-white">
                      {selectedMember.role}
                    </h2>
                    <p className="mt-2 text-muted-foreground text-white">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
