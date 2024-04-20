"use client";
import React from "react";
import { useState, useEffect } from "react";

const delay: number = 100;
const tags: string[] = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud Architect",
  "AI Enthusiast",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [forwardFlag, setForwardFlag] = useState(1);

  useEffect(() => {
    if (currentListIndex < tags.length) {
      if (
        currentTextIndex < tags[currentListIndex].length &&
        forwardFlag == 1
      ) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + tags[currentListIndex][currentTextIndex]
          );
          setCurrentTextIndex((prevIndex) => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else if (
        currentTextIndex >= tags[currentListIndex].length &&
        forwardFlag == 1
      ) {
        const timeout = setTimeout(() => {
          setForwardFlag(0);
          setCurrentTextIndex(tags[currentListIndex].length - 1);
        }, delay * 5);
        return () => clearTimeout(timeout);
      } else if (currentTextIndex >= 0 && forwardFlag == 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText.slice(0, -1));
          setCurrentTextIndex((prevIndex) => prevIndex - 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentListIndex(currentListIndex + 1);
          setCurrentTextIndex(0);
          setForwardFlag(1);
        }, delay * 3);
        return () => clearTimeout(timeout);
      }
    } else {
      setCurrentListIndex(0);
    }
  }, [currentListIndex, currentTextIndex, forwardFlag]);

  return (
    <h2 className="flex flex-col mt-12 font-sans font-extrabold min-h-72 bg-gradient-to-t from-blue p-8 rounded-3xl">
      <div className=" text-3xl text-white">I AM A...</div>
      <div className="text-6xl hero-text bg-clip-text pb-9">{currentText}</div>
    </h2>
  );
};

export default Hero;
