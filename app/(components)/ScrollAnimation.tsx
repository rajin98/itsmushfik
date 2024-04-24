"use client";
import React, { useEffect, PropsWithChildren, useRef, useState } from "react";

function ScrollAnimation(props: PropsWithChildren<ScrollAnimationProps>) {
  const style = {
    animation: `${props.duration}s ease-in ${props.delay}s 1 normal none running slidein-${props.direction}`,
  };
  const delay = props.delay * 1001;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [opacity, setOpacity] = useState("opacity-0");
  const ref = useRef(null);

  // I fucking hate this fuck this pieece of tshi
  useEffect(() => {
    console.log("observer created");

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting == true && isIntersecting == false) {
        console.log("element observed");
        setIsIntersecting(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current!);
    return () => {};
  }, []);

  useEffect(() => {
    if (isIntersecting == true) {
      const timer = setTimeout(() => setOpacity("opacity-1"), delay);
      return () => {
        clearTimeout(timer);
      };
    }
    return () => {};
  }, [isIntersecting]);

  return (
    <div
      className={`${props.className} ${opacity}`}
      ref={ref}
      style={isIntersecting ? style : {}}
    >
      {props.children}
    </div>
  );
}
export default ScrollAnimation;
