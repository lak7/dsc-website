import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Team {
  title: string; // The title of the team (e.g., "Heads", "Executives", "Volunteers")
  members: string[]; // Array of member names in the team
}

interface Teams {
  Heads: Team; // Specific structure for the "Heads" team
  Executives: Team; // Specific structure for the "Executives" team
  Volunteers: Team; // Specific structure for the "Volunteers" team
}

interface DepartmentDialogProps {
  title: string;
  description: string;
  teams: Teams;
  children: React.ReactNode;
}

export function DepartmentDialog({
  title,
  description,
  teams,
  children,
}: DepartmentDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}>{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-black/90 border border-gray-100 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <p className="text-base sm:text-xl font-medium my-2 sm:my-3 text-gray-300">
            {description}
          </p>
          <div className="flex flex-col w-full justify-between items-center">
            <figure className="w-full">
              <figcaption className="text-2xl sm:text-3xl font-semibold my-4 sm:my-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Heads
              </figcaption>
              <ul
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  teams.Heads.members.length > 2 ? "lg:grid-cols-3" : ""
                } gap-4 sm:gap-6 lg:gap-8`}
              >
                {teams.Heads.members?.map((head) => (
                  <li key={head} className="flex flex-col items-center group">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl w-full max-w-xs mx-auto">
                      <Image
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        src="/image.png"
                        alt={`${head}-image`}
                        width={400}
                        height={450}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-xl sm:text-2xl mt-3 sm:mt-4 font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      {head}
                    </p>
                  </li>
                ))}
              </ul>
            </figure>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
              <figure className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-blue-950/20 border border-blue-500/20">
                <figcaption className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Executives
                </figcaption>
                <ul className="space-y-2 sm:space-y-3">
                  {teams.Executives.members?.map((Exc) => (
                    <li
                      key={Exc}
                      className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
                    >
                      {Exc}
                    </li>
                  ))}
                </ul>
              </figure>

              <figure className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-pink-950/20 border border-pink-500/20">
                <figcaption className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                  Volunteers
                </figcaption>
                <ul className="space-y-2 sm:space-y-3">
                  {teams.Volunteers.members?.map((Vol) => (
                    <li
                      key={Vol}
                      className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
                    >
                      {Vol}
                    </li>
                  ))}
                </ul>
              </figure>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
