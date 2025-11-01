import Reveal from "./node_modules/reveal.js/dist/reveal.esm.js";

const slidesContainer = document.getElementById("slides");

const components = [
  "components/Introduction.html",
  "components/Definition.html",
  "components/Characteristics.html",
  "components/Impacts.html",
  "components/End.html",
];

async function loadSlides() {
  for (const file of components) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`${file} not found`);
      const html = await res.text();
      slidesContainer.insertAdjacentHTML("beforeend", html);
    } catch (err) {
      console.error("Error loading slide:", err);
    }
  }

  const deck = new Reveal();
  deck.initialize({
    transition: "fade",
  });
}

loadSlides();