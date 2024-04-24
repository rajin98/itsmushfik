import Image from "next/image";
import React from "react";
import GalleryFrame from "./GalleryFrame";

function ImageGallery({ images, className }: ImageGalleryProps) {
  const frames = images.map((image) => {
    return (
      <GalleryFrame
        key={image.id}
        id={image.id}
        src={image.src}
        alt={image.alt}
      />
    );
  });

  return <div className={`flex flex-wrap gap-4 ${className}`}>{frames}</div>;
}

export default ImageGallery;
