"use strict";

const btnNewGame = document.querySelector(".btn--new");
const btnDiceRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const players = document.querySelectorAll(".player");

const resetGame = function () {
  let player1Score = 0;
  let player2Score = 0;
  let player1Current = 0;
  let player2Current = 0;
  let diceValue;

  for (let i = 0; i < players.length; i++) {
    players[i].querySelector(".score").textContent = 0;
    players[i].querySelector(".current-score").textContent = 0;
  }

  players[0].classList.add("player--active");
  players[1].classList.remove("player--active");
};

const passTurn = function () {
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains("player--active")) {
      players[i].classList.remove("player--active");
    } else {
      players[i].classList.add("player--active");
    }
  }
};

const updateScore = function (value) {
  if (players[0].classList.contains("player--active")) {
    if (value !== 1) {
      players[0].querySelector(".score").textContent =
        Number(players[0].querySelector(".score").textContent) + value;
    } else {
      players[0].querySelector(".score").textContent = 0;
      passTurn();
    }
  } else {
    if (value !== 1) {
      players[1].querySelector(".score").textContent =
        Number(players[1].querySelector(".score").textContent) + value;
    } else {
      players[1].querySelector(".score").textContent = 0;
      passTurn();
    }
  }
};

const rollDice = function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  dice.setAttribute("src", `dice-${diceValue}.png`);
  updateScore(diceValue);
};

const updateCurrent = function () {
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains("player--active")) {
      players[i].querySelector(".current-score").textContent =
        Number(players[i].querySelector(".current-score").textContent) +
        Number(players[i].querySelector(".score").textContent);
    }
  }
};

const hold = function () {
  updateCurrent();
  updateScore(1);
  for (let i = 0; i < players.length; i++) {
    if (players[i].querySelector(".current-score").textContent > 100) {
      let playerName = players[i].querySelector(".name").textContent;
      btnDiceRoll.textContent = `${playerName} Wins!!!`;
    }
  }
  //   passTurn();
};

resetGame();

btnNewGame.addEventListener("click", resetGame);
btnDiceRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", hold);
