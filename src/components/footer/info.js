import React from "react";
import "./info.scss";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Info = () => {
  return (
    <div id="footer-info">
      <p id="copyright">© Daniel Zhang 2022</p>
      <a
        href="https://drive.google.com/file/d/1KUxfa9MNOW0ZjcVuMHvlZE1-GJHGwcQt/view"
        id="footer-resume"
      >
        Resume <BsBoxArrowUpRight />
      </a>
      <a href="https://github.com/Yourself1011/Yourself1011.github.io">
        Source <BsBoxArrowUpRight />
      </a>
    </div>
  );
};

export default Info;
