import Link from "next/link";
import React from "react";
import "next/font/google";
import Tag from "./Tag";
import CustomLink from "./CustomLink";
import ScrollAnimation from "./ScrollAnimation";

function ProjectCard({ id, title, description, url, tags }: ProjectCardProps) {
  let tagList =
    tags != null
      ? tags.map((tag) => {
          return (
            <Tag
              key={tag.name}
              name={tag.name}
              version={tag.version}
              icon={tag.icon}
              iconUrl={tag.iconUrl}
            />
          );
        })
      : null;

  return (
    <ScrollAnimation
      delay={((id + 2) % 3) * 0.2}
      duration={1}
      direction="up"
      className="flex-shrink-0 basis-[45%] md:basis-[30%] project-card"
    >
      <CustomLink href={url} target="_blank" className="h-full flex flex-col ">
        <h4 className="mb-3">{title}</h4>
        <p className="flex-1 max-h-24 text-justify text-ellipsis">
          {description}
        </p>
        <div className="my-4 flex gap-1 ">{tagList}</div>
      </CustomLink>
    </ScrollAnimation>
  );
}

export default ProjectCard;
