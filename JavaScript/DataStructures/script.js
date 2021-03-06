"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries());

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  restaurant.openingHours?.[day] && console.log(`Open on ${day}`);
}

const openDays = Object.entries(restaurant.openingHours);
for (const [day, { open: openTime, close: closeTime }] of openDays) {
  console.log(`On ${day} open ${openTime} to ${closeTime}`);
}
console.log(Object.entries(restaurant.openingHours));
*/

/*
// Destructuring arrays

// Destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu1 = [], starterMenu: starters = [] } = restaurant;
console.log(menu1, starters);

// Spread operator
console.log(...starters);

const newMenu = [...restaurant.mainMenu, "Gnocci"];

console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = "Tanner";
const letters = [...str];

console.log(letters);

// Can copy objects with spread also!
const newRestaurant = { ...restaurant };

// Nullish ?? operator

restaurant.numberOfGuests = 0;

// Nullish: null and undefined (NOT 0 or '')
const guests = restaurant.numberOfGuests ?? 10;
console.log(guests);
*/

// Coding challenge #1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding challenge #2

// Q1
const goals = game.scored;
// console.log(goals);
for (const [num, kicker] of goals.entries())
  console.log(`Goal ${num + 1} kicked by: ${kicker}`);

// Q2
const odds = game.odds;
console.log(odds);

let sum = 0;
for (const x of Object.values(odds)) {
  console.log(x);
  sum += x;
}
console.log(sum / Object.values(odds).length);

// Q3
// const { team1, x: draw, team2 } = odds;
// console.log(`Odd of Draw: ${draw}`);
// console.log(`Odd of Victory ${game.team2}: ${team2}`);
// console.log(`Odd of Victory ${game.team1}: ${team1}`);

const { team1: team1Name, team2: team2Name } = game;
// for (const )
console.log(odds);
for (const [team, value] of Object.entries(odds)) {
  const teamStr =
    team === "x" ? `draw: ${value}` : `victory ${game[team]}: ${value}`;
  console.log(`Odds of ${teamStr}`);
}

// Playing around with sets

const listOfIDs = ["15672", "1234", "15432", "1234", "1234"];

const uniqueSet = new Set([...listOfIDs]);

console.log(uniqueSet);

for (const l of [..."hello"]) uniqueSet.add(l);
uniqueSet.delete("1234");
console.log(uniqueSet);
uniqueSet.clear();
console.log(uniqueSet);
for (const l of [..."ashtenruhhlm"]) uniqueSet.add(l);

const test = [...uniqueSet];
console.log(test);

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "You are correct"],
  [false, "Try again"],
]);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Input the number for your answer"));

console.log(question.get(answer === question.get("correct")));

/*
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;

const allplayers = [...players1, ...players2];

const playersFinal = [...players1, "Thiago", "Coultinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  let numberOfGoals = 0;
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
    numberOfGoals += 1;
  }
  console.log(numberOfGoals);
};

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/

/*
// Coding Challenge #3

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];

console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const diff = function (...numbers) {
  gameLength = 90;
};

const avg = function (...numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

console.log(90 / gameEvents.size);
*/
