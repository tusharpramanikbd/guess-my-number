"use strict";

const checkBtn = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const messageText = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const againBtn = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

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
  } else if (inputValue > secretNumber) {
    if (score >= 0) {
      messageText.textContent = "📈 Too High!!!";
      decreaseScore();
    } else {
      messageText.textContent = "👎 You Lost The Game!!!";
    }
  } else if (inputValue < secretNumber) {
    if (score >= 0) {
      messageText.textContent = "📉 Too Low!!!";
      decreaseScore();
    } else {
      messageText.textContent = "👎 You Lost The Game!!!";
    }
  }
};

checkBtn.addEventListener("click", handleNumberInput);
againBtn.addEventListener("click", handleResetGame);
