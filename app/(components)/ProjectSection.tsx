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
        id={project.id}
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
        <CustomLink
          href="https://github.com/rajin98/"
          target="_blank"
          className="mx-auto "
        >
          <Tag
            className="tag-btn transition-all bg-blue-dull"
            icon="github"
            name="Check out my GitHub"
          />
        </CustomLink>
      </div>
    </Section>
  );
}

export default ProjectSection;
