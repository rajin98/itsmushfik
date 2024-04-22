"use client";
import React from "react";
import TypeWriterText from "./TypeWriterText";
import { maven } from "../(utilities)/fonts";
import Image from "next/image";

const tags: string[] = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud Architect",
  "ML Enthusiast",
];

const Hero = () => {
  const year =
    new Date(Date.now()).getFullYear() -
    new Date("October 5 1998").getFullYear();

  return (
    <div className="h-screen">
      <h2
        className={`flex text-center flex-col pt-[45vh] font-header ${maven.variable} font-extrabold min-h-72 p-8 rounded-3xl center-glow pointer-events-none before:pointer-events-none`}
      >
        <div className="text-5xl text-white">Hi! I am Mushfik,</div>
        <TypeWriterText
          className={
            "text-6xl hero-text bg-clip-text pb-9 after:content-['|'] "
          }
          lines={tags}
          typeDelay={100}
          forwardDelay={900}
          backwardDelay={400}
        />
      </h2>

      <div className="mt-36 mb-6 text-center text-lg text-white-off animate-slide-up-in">
        Check out what I did in the {year} years of being on this Earth.
      </div>
      {/* <Image
        className="mx-auto animate-bounce"
        src={"/downarrow.svg"}
        alt="arrow"
        width={32}
        height={32}
      ></Image> */}
    </div>
  );
};

export default Hero;
