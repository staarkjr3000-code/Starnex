import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "lenis";
import "./index.css";

const lenis = new Lenis({
  smooth: true,
  infinite: true, // 🔁 loop scroll
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);