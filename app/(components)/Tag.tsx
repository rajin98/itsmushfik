import React from "react";
import Image from "next/image";

function Tag({ name, version, icon, color }: TagData) {
  color = color == undefined ? "white" : color;
  const iconElement =
    icon != undefined ? (
      <Image
        className="p-2 bg-black"
        width={32}
        height={32}
        src={`https://cdn.simpleicons.org/${icon}/${color}`}
        alt={icon}
      ></Image>
    ) : null;

  const versionElement =
    version != undefined ? (
      <div className="p-2 bg-blue-dull">{version}</div>
    ) : null;

  return (
    <div className="flex text-sm">
      {iconElement}
      <div className="py-2 pr-2 bg-black">{name}</div>
      {versionElement}
    </div>
  );
}

export default Tag;
