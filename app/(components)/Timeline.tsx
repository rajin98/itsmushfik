import React from "react";
import TimelineItem from "./TimelineItem";

function Timeline({ itemData }: TimelineProps) {
  const items = itemData.map((item) => {
    return (
      <TimelineItem
        key={item.id}
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        description={item.description}
        startDate={item.startDate}
        endDate={item.endDate}
        onLeft={item.id % 2 == 1}
        isLast={item.id == itemData.length}
      />
    );
  });

  return <div className="flex flex-col gap-3">{items}</div>;
}

export default Timeline;
