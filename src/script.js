function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-idea");
  let apiKey = "047t2173e3a39c66942c701baf3a6of5";
  let prompt = `User inputs: Generate a haiku about ${userInput.value}`;
  let context =
    "You are a funny haiku expert. Make sure to follow user inputs and separate each line with a <br />";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating a haiku..";
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
