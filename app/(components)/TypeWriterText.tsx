"use client";
import React from "react";
import { useState, useEffect } from "react";

function TypeWriterText({
  className,
  lines,
  typeDelay,
  forwardDelay,
  backwardDelay,
}: TypeWriterTextProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [forwardFlag, setForwardFlag] = useState(1);

  useEffect(() => {
    if (currentListIndex < lines.length) {
      if (
        currentTextIndex < lines[currentListIndex].length &&
        forwardFlag == 1
      ) {
        const timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + lines[currentListIndex][currentTextIndex]
          );
          setCurrentTextIndex((prevIndex) => prevIndex + 1);
        }, typeDelay);
        return () => clearTimeout(timeout);
      } else if (
        currentTextIndex >= lines[currentListIndex].length &&
        forwardFlag == 1
      ) {
        const timeout = setTimeout(() => {
          setForwardFlag(0);
          setCurrentTextIndex(lines[currentListIndex].length - 1);
        }, forwardDelay);
        return () => {
          clearTimeout(timeout);
        };
      } else if (currentTextIndex >= 0 && forwardFlag == 0) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText.slice(0, -1));
          setCurrentTextIndex((prevIndex) => prevIndex - 1);
        }, typeDelay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentListIndex(currentListIndex + 1);
          setCurrentTextIndex(0);
          setForwardFlag(1);
        }, backwardDelay);
        return () => clearTimeout(timeout);
      }
    } else {
      setCurrentListIndex(0);
    }
  }, [
    currentListIndex,
    currentTextIndex,
    forwardFlag,
    forwardDelay,
    backwardDelay,
    lines,
    typeDelay,
  ]);

  return <div className={className}>{currentText}</div>;
}

export default TypeWriterText;
