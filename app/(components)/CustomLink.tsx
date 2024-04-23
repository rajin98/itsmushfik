"use client";

import React, { useContext } from "react";
import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { CursorContext } from "./CursorContextProvider";

function CustomLink(props: PropsWithChildren<LinkProps>) {
  const { cursor, setCursor } = useContext(CursorContext);
  return (
    <Link
      className={"cursor-none " + props.locale}
      href={props.href}
      target="_blank"
      onMouseEnter={() => setCursor("cursor-triangle")}
      onMouseLeave={() => setCursor("cursor-circle")}
    >
      {props.children}
    </Link>
  );
}

export default CustomLink;
