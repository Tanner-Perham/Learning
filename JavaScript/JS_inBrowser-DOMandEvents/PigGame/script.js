"use strict";

const btnNewGame = document.querySelector(".btn--new");
const btnDiceRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const players = document.querySelectorAll(".player");

for (let i = 0; i < players.length; i++) {
  console.log(players[i].querySelector(".score"));
}

const resetGame = function () {
  let currentPlayer = 0;
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

const rollDice = function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  dice.setAttribute("src", `dice-${diceValue}.png`);
};

const hold = function () {
  passTurn();
};

resetGame();

btnNewGame.addEventListener("click", resetGame);
btnDiceRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", hold);
