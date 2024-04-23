import React from "react";
import Hero from "./(components)/Hero";
import timelineData from "../public/data/timeline.json";
import Section from "./(components)/Section";
import Timeline from "./(components)/Timeline";
import ProjectSection from "./(components)/ProjectSection";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Hero />
      <span id="after-hero" />
      <Timeline itemData={timelineData} />
      <ProjectSection />
      <Section title="Graphics Design"></Section>
    </React.Fragment>
  );
};

export default Dashboard;
