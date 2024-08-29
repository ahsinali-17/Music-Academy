import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full flex flex-col justify-center items-center rounded-md relative overflow-hidden mx-auto">
  
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

         <div className="relative z-10 text-center w-full py-10 md:py-0 p-4">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your music
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href="/courses">Explore Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
