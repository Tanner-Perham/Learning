"use strict";

const testData = [];

const numberOfElements = 100000;

for (let i = 0; i < numberOfElements; i++) {
  testData.push(Math.trunc(Math.random() * 10000));
}

export { testData };
