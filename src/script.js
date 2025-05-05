function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
