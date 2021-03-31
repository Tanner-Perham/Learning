"use strict";

// import Model from "./modules/model.js";
import Grid from "./modules/grid.js";

// Import the data from the input image using a tf model

// const imageDeconstructor = new Model();

// Test data
const input = ["abcde", "efghi", "ijklm"];

const searchGrid = new Grid(input);

console.log(searchGrid);
