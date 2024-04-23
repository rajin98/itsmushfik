import React from "react";
import { PropsWithChildren } from "react";
import { maven } from "../(utilities)/fonts";

function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <section className="my-16 ">
      <h3 className={`mb-8 text-3xl font-bold font-header ${maven.variable}`}>
        {props.title}
      </h3>
      {props.children}
    </section>
  );
}

export default Section;
