import React from "react";
import ScrollAnimation from "./ScrollAnimation";

function TimelineItem(props: TimelineItemProps) {
  const subtitle =
    props.subtitle != undefined ? (
      <h5 className={`text-lg mb-2`}>{props.subtitle}</h5>
    ) : null;
  const startDate =
    props.startDate != undefined ? (
      <ScrollAnimation
        delay={0}
        duration={1}
        direction={props.onLeft ? "left" : "right"}
        className={`flex-1 hover:-translate-y-1 transition-all ${
          props.onLeft ? "text-left" : "text-right"
        } font-bold text-xl`}
      >
        {props.startDate}
      </ScrollAnimation>
    ) : null;

  const description =
    props.description != undefined ? (
      <div
        className={`text-base text-white-off pb-5 pt-3`}
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
    ) : null;

  const bar =
    props.isLast != true ? (
      <div className="mx-[1px] flex-1 bg-white-off rounded-md"></div>
    ) : null;

  return (
    <div
      className={`flex gap-6 timeline-item ${
        props.onLeft ? "flex-row-reverse" : ""
      }`}
    >
      {startDate}
      <div className="flex flex-col basis-2 flex-shrink-0 flex-grow-0 gap-5 mt-3">
        <div className="flex-grow-0  flex-shrink-0 rounded-full basis-2 bg-white-off"></div>
        {bar}
      </div>
      <ScrollAnimation
        delay={0.5}
        duration={1}
        direction={props.onLeft ? "right" : "left"}
        className={`flex-1 flex flex-col hover:-translate-y-1 transition-all ${
          props.onLeft ? "text-right" : "text-left"
        }`}
      >
        <h4 className={`text-xl font-bold mb-1`}>{props.title}</h4>
        {subtitle}
        {description}
      </ScrollAnimation>
    </div>
  );
}

export default TimelineItem;
