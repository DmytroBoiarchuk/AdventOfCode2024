const initialData = require("./initialData.js").initialData;

const example =
  "MMMSXXMASM\n" +
  "MSAMXMSMSA\n" +
  "AMXSXMAAMM\n" +
  "MSAMASMSMX\n" +
  "XMASAMXAMM\n" +
  "XXAMMXXAMA\n" +
  "SMSMSASXSS\n" +
  "SAXAMASAAA\n" +
  "MAMMMXMMMM\n" +
  "MXMXAXMASX";

const dirs = [{ x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 },];
const wordToLookup = "MAS";
let counter = 0;

const matrix = initialData.split("\n").map((l) => l.split(""));
matrix.map((line, indexLine) =>
  line.forEach((symbol, indexCol) => {
    if (symbol === "X") {
      lookForXMAS(indexLine, indexCol);
    }
  }),
);
function lookForXMAS(x, y) {
  dirs.forEach((dir) => {
    if (
        matrix[x + dir.x]?.[y + dir.y] +
        matrix[x + dir.x * 2]?.[y + dir.y * 2] +
        matrix[x + dir.x * 3]?.[y + dir.y * 3]
        === wordToLookup
    ) {
      counter++;
    }
  });
}
console.log(counter);
