import React from "react";
import Image from "next/image";

function Tag({ name, version, icon, iconUrl, className }: TagData) {
  if (icon != undefined && iconUrl == undefined) {
    iconUrl = `https://cdn.simpleicons.org/${icon}/eee`;
  }

  const iconElement =
    iconUrl != undefined ? (
      <Image
        className="py-2 pl-2 text-white"
        height={28}
        width={28}
        src={iconUrl}
        alt={icon ? icon : ""}
      ></Image>
    ) : null;

  const versionElement =
    version != undefined ? (
      <div className="p-2 bg-blue-dull">{version}</div>
    ) : null;

  return (
    <div className={"flex text-sm bg-black " + className}>
      {iconElement}
      <div className="p-2 ">{name}</div>
      {versionElement}
    </div>
  );
}

export default Tag;
