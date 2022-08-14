/**
 * Daniel Zhang's devlopment portfolio
 * @copyright 2022 Daniel Zhang
 * @license BSD-3-Clause
 */

import "./styles.scss";
import React, { useState, Suspense } from "react";
import { loadFull } from "tsparticles";
import * as settings from "./particles.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Keyboard, Navigation, Pagination, Lazy } from "swiper";
import "swiper/swiper-bundle.min.css";

import {
  BsGithub,
  BsStackOverflow,
  BsEnvelope,
  BsArrowDown,
  BsCheck2Circle,
  BsClock
} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { SiDiscord } from "react-icons/si";
import { BiBot } from "react-icons/bi";

import Info from "./components/footer/info.js";

const Trianglify = React.lazy(() => import("react-trianglify"));
const Particles = React.lazy(() => import("react-tsparticles"));
const Socials = React.lazy(() => import("./components/footer/socials.js"));

function MakePages() {
  let end = pages.map((page) => (
    <div id={page.name} key={page.name} className="section">
      {page.html}
    </div>
  ));
  return end;
}

function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        modules={[Thumbs, Keyboard, Navigation, Pagination, Lazy]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          592: {
            slidesPerView: 1.5,
            spaceBetween: 5
          }
        }}
        navigation={{ hideOnCLick: true }}
        pagination={{ clickable: true }}
        lazy={{ checkInView: true, enabled: true }}
        keyboard
      >
        {/* <GeneratePortfolio /> */}
        {projects.map((project) => (
          <SwiperSlide key={project.name}>
            <div className="carousel main-content">
              <div className="carousel sidebar">
                <img
                  data-src={project.image}
                  alt={project.name}
                  className="swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
                <div className="carousel info">
                  <div className="carousel title">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="carousel shortDesc">{project.shortDesc}</div>
                  <div
                    className="carousel status"
                    style={{ color: project.status.color }}
                  >
                    {project.status.content}
                  </div>
                </div>
              </div>

              <div className="carousel body">{project.content}</div>
            </div>
            <div className="carousel footer">
              <GenerateFooterButtons buttons={project.buttons} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs, Lazy, Keyboard, Navigation]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        width={null}
        lazy={{ checkInView: true, enabled: true }}
        slidesPerView={"auto"}
        navigation
        keyboard
      >
        {projects.map((project) => (
          <SwiperSlide after={project.name} key={project.name}>
            <img
              data-src={project.image}
              alt={project.name}
              className="swiper-lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
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

function GenerateFooterButtons(buttons) {
  return buttons.buttons.map((b, index) => (
    <button
      style={{ backgroundColor: b.color }}
      key={index}
      onClick={() => window.open(b.url, "_blank")}
    >
      <p>{b.content}</p>
    </button>
  ));
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
        <Suspense fallback={<div id="tsparticles"></div>}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={settings.default}
          />
        </Suspense>
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
          <a href="mailto:daniel.zha@pm.me" target="_blank" rel="noreferrer">
            <BsEnvelope />
          </a>
        </div>

        <div className="links desktop">
          <div id="linksDesktopPadding">
            <button
              onClick={() => {
                window.open("https://github.com/Yourself1011", "_blank");
              }}
              style={{ top: "3vh" }}
            >
              <div className="outer animation linkName">
                <div className="inner animation linkName">
                  <BsGithub /> Github
                </div>
              </div>

              <div className="outer animation linkURL">
                <div className="inner animation linkURL">
                  github.com/Yourself1011
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                window.open(
                  "https://stackoverflow.com/users/11558361/yourself1011",
                  "_blank"
                );
              }}
              style={{ top: "calc((34vh/6)*2 + 3vh)" }}
            >
              <div className="outer animation linkName">
                <div className="inner animation linkName">
                  <BsStackOverflow /> Stack Overflow
                </div>
              </div>

              <div className="outer animation linkURL">
                <div className="inner animation linkURL">
                  stackoverflow.com/users/11558361/yourself1011
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                window.open("mailto:yourself1011@pm.me", "_blank");
              }}
              style={{ top: "calc((34vh/6)*4 + 3vh)" }}
            >
              <div className="outer animation linkName">
                <div className="inner animation linkName">
                  <BsEnvelope /> Email
                </div>
              </div>

              <div className="outer animation linkURL">
                <div className="inner animation linkURL">
                  yourself1011@pm.me
                </div>
              </div>
            </button>
          </div>
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

      <Suspense fallback={<div id="canvasFallback"></div>}>
        <Trianglify
          xColors={["#141e30ff", "#243b55ff"]}
          variance={5}
          cellSize={35}
        />
      </Suspense>
      <MakePages />
      <div id="footer">
        <svg
          id="footerwaves"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 231L37.5 225.5C75 220 150 209 225 238.2C300 267.3 375 336.7 450 366.8C525 397 600 388 675 372.2C750 356.3 825 333.7 862.5 322.3L900 311L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
            fill="#D36135"
          ></path>
          <path
            d="M0 379L37.5 392.7C75 406.3 150 433.7 225 427.5C300 421.3 375 381.7 450 383.2C525 384.7 600 427.3 675 451C750 474.7 825 479.3 862.5 481.7L900 484L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
            fill="#A24936"
          ></path>
        </svg>
        <div id="footercontent">
          <Suspense fallback={<div className="lazy-preloader"></div>}>
            <Socials />
          </Suspense>
          <Info />
        </div>
      </div>
    </div>
  );
}

