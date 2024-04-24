import React from "react";
import TimelineItem from "./TimelineItem";
import Tag from "./Tag";
import CustomLink from "./CustomLink";

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
        // onLeft={item.id % 2 == 1}
        isLast={item.id == itemData.length}
      />
    );
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 my-12">{items}</div>
      <CustomLink href="./data/Resume.pdf" target="_blank" className="mx-auto ">
        <Tag
          className="tag-btn transition-all bg-blue-dull"
          icon="readme"
          name="Psst! Here's My Resume"
        />
      </CustomLink>
    </div>
  );
}

export default Timeline;
