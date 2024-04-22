import Link from "next/link";
import React from "react";
import "next/font/google";
import Tag from "./Tag";

function ProjectCard({ title, description, url, tags }: ProjectCardProps) {
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
    <div className="flex-shrink-0 basis-[45%] md:basis-[30%] project-card">
      <Link href={url} target="_blank" className="h-full flex flex-col ">
        <h4 className="mb-3">{title}</h4>
        <p className="flex-1 max-h-24 text-justify text-ellipsis">
          {description}
        </p>
        <div className="my-4 flex gap-1 ">{tagList}</div>
      </Link>
    </div>
  );
}

export default ProjectCard;
