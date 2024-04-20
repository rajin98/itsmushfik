import Link from "next/link";
import React from "react";

const nav_list: { [id: string]: string } = {
  home: "./",
  projects: "./projects",
  blog: "./blog",
  contact: "./contact",
};

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10">
      <ul className="flex justify-end">
        {Object.keys(nav_list).map((k, i) => (
          <li key={i} className="nav-link">
            <Link href={nav_list[k]}>{k}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
