"use strict";

import { input } from "./modules/input.js";
// import Model from "./modules/model.js";
import Grid from "./modules/grid.js";
import { dataRead } from "./modules/reader.js";

// Import the data from the input image using a tf model
// const imageDeconstructor = new Model();

const searchGrid = new Grid(await dataRead("./modules/testing/TreesGrid.jpg"));
const searchList = [];
for (let i = 1; i <= 3; i++) {
  searchList.push(...(await dataRead(`./modules/testing/TreesList${i}.jpg`)));
}
console.log(searchGrid);
console.log(searchList);
