"use client";
import React from "react";
import { useState } from "react";

export default function CursorShadow({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [posX, setposX] = useState(0);
  const [posY, setposY] = useState(0);

  function moveShadow(e: React.MouseEvent) {
    setposX(posX + (e.pageX - posX));
    setposY(posY + (e.pageY - posY));
  }

  return (
    <div
      onMouseMove={moveShadow}
      className="fixed inset-0 z-40 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${posX}px ${posY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      {children}
    </div>
  );
}
