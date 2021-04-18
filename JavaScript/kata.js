"use strict";

function squareDigits(num) {
  return +String(num)
    .split("")
    .reduce((acc, n) => `${acc}` + `${(+n) ** 2}`, "");
}

// console.log(squareDigits(626));

function isPangram(string) {
  const alphabet = new Set(
    "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").sort()
  );

  const input = new Set(
    string.replace(/\s+/g, "").replace(/\./g, "").toUpperCase().split("").sort()
  );
  return [...alphabet].join("") === [...input].join("");
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const out = [];
  let prev;
  iterable.split("").map((cur) => {
    if (cur !== prev) {
      out.push(cur);
      prev = cur;
    }
  });
  return out;
};

console.log(uniqueInOrder("aaawwwhhh"));
