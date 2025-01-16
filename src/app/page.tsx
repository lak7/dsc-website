import Features from "@/components/Features";
import Home from "@/components/Home";
import { main } from "framer-motion/client";
import React from "react";

const Page = () => {
  return (
    <main>
      <Home />
      <Features />
    </main>
  );
};

export default Page;
