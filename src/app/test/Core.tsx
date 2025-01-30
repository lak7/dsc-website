import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CoreTeam } from "@/constants/teamdata";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: `${CoreTeam.members[0].description}`,
      name: `${CoreTeam.members[0].name}`,
      designation: `${CoreTeam.members[0].role}`,
      src: "/build.jpg",
    },
    {
      quote: `${CoreTeam.members[1].description}`,
      name: `${CoreTeam.members[1].name}`,
      designation: `${CoreTeam.members[1].role}`,
      src: "/code.png",
    },
    {
      quote: `${CoreTeam.members[2].description}`,
      name: `${CoreTeam.members[2].name}`,
      designation: `${CoreTeam.members[2].role}`,
      src: "/connect.jpg",
    },
    {
      quote: `${CoreTeam.members[3].description}`,
      name: `${CoreTeam.members[3].name}`,
      designation: `${CoreTeam.members[3].role}`,
      src: "/file.jpg",
    },
    {
      quote: `${CoreTeam.members[4].description}`,
      name: `${CoreTeam.members[4].name}`,
      designation: `${CoreTeam.members[4].role}`,
      src: "/learn.jpg",
    },
    {
      quote: `${CoreTeam.members[5].description}`,
      name: `${CoreTeam.members[5].name}`,
      designation: `${CoreTeam.members[5].role}`,
      src: "/learn.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
