import React from "react";
import { PropsWithChildren } from "react";
import { maven } from "../(utilities)/fonts";

function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <section className="my-4">
      <h3 className={`my-5 text-3xl font-bold font-header ${maven.variable}`}>
        {props.title}
      </h3>
      {props.children}
    </section>
  );
}

export default Section;
