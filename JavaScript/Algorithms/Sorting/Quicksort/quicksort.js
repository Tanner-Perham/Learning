"use strict";

import { testData } from "./testData.js";

console.log(`Unsorted list:`, testData);

const quickSort = function (list) {
  if (list.length <= 1) {
    return list;
  } else {
    const pivot = list.pop();
    const lesser = list.filter((e) => e < pivot);
    const greater = list.filter((e) => e > pivot);

    return [...quickSort(lesser), pivot, ...quickSort(greater)];
  }
};

console.log(`Sorted list: `, quickSort(testData));

export { quickSort };
