"use strict";

const button = document.querySelector(".head-btn");
const header = document.querySelector(".header");

button.addEventListener("click", function () {
  header.textContent = "BOOM";
});

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
