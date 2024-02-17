const category = document.querySelector("#head-2");
const joke = document.querySelector("#para-joke");
const punchline = document.querySelector("#para-punchline");
const btnSubmit = document.querySelector("#submit-id");

document.addEventListener("DOMContentLoaded", generateJoke);

btnSubmit.addEventListener("click", generateJoke);

function generateJoke() {
  fetch("https://api.sampleapis.com/jokes/goodJokes")
    .then((resp) => resp.json())
    .then((data) => {
      let rand = Math.floor(Math.random() * data.length);
      category.innerHTML = `${data[rand].type} Joke`;
      joke.innerHTML = data[rand].setup;
      punchline.innerHTML = ` <span class ="emoji">🤣</span>&nbsp; <b>“</b> ${data[rand].punchline} <b>”</b>`;
    })
    .catch((error) => console.error("Error:", error));
}
