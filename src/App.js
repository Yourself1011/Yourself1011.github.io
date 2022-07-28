/**
 * Daniel Zhang's devlopment portfolio
 * @copyright 2022 Daniel Zhang
 * @license BSD-3-Clause
 */

import "./styles.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as settings from "./particles.json";
import Trianglify from "react-trianglify";

import {
  BsGithub,
  BsStackOverflow,
  BsEnvelope,
  BsArrowDown,
  BsArrowUpRightSquare
} from "react-icons/bs";

function MakePages() {
  let end = pages.map((page) => (
    <div id={page.name} key={page.name} className="section">
      {page.html}
    </div>
  ));
  return end;
}

function GenerateButtons() {
  return pages.map(GenerateButton);
}

function GenerateButton(page) {
  return (
    <button
      className="button"
      key={page.name}
      style={{ width: `${100 / pages.length}vw` }}
      onClick={() => {
        let pageTop = document.getElementById(page.name).getBoundingClientRect()
          .top;
        let barHeight = document.getElementById("bar").offsetHeight;

        window.scrollTo({
          top: pageTop + window.pageYOffset - barHeight,
          behavior: "smooth"
        });
      }}
    >
      {page.name.replace("_", " ")}
    </button>
  );
}

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log("loaded ", container);
  };

  return (
    <div className="App">
      <div id="titlescreen">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={settings.default}
        />
        <div id="title">
          <span>
            <p>Hi, I'm</p>
            <h1>Daniel Zhang</h1>
          </span>
        </div>
        <div className="links mobile">
          <a
            href="https://github.com/Yourself1011"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/11558361/yourself1011"
            target="_blank"
            rel="noreferrer"
          >
            <BsStackOverflow />
          </a>
          <a href="mailto:yourself1011@pm.me" target="_blank" rel="noreferrer">
            <BsEnvelope />
          </a>
        </div>

        <div className="links desktop">
          <a
            href="https://github.com/Yourself1011"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> Github <BsArrowUpRightSquare />
          </a>

          <br />
          <a
            href="https://stackoverflow.com/users/11558361/yourself1011"
            target="_blank"
            rel="noreferrer"
          >
            <BsStackOverflow /> Stack Overflow <BsArrowUpRightSquare />
          </a>
          <br />

          <a href="mailto:yourself1011@pm.me" target="_blank" rel="noreferrer">
            <BsEnvelope /> Email <BsArrowUpRightSquare />
          </a>
        </div>

        <div id="titlebuttons">
          <button
            className="titlebutton resume"
            onClick={() => {
              let pageTop = document
                .getElementById("Resume")
                .getBoundingClientRect().top;
              let barHeight = document.getElementById("bar").offsetHeight;

              window.scrollTo({
                top: pageTop + window.pageYOffset - barHeight,
                behavior: "smooth"
              });
            }}
          >
            <div>
              Resume <BsArrowDown />
            </div>
          </button>

          <button
            className="titlebutton portfolio"
            onClick={() => {
              let pageTop = document
                .getElementById("Portfolio")
                .getBoundingClientRect().top;
              let barHeight = document.getElementById("bar").offsetHeight;

              window.scrollTo({
                top: pageTop + window.pageYOffset - barHeight,
                behavior: "smooth"
              });
            }}
          >
            <div>
              Portfolio <BsArrowDown />
            </div>
          </button>
        </div>
      </div>
      <div id="waves">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--highlight)"
            fillOpacity="1"
            d="M0,128L30,133.3C60,139,120,149,180,133.3C240,117,300,75,360,48C420,21,480,11,540,26.7C600,43,660,85,720,128C780,171,840,213,900,202.7C960,192,1020,128,1080,106.7C1140,85,1200,107,1260,122.7C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--tertiary)"
            fillOpacity="1"
            d="M0,32L30,69.3C60,107,120,181,180,197.3C240,213,300,171,360,128C420,85,480,43,540,64C600,85,660,171,720,192C780,213,840,171,900,149.3C960,128,1020,128,1080,133.3C1140,139,1200,149,1260,170.7C1320,192,1380,224,1410,240L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="bar">
        <GenerateButtons />
      </div>

      <MakePages />
    </div>
  );
}

let pages = [
  //   {
  //     name: "About_Me",
  //     html: (
  //       <>
  //         <h1>About Me</h1>
  //         <p>
  //           I am a quick, eager learner, and am developing the skills for a future
  //           in software engineering
  //         </p>
  //       </>
  //     )
  //   },
  {
    name: "Resume",
    html: (
      <>
        <h1>My Resume</h1>
        <div id="resume-div">
          <iframe
            src="https://drive.google.com/file/d/1KUxfa9MNOW0ZjcVuMHvlZE1-GJHGwcQt/preview"
            allow="autoplay"
            title="resume"
            id="resume-iframe"
            scrolling="no"
          ></iframe>
        </div>
        <Trianglify xColors={["#141e30ff", "#243b55ff"]} />
      </>
    )
  }
];
