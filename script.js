"use strict";

const checkBtn = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const messageText = document.querySelector(".message");

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
    return;
  }

  // If typed number is valid
  console.log(inputValue);
};

checkBtn.addEventListener("click", handleNumberInput);
