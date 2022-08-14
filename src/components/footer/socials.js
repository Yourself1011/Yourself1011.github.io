import React from "react";
import { BsGithub, BsStackOverflow, BsEnvelope } from "react-icons/bs";
import "./socials.scss";

const Socials = () => {
  const socials = [
    {
      icon: BsGithub,
      url: "https://github.com/Yourself1011",
      color: "#161b22"
    },
    {
      icon: BsStackOverflow,
      url: "https://stackoverflow.com/users/11558361/yourself1011",
      color: "#f48024"
    },
    { icon: BsEnvelope, url: "mailto:daniel.zha@pm.me", color: "#bb001b" }
  ];
  return (
    <div id="footerSocials">
      {socials.map((s) => (
        <a
          href={s.url}
          target="_blank"
          rel="noreferrer"
          style={{ "--color": s.color }}
        >
          <s.icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
