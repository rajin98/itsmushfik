"use client";
import React from "react";
import { useState } from "react";
import useMousePosition from "../(utilities)/useMousePosition";

export default function CircleCursor() {
  const mousePosition = useMousePosition();

  return (
    <div
      className="fixed z-40 rounded-full border-solid border-2 border-white w-5 h-5 pointer-events-none"
      style={{
        top: `${mousePosition.y - 10}px`,
        left: `${mousePosition.x - 10}px`,
      }}
    />
  );
}
