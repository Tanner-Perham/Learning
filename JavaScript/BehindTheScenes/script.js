"use strict";

/*
const button = document.querySelector(".head-btn");
const header = document.querySelector(".header");

button.addEventListener("click", function () {
  header.textContent = "BOOM";
});

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
*/

// Using 'this' keyword
console.log(this);

const tanner = {
  year: 1993,
  calcAge: function () {
    console.log(2021 - this.year);
  },
};
tanner.calcAge();

const ceily = {
  year: 1996,
};
ceily.calcAge = tanner.calcAge;

console.log(ceily);

ceily.calcAge();
