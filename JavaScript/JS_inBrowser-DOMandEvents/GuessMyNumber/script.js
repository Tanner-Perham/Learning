"use strict";

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

console.log(document.querySelector(".score").textContent);

document.querySelector(".number").textContent = 10;

console.log(document.querySelector(".guess").value);
*/

// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
// });

let secretNumber, score;
let highScore = 0;
let guesses = [];

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const playAgain = function () {
  secretNumber = generateSecretNumber();
  score = 20;
  guesses = [];

  document.querySelector(".score").textContent = score;
  document.querySelector(".guesses").textContent = "";

  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  console.log(secretNumber);
};

const submitNumber = function () {
  let guess = Number(document.querySelector(".guess").value);

  //   No guess
  if (!guess) {
    displayMessage("No number");
    console.log("Need to guess a number");
  }
  //   Correct guess
  if (guess === secretNumber) {
    displayMessage("You got it!!!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //   Wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess < secretNumber) {
        //   Low guess
        displayMessage(`Number is greater than ${guess}`);
        score--;
      }
      //   High guess
      else if (guess > secretNumber) {
        displayMessage(`Number is less than ${guess}`);
        score--;
      }
      guesses.push(guess);
      document.querySelector(".score").textContent = score;
      document.querySelector(
        ".guesses"
      ).textContent = `You have guessed: ${guesses}`;
    } else {
      displayMessage("You lost the game - Try again!");
    }
  }
};

playAgain();
document.querySelector(".check").addEventListener("click", submitNumber);
document.querySelector(".again").addEventListener("click", playAgain);
console.log(secretNumber);
