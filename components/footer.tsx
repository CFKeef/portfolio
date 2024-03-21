"use client";

import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex w-full flex-row justify-start items-center gap-4">
      <a href="https://github.com/CFKeef" className="hover:text-yellow">
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/patryckg/"
        className="hover:text-yellow"
      >
        <Linkedin />
      </a>
    </div>
  );
};
