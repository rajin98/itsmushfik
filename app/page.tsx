import React from "react";
import Hero from "./(components)/Hero";
import Tag from "./(components)/Tag";
import projectData from "../public/data/projects.json";
import ProjectCard from "./(components)/ProjectCard";
import Section from "./(components)/Section";

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
        <div className="flex basis-1/4">{projectItems}</div>
      </Section>
    </React.Fragment>
  );
};

export default Dashboard;
