"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;

if (hasDriversLicence) console.log("I can drive");
*/

/*
// FUNCTIONS

function logger(name) {
  console.log(`My name is ${name}`);
}

logger("Tanner");

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(3, 2));
*/

/*
// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphin = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphin, avgKoalas) {
  if (avgDolphin > avgKoalas * 2) {
    console.log(`Dolphins win`);
  } else if (avgKoalas > avgDolphin * 2) {
    console.log(`Koalas win`);
  } else {
    console.log(`No one wins`);
  }
}

checkWinner(avgDolphin, avgKoalas);
*/

/*
// Coding Challenge #2

function calcTip(billValue) {
  if (50 < billValue < 300) {
    const tipValue = billValue * 0.15;
    return tipValue;
  } else {
    const tipValue = billValue * 0.2;
    return tipValue;
  }
}

function addValues(val1, val2) {
  return val1 + val2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
  addValues(bills[0], tips[0]),
  addValues(bills[1], tips[1]),
  addValues(bills[2], tips[2]),
];

console.log(tips);
console.log(totals);
*/

/*
// Objects

const tanner = {
  firstName: "Tanner",
  lastName: "Perham",
  birthYear: 1993,
  sisters: ["Ceily", "Rosie"],
  friends: ["Jade", "Jake", "Jordan", "Lacky"],

  calcAge: function () {
    this.age = 2021 - this.birthYear;
  },
  getSummary: function () {
    const summaryString = `${this.firstName} is a ${this.age} year old person with ${this.sisters.length} sisters`;

    return summaryString;
  },
};

console.log(tanner.firstName);
tanner.location = "Australia";
console.log(tanner);

console.log(
  `${tanner.firstName} has ${tanner.friends.length} friends, and his best friend is ${tanner.friends[0]}`
);

tanner.calcAge();
console.log(tanner.age);

console.log(tanner.getSummary());
*/

/*
// Coding Challenge #3

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is greater than ${john.firstName} ${john.lastName}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is greater than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})`
  );
}
*/

// Loops

/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const tannerArray = ["Tanner", "Perham", 1993, "Australia"];

for (let item = 0; item < tannerArray.length; item++) {
  if (typeof tannerArray[item] !== "string") continue;
  console.log(tannerArray[item]);
}
*/

/*
const tannerArray = ["Tanner", "Perham", 1993, "Australia"];

for (let i = tannerArray.length - 1; i >= 0; i--) {
  console.log(i, tannerArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Doing rep ${rep} of exercise ${exercise}`);
  }
}
*/

//  Coding Challenge #4

const bills = [22, 295, 276, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(billValue) {
  if (50 < billValue < 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;

    sum = sum + arr[i];
  }
  const average = sum / arr.length;
  return average;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(calcAverage(bills));

console.log(tips);
console.log(calcAverage(tips));

console.log(totals);
console.log(calcAverage(totals));
