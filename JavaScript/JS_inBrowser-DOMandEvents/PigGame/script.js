"use strict";

const btnNewGame = document.querySelector(".btn--new");
const btnDiceRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
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
  console.log(
    currentPlayer,
    player1Score,
    player2Score,
    player1Current,
    player2Current
  );
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

resetGame();

btnNewGame.addEventListener("click", resetGame);
