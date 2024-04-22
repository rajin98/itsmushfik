import React from "react";

function TimelineItem(props: TimelineItemProps) {
  const subtitle =
    props.subtitle != undefined ? (
      <h5
        className={`text-lg mb-2 ${props.onLeft ? "text-right" : "text-left"}`}
      >
        {props.subtitle}
      </h5>
    ) : null;
  const startDate =
    props.startDate != undefined ? (
      <div
        className={`flex-1 ${
          props.onLeft ? "text-left" : "text-right"
        } font-bold text-xl`}
      >
        {props.startDate}
      </div>
    ) : null;

  const description =
    props.description != undefined ? (
      <div
        className={`text-base text-white-off ${
          props.onLeft ? "text-right" : "text-left"
        }`}
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
      <div className="flex-1 flex flex-col">
        <h4
          className={`text-xl font-bold mb-1 ${
            props.onLeft ? "text-right" : "text-left"
          }`}
        >
          {props.title}
        </h4>
        {subtitle}
        {description}
      </div>
    </div>
  );
}

export default TimelineItem;
