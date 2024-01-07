"use strict";

const checkBtn = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const messageText = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");
const hiddenNumber = document.querySelector(".number");
const highScoreText = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const decreaseScore = () => {
  score--;
  scoreText.textContent = score;
};

const handleResetGame = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  scoreText.textContent = score;
  messageText.textContent = "Start guessing...";

  guessInput.value = "";

  body.style.backgroundColor = "#222";

  hiddenNumber.textContent = "?";
  hiddenNumber.style.width = "15rem";
};

const handleNumberInput = () => {
  // If no number is typed
  if (guessInput.value === "") {
    console.log("Tushar", guessInput.value);
    messageText.textContent = "⛔️ No Number!!!";
    return;
  }

  const inputValue = Number(guessInput.value);

  // If typed number is less than 1 or greater than 20
  if (inputValue < 1 || inputValue > 20) {
    messageText.textContent = "🔞 Invalid Number!!!";
  } else if (inputValue === secretNumber) {
    messageText.textContent = "🎉 Correct Number!!!";
    body.style.backgroundColor = "#60b347";
    hiddenNumber.textContent = secretNumber;
    hiddenNumber.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else if (inputValue > secretNumber) {
    if (score > 1) {
      messageText.textContent = "📈 Too High!!!";
      decreaseScore();
    } else {
      messageText.textContent = "👎 You Lost The Game!!!";
      scoreText.textContent = 0;
    }
  } else if (inputValue < secretNumber) {
    if (score > 1) {
      messageText.textContent = "📉 Too Low!!!";
      decreaseScore();
    } else {
      messageText.textContent = "👎 You Lost The Game!!!";
      scoreText.textContent = 0;
    }
  }
};

checkBtn.addEventListener("click", handleNumberInput);
againBtn.addEventListener("click", handleResetGame);
