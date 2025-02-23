"use client";

import {
  Brain,
  Code,
  Film,
  Flame,
  Laptop,
  Megaphone,
  PenTool,
  Users,
} from "lucide-react";
import { DepartmentCard } from "./department-card";
import { DepartmentDialog } from "./department-dialog";
import { VideoBackground6 } from "@/components/common/VideoBackground";

const departments = [
  {
    title: "DevOps",
    description:
      "Streamlining operations with efficient systems and processes to ensure smooth execution.",
    color: "#f97316",
    icon: <Laptop className="h-5 w-5 text-orange-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Tanishq Raj"],
      },
      Executives: {
        title: "Executives",
        members: ["Ishika", "Tanishq", "Ujjawal", "Aarjav Jain"],
      },
      Volunteers: {
        title: "Volunteers",
        members: ["Shazan Hussain Zaidi", "Samvid Chawla", "Vaibhav Sharma"],
      },
    },
  },
  {
    title: "Full Stack Development",
    description:
      "The backbone of technological innovation, creating robust systems and platforms.",
    color: "#ec4899",
    icon: <Code className="h-5 w-5 text-pink-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Archit Jain"],
      },
      Executives: {
        title: "Executives",
        members: [
          "Dhruv Roy",
          "Lakshay Jain",
          "Rishi Kumar Nayak",
          "Vasundhra Yadav",
          "Ishika Gupta",
        ],
      },
      Volunteers: {
        title: "Volunteers",
        members: ["Kaushal", "Saparya Jagannath", "Suhavi Jain"],
      },
    },
  },

  {
    title: "Machine Learning",
    description:
      "Exploring cutting-edge AI and analytics to support data-driven decision-making.",
    color: "#0ea5e9",
    icon: <Brain className="h-5 w-5 text-sky-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Aditya Batra"],
      },
      Executives: {
        title: "Executives",
        members: ["Aditya Yadav", "Mukul Kumar"],
      },
      Volunteers: {
        title: "Volunteers",
        members: [
          "Devanshu Anand",
          "Lakshya Saxena",
          "Nityam Gupta",
          "Nitin Kumar Singh",
          "Piyush Baweja",
        ],
      },
    },
  },
  {
    title: "Content and Documentation",
    description:
      "Responsible for creating engaging content and maintaining accurate records for seamless communication.",
    color: "#22c55e",
    icon: <PenTool className="h-5 w-5 text-green-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Anisha Garg", "Manasi S Pillai"],
      },
      Executives: {
        title: "Executives",
        members: [
          "Anant Sharma",
          "Aryan Kumar",
          "Manik Jindal",
          "Niharika",
          "Shaivi Goyal",
        ],
      },
      Volunteers: {
        title: "Volunteers",
        members: ["Abhilasha Negi", "Pritha", "Saamiya", "Saksham Chandela"],
      },
    },
  },
  {
    title: "Design and Video Editing",
    description:
      "Creating compelling visuals and multimedia content to capture and share the essence of projects.",
    color: "#ef4444",
    icon: <Film className="h-5 w-5 text-red-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Faraz Khan", "Mehul Gupta", "Swechchha Patel"],
      },
      Executives: {
        title: "Executives",
        members: [
          "Aditya Tyagi",
          "Anjali Mittal",
          "Chahal",
          "Chhavi Gupta",
          "Dhruv Kashyap",
          "Himanshu Singh",
          "Nishtha Agarwal",
          "Parth Ahuja",
          "Piyush Chauhan",
          "Pratyush Kumar Rai",
          "Satpal",
          "Shubham",
        ],
      },
      Volunteers: {
        title: "Volunteers",
        members: ["Aryan Tyagi", "Pranay Chaudhary"],
      },
    },
  },
  {
    title: "Publicity and Social Media",
    description:
      "Enhancing the team's presence through impactful social media campaigns and publicity.",
    color: "#eab308",
    icon: <Megaphone className="h-5 w-5 text-yellow-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Anshul Gupta", "Vidhi Setiya", "Uditya Raj Singh"],
      },
      Executives: {
        title: "Executives",
        members: [
          "Amit Kumar",
          "Asmit Patel",
          "Jatin Prabhakar",
          "Mukul",
          "Nilesh Bassi",
          "Sagar Kumar Jha",
          "Sambhav",
          "Vansh Tandon",
        ],
      },
      Volunteers: {
        title: "Volunteers",
        members: [
          "Aditya Tyagi",
          "Ayush Vibhor",
          "Deepti Gautam",
          "Md Yusuf Masood",
          "Rakshit Shokeen",
          "Rohit Kumar",
          "Sparsh Bhardwaj",
          "Sahil Garg",
          "Vivek Singh",
        ],
      },
    },
  },
  {
    title: "Sponsorship",
    description:
      "Building and managing relationships with sponsors to ensure financial and resource support",
    color: "#06b6d4",
    icon: <Flame className="h-5 w-5 text-cyan-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Pari Gupta", "Kartik Gupta"],
      },
      Executives: {
        title: "Executives",
        members: [
          "Aagam Jain",
          "Bhanu Prakash",
          "Daksh Chopra",
          "Lakshay Kaushik",
          "Lakshita Verma",
          "Shaad Abdullah",
          "Shyam Agarwal",
          "S Siddhant",
          "Varun Kaushik",
          "Yash Nagpal",
          "Yashika Gandhi",
        ],
      },
      Volunteers: {
        title: "Volunteers",
        members: [],
      },
    },
  },
  {
    title: "Event Management",
    description: "Planning and executing events with precision and creativity.",
    color: "#8b5cf6",
    icon: <Users className="h-5 w-5 text-purple-500" />,
    teams: {
      Heads: {
        title: "Heads",
        members: ["Aryan Tyagi", "Bhavisya Ratna"],
      },
      Executives: {
        title: "Executives",
        members: [
          "Ayush Bansal",
          "Harsh",
          "Harsh Sharma",
          "Manav Manhas",
          "Om Tripathi",
          "Shivansh Suryan",
        ],
      },
      Volunteers: {
        title: "Volunteers",
        members: [
          "Devika Malhotra",
          "Govind Gupta",
          "Krish Gupta",
          "Shiv Arora",
          "Vanshika Bansal",
        ],
      },
    },
  },
];

export default function DepartmentsGrid() {
  return (
    <div className="min-h-dvh bg-[#0A0A0F] text-white/90 overflow-y-auto font-light">
      <VideoBackground6 />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="z-40 w-full">
            <div className="mt-24 px-2">
              <h1 className="special-font hero-heading text-blue-100 text-left sm:text-nowrap">
                A<b>BO</b>UT-US <br />
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="min-h-screen bg-black p-6 md:p-8 lg:p-12 !z-50">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4 z-50">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl  text-white ">
              Our Departments
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Meet the teams that make our society thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4  gap-12">
            {departments.map((dept) => (
              <DepartmentDialog
                key={dept.title}
                title={dept.title}
                description={dept.description}
                teams={dept.teams}
              >
                <DepartmentCard
                  title={dept.title}
                  description={dept.description}
                  memberCount={Object.values(dept.teams).reduce(
                    (acc, team) => acc + team.members.length,
                    0
                  )}
                  color={dept.color}
                  icon={dept.icon}
                />
              </DepartmentDialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
