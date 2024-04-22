import React from "react";
import Hero from "./(components)/Hero";
import Tag from "./(components)/Tag";
import projectData from "../public/data/projects.json";
import ProjectCard from "./(components)/ProjectCard";
import Section from "./(components)/Section";
import Link from "next/link";

const Dashboard = () => {
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
    <React.Fragment>
      <Hero />
      <Section title="Projects">
        <div className="flex gap-5 flex-wrap justify-between">
          {projectItems}
        </div>
        <div className="mt-12 flex">
          <Link
            href="https://github.com/rajin98/"
            className="mx-auto cursor-none"
          >
            <Tag
              className=" hover:-translate-y-1 transition-all hover:bg-blue-dull rounded-md"
              icon="github"
              name="Check out my GitHub"
            />
          </Link>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Dashboard;
