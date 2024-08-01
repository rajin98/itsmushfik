"use client";
import React, { useRef } from "react";
import TypeWriterText from "./TypeWriterText";
import { maven } from "../(utilities)/fonts";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const tags: string[] = [
  "Software Engineer",
  "FullStack Developer",
  "Cloud Architect",
  "ML Enthusiast",
];

const Hero = () => {
  const postHero = useRef();
  const year =
    new Date(Date.now()).getFullYear() -
    new Date("October 5 1998").getFullYear();

  return (
    <div className="h-screen">
      <h2
        className={`flex text-center flex-col pt-[45vh] font-header ${maven.variable} font-extrabold min-h-72 p-8 rounded-3xl center-glow pointer-events-none before:pointer-events-none`}
      >
        <div className="text-2xl md:text-3xl lg:text-5xl text-white">
          Hi! I am Mushfik,
        </div>
        <TypeWriterText
          className={
            "text-2xl md:text-3xl lg:text-5xl hero-text bg-clip-text pb-9 after:content-['|'] "
          }
          lines={tags}
          typeDelay={100}
          forwardDelay={900}
          backwardDelay={400}
        />
      </h2>

      <div className=" mt-48 mb-6 text-center text-base text-white-off animate-slide-up-in">
        Check out what I did in the {year} years of being on this Earth.
      </div>
      <ScrollAnimation duration={1} delay={1.5} direction="down">
        <Image
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="mx-auto animate-bounce"
          src={"./downarrow.svg"}
          alt="arrow"
          width={32}
          height={32}
        ></Image>
      </ScrollAnimation>
    </div>
  );
};

export default Hero;
