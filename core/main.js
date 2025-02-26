import "./style.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

document.addEventListener("DOMContentLoaded", () => {
  let deck = new Reveal({
    plugins: [Markdown],
  });
  deck.initialize();
});