"use strict";

// Initializing variables
const checkBtn = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const messageText = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");
const hiddenNumber = document.querySelector(".number");
const highScoreText = document.querySelector(".highscore");

let secretNumber,
  score,
  highScore = 0;

const initialBackgroundColor = "#222";
const successBackgroundColor = "#60b347";
const initialHiddenNumberWidth = "15rem";
const successHiddenNumberWidth = "30rem";
const initialHiddenNumberText = "?";
const initialMessageText = "Start guessing...";
const inputHighMessage = "📈 Too High!!!";
const inputLowMessage = "📉 Too Low!!!";
const gameWinMessage = "🎉 Correct Number!!!";
const gameLooseMessage = "👎 You Lost The Game!!!";
const noNumberMessaage = "⛔️ No Number!!!";
const invalidNumberMessage = "🔞 Invalid Number!!!";

const initGameDataStates = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
};

const isValidNumber = (inputValue) => {
  // If no number is typed
  if (guessInput.value === "") {
    messageText.textContent = noNumberMessaage;
    return false;
  }

  // If typed number is less than 1 or greater than 20
  if (inputValue < 1 || inputValue > 20) {
    messageText.textContent = invalidNumberMessage;
    return false;
  }

  return true;
};

const decreaseScore = () => {
  score--;
  scoreText.textContent = score;
};

const handleHighLowInput = (message) => {
  messageText.textContent = message;
  decreaseScore();
};

const handleLostGame = () => {
  messageText.textContent = gameLooseMessage;
  scoreText.textContent = 0;
};

const handleNumberInput = () => {
  const inputValue = Number(guessInput.value);

  if (isValidNumber(inputValue)) {
    if (inputValue === secretNumber) {
      messageText.textContent = gameWinMessage;
      body.style.backgroundColor = successBackgroundColor;
      hiddenNumber.textContent = secretNumber;
      hiddenNumber.style.width = successHiddenNumberWidth;

      if (score > highScore) {
        highScore = score;
        highScoreText.textContent = highScore;
      }
    } else if (inputValue > secretNumber) {
      if (score > 1) {
        handleHighLowInput(inputHighMessage);
      } else {
        handleLostGame();
      }
    } else if (inputValue < secretNumber) {
      if (score > 1) {
        handleHighLowInput(inputLowMessage);
      } else {
        handleLostGame();
      }
    }
  }
};

const handleResetGame = () => {
  initGameDataStates();

  scoreText.textContent = score;
  messageText.textContent = initialMessageText;

  guessInput.value = "";

  body.style.backgroundColor = initialBackgroundColor;

  hiddenNumber.textContent = initialHiddenNumberText;
  hiddenNumber.style.width = initialHiddenNumberWidth;
};

initGameDataStates();
checkBtn.addEventListener("click", handleNumberInput);
againBtn.addEventListener("click", handleResetGame);
