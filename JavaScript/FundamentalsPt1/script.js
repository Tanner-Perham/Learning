/*
let js = "Amazing";

console.log("The answer is: " + 40 + 8 + 23);

console.log("Tanner");
console.log(23);

let firstName = "Tanner";
let country = "Australia";
let continent = "Australia";
let population = 12000000;
console.log(firstName);
console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "javascriptIsFun");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(year);
console.log(typeof year);

// This is a bug that has not been corrected for legacy reasons
console.log(typeof null);
*/

/*
// let is a dynamic assignment method
let age = 27;
age += 1;

// Cannot change const vars or initialise without a value
const birthYear = 1993;
// birthYear = 1994;
// const job;

// var is a legacy assignment method - don't use this.
var job = "programmer";
job = "teacher";
*/

/*
// OPERATORS

const currentYear = 2021;
const ageTanner = currentYear - 1993;
const ageCeily = currentYear - 1996;
console.log(ageTanner * 365, ageCeily * 365);

const firstName = "Tanner";
const lastName = "Perham";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++; //101
x--; //100
console.log(x);

// Comparison operators
console.log(ageTanner > ageCeily); // true
console.log(ageTanner < ageCeily); // false
console.log(ageTanner >= 18); // true
*/

/*
const currentYear = 2021;
const ageTanner = currentYear - 1993;
const ageCeily = currentYear - 1996;
console.log(currentYear - 1993 > currentYear - 1996);
*/

/*
// Coding Challenge #1

let markBMI, johnBMI;
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.92;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

/*
// Template literals
const firstName = "Tanner";
const job = "Data Engineer";
const birthYear = 1993;
const currentYear = 2021;

const tanner =
  "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job;
console.log(tanner);

const tannerNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(tannerNew);

console.log(`string
with
multiple
lines`);
*/

/*
let song, artist;

song = `Idee Fixe`;
artist = `Methyl Ethel`;

currentlyPlaying = `Currently playing: "${song}" by ${artist}`;
console.log(currentlyPlaying);
*/

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can learn to drive!`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young - she can drive in ${yearsLeft} years.`);
}

const birthYear = 1993;
*/

/*
// Coding challenge 2

let markBMI, johnBMI;
const markMass = 90;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.92;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI.toPrecision(
      3
    )}) is higher than John's BMI (${johnBMI.toPrecision(3)})`
  );
} else {
  console.log(
    `John's BMI (${johnBMI.toPrecision(
      3
    )}) is higher than Mark's BMI (${markBMI.toPrecision(3)})`
  );
}
*/

/*
// Type conversion

const inputYear = "1993";

console.log(Number(inputYear));

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Tanner"));
console.log(Boolean({}));
*/

/*
// Coding Challenge 3
const dolphinMean = (97 + 112 + 101) / 3;
const koalaMean = (109 + 95 + 123) / 3;

if (dolphinMean === koalaMean && dolphinMean >= 100) {
  console.log(`Draw!`);
} else if (dolphinMean > koalaMean && dolphinMean >= 100) {
  console.log(`Dolphins Win!`);
} else if (koalaMean > dolphinMean && koalaMean >= 100) {
  console.log(`Koalas Win!`);
} else {
  console.log(
    `Scores not high enough for a win: (${dolphinMean}, ${koalaMean})`
  );
}
console.log(`Scores: (${dolphinMean}, ${koalaMean})`);
*/

/*
// Switch

const day = "";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Prepare theory");
    break;
  case "wednesday":
    console.log("Hello");
    break;
  default:
    console.log("No day given");
}
*/

/*
const age = 27;
const drink = age >= 18 ? "wine" : "water";

console.log(drink);
*/

/*
// Coding Challenge 4
const billValue = 430;

const tipValue = 5 < billValue < 300 ? 0.15 * billValue : 0.2 * billValue;

const total = billValue + tipValue;

console.log(
  `The bill was ${billValue}, the tip is ${tipValue}, so the total is ${total}`
);
*/
