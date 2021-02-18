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

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const secretNumber = generateSecretNumber();
let score = 20;

const submitNumber = function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    console.log("Need to guess a number");
  }
  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You got it!!!";
  } else if (guess < secretNumber) {
    document.querySelector(
      ".message"
    ).textContent = `Number is greater than ${guess}`;
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector(
      ".message"
    ).textContent = `Number is less than ${guess}`;
    score--;
    document.querySelector(".score").textContent = score;
  }
};

document.querySelector(".check").addEventListener("click", submitNumber);
console.log(secretNumber);
