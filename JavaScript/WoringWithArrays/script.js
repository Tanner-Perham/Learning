'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Coding Challenge #2

const challenge2 = {
  testData1: [5, 2, 4, 1, 15, 8, 3],
  testData2: [16, 6, 10, 5, 6, 1, 4],
};

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age > 2 ? 16 + age * 4 : age * 2));
  const adultHumanDogs = humanAges.filter(age => age >= 18);
  const averageHumanAge =
    adultHumanDogs.reduce((acc, age) => acc + age) / adultHumanDogs.length;
  return averageHumanAge;
};

console.log(calcAverageHumanAge(challenge2.testData2));

// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/*
const testData1 = {
	julia: [3, 5, 2, 12, 7],
	kate: [4, 1, 15, 8, 3],
};
const testData2 = {
	julia: [9, 16, 6, 8, 3],
	kate: [10, 5, 6, 1, 4],
};

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCor = dogsJulia.slice(0, -2);
  const combinedDogs = [...dogsJuliaCor, ...dogsKate];
  combinedDogs.forEach(function (dogAge, i) {
    if (dogAge < 3) console.log(`Dog number ${i} is a puppy`);
    else console.log(`Dog number ${i} is an adult`);
  });
};

checkDogs(testData1.julia, testData1.kate);
checkDogs(testData2.julia, testData2.kate);
*/

const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawals);

console.log(movements.reduce((acc, cur) => acc + cur));

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(movements);

const calcSummary = function (movements) {
  const summary = new Map();
  const deposits = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  const withdrawals = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  const interestRate = 0.003;
  summary['in'] = deposits;
  summary['out'] = withdrawals;
  summary['interest'] = (deposits + withdrawals) * interestRate;
  return summary;
};
const printSummary = function (summary) {
  labelSumIn.textContent = `${summary.in}€`;
  labelSumOut.textContent = `${summary.out}€`;
  labelSumInterest.textContent = `${summary.interest}€`;
};

printSummary(calcSummary(movements));

const findMaxMovement = function (movements) {
  const maxMovement = movements.reduce((acc, cur) =>
    cur > acc ? (acc = cur) : (acc = acc)
  );
  return maxMovement;
};

const findMinMovement = function (movements) {
  const minMovement = movements.reduce((acc, cur) =>
    cur < acc ? (acc = cur) : (acc = acc)
  );
  return minMovement;
};

// console.log(findMaxMovement(movements));
// console.log(findMinMovement(movements));

containerMovements.innerHTML = '';

movements.forEach((value, i) => {
  const type = value > 0 ? 'deposit' : 'withdrawal';
  const html = `
  <div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__value">${value}</div>
</div>
`;

  containerMovements.insertAdjacentHTML('afterbegin', html);
});

const getUsername = function (account) {
  account.username = account.owner
    ?.split(' ')
    .map(e => e.slice(0, 1).toLowerCase())
    .join('');
};

accounts.forEach(getUsername);
// console.log(account3);

/*
const eurToUsd = 1.1;

const convertedMovements = movements.map(function (mov) {
  return mov * eurToUsd;
});

const convertedMovements1 = movements.map(mov => mov * eurToUsd);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 1 ? 'deposited' : 'withdrew'} \$${Math.abs(
      mov
    )}`
);

console.log(convertedMovements);
console.log(convertedMovements1);
console.log(movementsDescriptions);
*/

/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited \$${movement}`);
  } else if (movement < 0) {
    console.log(`You withdrew \$${movement * -1}`);
  }
}

console.log(`---------------------------`);

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited \$${movement}`);
  } else if (movement < 0) {
    console.log(`You withdrew \$${movement * -1}`);
  }
});

console.log(`---------------------------`);

const accountReport = function (movement) {
  if (movement > 0) {
    console.log(`You deposited \$${movement}`);
  } else if (movement < 0) {
    console.log(`You withdrew \$${movement * -1}`);
  }
};

movements.forEach(accountReport);

console.log(`---------------------------`);

movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited \$${movement}`);
  } else if (movement < 0) {
    console.log(`Movement ${i + 1}: You withdrew \$${movement * -1}`);
  }
});

console.log(`.forEach() also works with Maps and Sets`);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesSet = new Set(['USD', 'GBP', 'USD', 'USD', 'EUR', 'EUR']);

currenciesSet.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`); // Returns key identical to value
});
*/

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - retrieve range of elements from array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
// Same array:
console.log(arr.slice());

// SPLICE - does mutate original array
console.log(arr.splice(2));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
// REVERSE
console.log(arr.reverse());
*/
