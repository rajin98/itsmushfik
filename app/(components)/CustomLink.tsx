"use client";

import React, { useContext } from "react";
import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { CursorContext } from "./CursorContextProvider";

function CustomLink(props: PropsWithChildren<CustomLinkProps>) {
  const { cursor, setCursor } = useContext(CursorContext);
  return (
    <Link
      className={"cursor-none " + props.className}
      href={props.href}
      target={props.target}
      onMouseEnter={() => setCursor("cursor-triangle")}
      onMouseLeave={() => setCursor("cursor-circle")}
    >
      {props.children}
    </Link>
  );
}

export default CustomLink;