let projects = [
  {
    name: "Personal Website",
    image: "icons/DanielZhang.svg",
    shortDesc: "The website you're on right now",
    content: (
      <>
        <p>
          This is my development portfolio. You are on it right now. It contains
          my resume, and my projects. It is responsive, and looks great on all
          platforms and devices.
        </p>
        <h4>Uses:</h4>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Trianglify</li>
          <li>TsParticles</li>
          <li>Swiper</li>
        </ul>
      </>
    ),
    status: {
      content: (
        <>
          <BsClock /> In progress
        </>
      ),
      color: "#c29a17"
    },
    buttons: [
      {
        content: (
          <>
            <CgWebsite /> Link
          </>
        ),
        color: "#D36135",
        url: "https://yourself1011.github.io/"
      },
      {
        content: (
          <>
            <BsGithub /> Source
          </>
        ),
        color: "#484f58",
        url: "https://github.com/Yourself1011/Yourself1011.github.io"
      }
    ]
  },
  {
    name: "Farmout",
    image: "images/farmoutIcon.png",
    shortDesc: "A Discord bot about farming crops and animals",
    content: (
      <>
        <h4 id="farmout">Farmout</h4>
        <p>
          A currency bot where the player grows crops, takes care of animals,
          and trades with merchants to gain coins.
        </p>
        <p>
          Farmout is a Currency/Fun bot where you own and take care of a farm.
        </p>
        <p>
          There are tons of different animals that you can take care of, all
          giving you unique items like wool and milk. You have to plant and
          water seeds for crops, which you can sell and trade with the
          marketplace for other cool items. We’ve only recently added 2 new
          revolutionary updates: contracts and locations. These make the game
          feel more realistic, and make it feel like you are actually running a
          farm.
        </p>
        <h4 id="built-with">Built With</h4>
        <ul>
          <li>Python</li>
          <li>Discord.py</li>
          <li>Replit database</li>
          <li>Uptimerobot</li>
        </ul>
        <h4 id="invite-link">Invite Link</h4>
        <p>
          <a href="https://discord.com/oauth2/authorize?client_id=834116780502679572&amp;permissions=67628225&amp;scope=bot">
            https://discord.com/oauth2/authorize?client_id=834116780502679572&amp;permissions=67628225&amp;scope=bot
          </a>
        </p>
        <p>
          With weekly updates, active devs, and an awesome community, there’s no
          reason not to try Farmout!
        </p>
      </>
    ),
    status: {
      content: (
        <>
          <BsCheck2Circle /> Complete
        </>
      ),
      color: "#a5ff90"
    },
    buttons: [
      {
        content: (
          <>
            <BsGithub /> Source
          </>
        ),
        color: "#484f58",
        url: "https://github.com/Yourself1011/farmoutbot"
      },
      {
        content: (
          <>
            <SiDiscord /> Discord Invite
          </>
        ),
        color: "#5865f2",
        url:
          "https://discord.com/oauth2/authorize?client_id=834116780502679572&amp;permissions=67628225&amp;scope=bot"
      },
      {
        content: (
          <>
            <BiBot /> Top.gg
          </>
        ),
        color: "#ff3366",
        url: "https://top.gg/bot/795319933314662452"
      }
    ]
  },
  {
    name: "StatBot",
    image:
      "https://cdn.discordapp.com/avatars/764276231805075456/6c98b95b349aee95867ae1d3ba2cefca.webp",
    shortDesc: "A Discord bot that displays statistics of all kinds.",
    content: (
      <>
        <p>
          StatBot is a easy-to-use, very customizable bot that displays the
          statistics of your server.
        </p>

        <h4>Why this bot?</h4>
        <p>
          What sets this bot apart from the other statistics bots is that it
          delivers statistics faster, making use of messages and embeds, rather
          than the traditional channel names. Using messages means that it can
          also display more statistics in less space.
        </p>
        <br />
        <br />
        <p>
          With a setup wizard, many settings, and many statistics to show,
          including graphs, there's no reason not to give this bot a try!
        </p>
        <br />
        <br />
        <ul>
          <li>Node JS</li>
          <li>Discord JS</li>
          <li>MongoDB</li>
        </ul>
      </>
    ),
    status: {
      content: (
        <>
          <BsCheck2Circle /> Complete
        </>
      ),
      color: "#a5ff90"
    },
    buttons: [
      {
        content: (
          <>
            <BsGithub /> Source
          </>
        ),
        color: "#484f58",
        url: "https://github.com/Yourself1011/StatBot"
      },
      {
        content: (
          <>
            <SiDiscord /> Discord Invite
          </>
        ),
        color: "#5865f2",
        url:
          "https://discord.com/oauth2/authorize?client_id=764276231805075456&scope=bot&permissions=314388"
      },
      {
        content: (
          <>
            <BiBot /> Top.gg
          </>
        ),
        color: "#ff3366",
        url: "https://top.gg/bot/764276231805075456"
      }
    ]
  },
  {
    name: "Meleti",
    image:
      "https://cdn.discordapp.com/avatars/977332758600896613/9ec7ff5650f41272e2e22e8ed0a02106.webp",
    shortDesc: "An all-in-one productivity Discord bot",
    content: (
      <>
        <h4 id="meleti">Meleti</h4>
        <p>
          Daniel Zhang, Li Feng Yin, Jashanpreet Singh, and Jeffrey Zang&#39;s
          submission for Jamhacks 6. <br />
        </p>
        <p>
          The all-in-one productivity discord bot, jam-packed with features (pun
          intented). Meleti has a study timer, scientifically proven to produce
          best results, to-do lists to keep track of all your crucial tasks,
          recurring reminders for wordle fans that want to keep their streak,
          and much more! Best of all, Meleti features a reward system featuring
          famous artifacts from history to encourage you to keep studying.{" "}
        </p>
        <br />
        <p>
          Images:
          <br />
          <a href="https://www.flaticon.com/authors/special/lineal-color?author_id=1">
            https://www.flaticon.com/authors/special/lineal-color?author_id=1
          </a>
          <br /> <br />
          Discord.js:
          <br />
          <a href="https://discord.js.org/#/">https://discord.js.org/#/</a>
        </p>
      </>
    ),
    status: {
      content: (
        <>
          <BsCheck2Circle /> Complete
        </>
      ),
      color: "#a5ff90"
    },
    buttons: [
      {
        content: (
          <>
            <BsGithub /> Source
          </>
        ),
        color: "#484f58",
        url: "https://github.com/Yourself1011/meleti"
      },
      {
        content: (
          <>
            <SiDiscord /> Discord Server Invite
          </>
        ),
        color: "#5865f2",
        url: "https://discord.com/invite/wyPGW6Asbx"
      }
    ]
  },
  {
    name: "Police Pursuit",
    image: "images/police-pursuit.png",
    shortDesc: "A game about dodging obstacles while chased by police",
    content: (
      <>
        <p>
          Entry in <a href="http://www.pyweek.org/30/">PyWeek #31</a>
        </p>
        <p>Theme: Cops</p>
        <p>Team: nah</p>
        <p>Members: LargAnk, Yourself</p>
        <h4>Uses:</h4>
        <ul>
          <li>Python 3</li>
          <li>PyGame</li>
        </ul>
      </>
    ),
    status: {
      content: (
        <>
          <BsCheck2Circle /> Complete
        </>
      ),
      color: "#a5ff90"
    },
    buttons: [
      {
        content: (
          <>
            <BsGithub /> Source
          </>
        ),
        color: "#484f58",
        url: "https://github.com/jeffrey-zang/Police-Pursuit"
      },
      {
        content: (
          <>
            <CgWebsite /> Submission
          </>
        ),
        color: "#7289DA",
        url: "https://pyweek.org/e/nah/"
      }
    ]
  }
];

// ,
// {
//   name: "",
//   image: "",
//   shortDesc: "",
//   content: (
//     <>
//       <p>
//
//       </p>
//     </>
//   ),
//   status: {
//     content: (
//      <>
//
//      </>
//     ),
//     color: ""
//   },
//   buttons: [
//     {
//       content: (
//         <>
//
//         </>
//       ),
//       color: "",
//       url: ""
//     },
//     {
//       content: (
//         <>
//
//         </>
//       ),
//       color: "",
//       url: ""
//     }
//   ]
// },

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
        <h2>My Resume</h2>
        <div id="resume-div">
          <iframe
            src="https://drive.google.com/file/d/1KUxfa9MNOW0ZjcVuMHvlZE1-GJHGwcQt/preview"
            allow="autoplay"
            title="resume"
            id="resume-iframe"
            scrolling="no"
            loading="lazy"
          ></iframe>
        </div>
      </>
    )
  },
  {
    name: "Portfolio",
    html: (
      <>
        <h2>My Projects</h2>
        <Carousel />
      </>
    )
  }
];
