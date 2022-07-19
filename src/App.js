/**
 * Daniel Zhang's devlopment portfolio
 * @copyright 2022 Daniel Zhang
 * @license BSD-3-Clause
 */

import "./styles.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as settings from "./particles.json";

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
        scrollToPage(page.name);
      }}
    >
      {page.name.replace("_", " ")}
    </button>
  );
}

function scrollToPage(page) {
  document.getElementById(page).scrollIntoView({
    behavior: "smooth"
  });
}

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
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
          <h1>Daniel Zhang</h1>
          <p>WOw look at this website</p>
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
            fill="#a7c0fa"
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
            fill="#A27B5C"
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
  {
    name: "A_section",
    html: <p>lorem ipsum dolor sit amet</p>
  },
  {
    name: "Another_section",
    html: (
      <p>
        sLFJDSKLJFLKD<b>JLK</b>FJDLLkjdslf
      </p>
    )
  }
];
