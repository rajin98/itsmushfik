"use client";
import React, { useEffect, PropsWithChildren, useRef, useState } from "react";

function ScrollAnimation(props: PropsWithChildren<ScrollAnimationProps>) {
  const style = {
    animation: `${props.duration}s ease-in ${props.delay}s 1 normal forwards running slidein-${props.direction}`,
  };
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!isIntersecting) {
        setIntersecting(entry.isIntersecting);
      }
    });

    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
    };
  }, [ref, isIntersecting]);

  return (
    <div
      className={props.className + " opacity-0"}
      ref={ref}
      style={isIntersecting ? style : {}}
    >
      {props.children}
    </div>
  );
}
export default ScrollAnimation;
