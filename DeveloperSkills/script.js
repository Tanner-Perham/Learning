"use strict";

// Write a function that reverses input

function reverse(input) {
  const inputType = typeof input;
  switch (inputType) {
    case "string":
      // console.log(`string`);
      let workingString = "";
      for (let i = 0; i < input.length; i++) {
        workingString = input.substring(i, i + 1) + workingString;
      }
      return workingString;
      break;
    case "number":
      // console.log(`number`);
      let workingNumber = "";
      for (let i = 0; i < String(input).length; i++) {
        workingNumber = String(input).substring(i, i + 1) + workingNumber;
      }
      return Number(workingNumber);
      break;
    case "object":
      if (Array.isArray(input)) {
        // console.log(`array`);
        const workingInput = input;
        const workingArray = [];
        while (workingInput.length > 0) {
          workingArray.push(workingInput.pop());
        }
        return workingArray;
      } else {
        console.log(`input out of scope`);
      }
      break;
    default:
      console.log(`input out of scope`);
  }
}

// Test data
// const test = "Hello";
// const testNumber = 123;
// const myArray = [1, 2, 3];
// const tanner = {
// firstName: 1,
// lastName: 2,
// };
// console.log(reverse(myArray));

// Coding Challenge #1

function printForecast(arr) {
  let outputString = "";
  for (let i = 0; i < arr.length; i++) {
    outputString = outputString + `... ${arr[i]}°C in ${i + 1} days `;
  }
  console.log(outputString);
}

// Test data
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

console.log(printForecast(arr1));
console.log(printForecast(arr2));
