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
            />
          );
        })
      : null;

  return (
    <div className="basis-1/4 hover:-translate-y-1 hover:text-blue-light hover: transition-all ease-in-out">
      <Link
        href={url}
        target="_blank"
        className="h-full justify-between hover:cursor-none flex flex-col "
      >
        <h4 className="text-blue text-xl font-bold mb-3 flex-1">{title}</h4>
        <p className=" text-white-off text-ellipsis overflow-hidden flex-none max-h-24">
          {description}
        </p>
        <div className=" my-4 flex gap-1 ">{tagList}</div>
      </Link>
    </div>
  );
}

export default ProjectCard;
