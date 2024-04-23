import React from "react";
import Section from "./Section";
import Link from "next/link";
import Tag from "./Tag";
import ProjectCard from "./ProjectCard";
import projectData from "../../public/data/projects.json";
import CustomLink from "./CustomLink";

function ProjectSection() {
  const projectItems = projectData.projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        url={project.url}
        tags={project.tags}
      />
    );
  });

  return (
    <Section title="Projects">
      <div className="flex gap-5 flex-wrap justify-between">{projectItems}</div>
      <div className="mt-12 flex">
        <CustomLink href="https://github.com/rajin98/" locale="mx-auto ">
          <Tag
            className=" hover:-translate-y-1 transition-all hover:bg-blue-dull rounded-md"
            icon="github"
            name="Check out my GitHub"
          />
        </CustomLink>
      </div>
    </Section>
  );
}

export default ProjectSection;
