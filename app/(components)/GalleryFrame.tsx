import Image from "next/image";
import React from "react";

function GalleryFrame({ id, src, alt, className }: GalleryFrameProps) {
  return (
    <div
      className={`flex flex-col justify-center gallery-frame h-96 basis-[32%] bg-white ${className}`}
    >
      <Image
        src={src}
        alt={alt != undefined ? alt : ""}
        width={0}
        height={0}
        sizes="100vw"
        className=" w-full h-auto"
      />
    </div>
  );
}

export default GalleryFrame;
