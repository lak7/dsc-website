import Features from "@/components/Features";
import Home from "@/components/Home";
import { main } from "framer-motion/client";
import React from "react";
import TeamGrid from "./about/Core2";

const Page = () => {
  return (
    <main>
      <Home />
      <Features />
      <TeamGrid/>
    </main>
  );
};

export default Page;
