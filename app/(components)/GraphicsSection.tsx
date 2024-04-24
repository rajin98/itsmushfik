import React from "react";
import Section from "./Section";
import imageData from "../../public/data/image-gallery.json";
import ImageGallery from "./ImageGallery";

function GraphicsSection() {
  return (
    <Section title="Graphics & 3D Designs">
      <ImageGallery images={imageData} />
      <div className="flex text-center flex-col my-6">
        <div className="">
          You might be expecting a Behance link here but I do not have an
          account there.
        </div>
        <div className="my-6">But you can check out this cool thing I did!</div>
        <iframe
          className="block mx-auto"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/4QqnvqhO7n8?si=gE2oLHnkE2afCZ9S`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Section>
  );
}

export default GraphicsSection;
