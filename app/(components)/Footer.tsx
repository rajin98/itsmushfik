import React from "react";
import CustomLink from "./CustomLink";
import Image from "next/image";

const socials = {
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/_rajin99",
  linkedin: "https://www.linkedin.com/in/mushfik-rahman/",
  instagram: "https://www.instagram.com/rajin99/",
  gmail: "mailto:mushfikrahman416@gmail.com",
};

const Footer = () => {
  const socialLinks = Object.entries(socials).map(([icon, link]) => {
    return (
      <CustomLink key={icon} href={link}>
        <Image
          src={`https://cdn.simpleicons.org/${icon}/eee`}
          alt={icon}
          width={32}
          height={32}
        />
      </CustomLink>
    );
  });

  return (
    <div className=" bg-[#222] flex  justify-center rounded-t-lg gap-8 py-8">
      {socialLinks}
    </div>
  );
};

export default Footer;
