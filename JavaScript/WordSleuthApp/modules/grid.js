"use strict";

export default function Grid(input) {
  // Methods for reading grid into searchable lists
  const readRows = function (input) {
    return input.map((string) => string.split(""));
  };

  const readColumns = function (rows) {
    const cols = [];
    for (let i = 0; i < rows[0].length; i++) {
      let col = [];
      rows.map((row) => col.push(row[i]));
      cols[i] = col;
    }
    return cols;
  };

  const readDiagonals = function (rows) {
    const diags = [];
    for (let r = 0; r < rows.length; r++) {
      const diag = [];
      for (let i = 0; i < rows.length - r; i++) {
        diag.push(rows[r + i][i] ? rows[r + i][i] : "");
      }
      diags.push(diag);
    }
    const diagsReversed = [...diags.map((string) => [...string].reverse())];
    return [...diags, ...diagsReversed].filter((string) => string.length > 1);
  };

  // Read in the input grid
  this.rows = readRows(input);
  this.cols = readColumns(this.rows);
  this.diags = [...readDiagonals(this.rows), ...readDiagonals(this.cols)];
}
