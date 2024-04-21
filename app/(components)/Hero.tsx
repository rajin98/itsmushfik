"use client";
import React from "react";
import TypeWriterText from "./TypeWriterText";
import { maven } from "../(utilities)/fonts";

const tags: string[] = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud Architect",
  "ML Enthusiast",
];

const Hero = () => {
  return (
    <h2
      className={`flex text-center flex-col mt-[40vh] font-header ${maven.variable} font-extrabold min-h-72 p-8 rounded-3xl center-glow pointer-events-none before:pointer-events-none`}
    >
      <div className="text-5xl text-white">Hi! I am Mushfik,</div>
      <TypeWriterText
        className={"text-6xl hero-text bg-clip-text pb-9 after:content-['|'] "}
        lines={tags}
        typeDelay={100}
        forwardDelay={900}
        backwardDelay={400}
      />
    </h2>
  );
};

export default Hero;
