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

interface TeamSection {
  title: string;
  members: string[];
}

interface DepartmentDialogProps {
  title: string;
  description: string;
  teams: TeamSection[];
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
      <DialogContent className="sm:max-w-[425px] bg-black/90 border border-gray-800 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <p className="text-sm text-gray-400 mb-4">{description}</p>
          <div className="space-y-4">
            {teams.map((team) => (
              <div key={team.title}>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">
                  {team.title}
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {team.members.map((member) => (
                    <div
                      key={member}
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {member}
                    </div>
                  ))}
                </div>
                <Separator className="my-2 bg-gray-800" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
