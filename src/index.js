/**
 * Daniel Zhang's devlopment portfolio
 * @copyright 2022 Daniel Zhang
 * @license BSD-3-Clause
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty("--scroll", window.pageYOffset);
    document.body.style.setProperty(
      "--scrollPercent",
      window.pageYOffset / window.innerHeight
    );
    document.body.style.setProperty("--pageHeight", document.body.offsetHeight);
  },
  false
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
