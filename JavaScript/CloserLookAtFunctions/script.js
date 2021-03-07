"use strict";

// Coding Challenge #1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const response = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    if (response >= 0 && response <= 3) {
      this.answers[response]++;
      console.log(this);
      pollDisplay("String");
    } else {
      alert(`Try again`);
    }
  },
};

const displayResults = function (type = "Array") {
  const results = this.answers;
  if (type !== "Array" && type !== "String")
    console.log(
      `ERROR: ${type} | ${displayResults.name} options are Array or String`
    );
  else {
    if (type === "Array") {
      console.log(results);
    } else if (type === "String") {
      console.log(`Poll results are ${[...results]}`);
    }
  }
};

const pollDisplay = displayResults.bind(poll);

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const bonus1 = [5, 2, 3];
const bonus2 = [1, 5, 3, 9, 6, 1];

displayResults.call({ answers: bonus1 }, "String");
displayResults.call({ answers: bonus2 }, "String");

/*
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTax(0.23);

console.log(addVAT(100));

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Tanner");

greet("Hello")("Tanner");

/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...otherWords] = str.split(" ");
  return [firstWord.toUpperCase(), ...otherWords].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Tranformed by: ${fn.name}`);
};

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2);
createBooking("LH123", undefined, 300);
*/
