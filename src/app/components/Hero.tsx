import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Main from "./Main";
import MedScheduleMain from "./MedScheduleMain";

const Hero = () => {
  return (
    <main
      className="hero h-full w-full overflow-hidden py-20"
      style={{ background: "linear-gradient(to right, #A6D71C, #2E6A47)" }}
    >
      <div className="flex flex-col">
        <div className="hero-1 my-[150px]">
          <Main />
        </div>

        <div className="hero-2 my-[150px] ">
          <MedScheduleMain />
        </div>
      </div>
    </main>
  );
};

export default Hero;
