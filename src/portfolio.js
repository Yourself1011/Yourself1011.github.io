import { BsGithub } from "react-icons/bs";

import { CgWebsite } from "react-icons/cg";

let projects = [
  {
    name: "Personal Website",
    image: "../public/metabackground.png",
    shortDesc: "The website you're on right now",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
    status: {
      content: "In progress",
      color: "#c29a17"
    },
    buttons: [
      {
        content: (
          <>
            <CgWebsite /> Link
          </>
        ),
        color: "#D36135"
      },
      {
        content: (
          <>
            <BsGithub /> Source
          </>
        ),
        color: "#484f58"
      }
    ]
  }
];
