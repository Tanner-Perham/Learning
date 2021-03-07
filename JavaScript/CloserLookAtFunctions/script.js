"use strict";

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
