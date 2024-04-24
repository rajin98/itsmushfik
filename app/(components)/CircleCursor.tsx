"use client";
import React, { useContext } from "react";
import useMousePosition from "../(utilities)/useMousePosition";
import { CursorContext } from "./CursorContextProvider";

export default function CircleCursor() {
  const mousePosition = useMousePosition();
  const { cursor, setCursor } = useContext(CursorContext);

  return (
    <div
      className={
        "fixed z-40 pointer-events-none before:transition-transform " + cursor
      }
      style={{
        top: `${mousePosition.y - 10}px`,
        left: `${mousePosition.x - 10}px`,
      }}
    />
  );
}
