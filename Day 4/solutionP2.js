const initialData = require("./initialData.js").initialData;
const dirs = [{ x: -1, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 },];
const possibleSets = "MMSS,SSMM,SMMS,MSSM";
let counter = 0;

const matrix = initialData.split("\n").map((l) => l.split(""));
matrix.map((line, indexLine) =>
  line.forEach((symbol, indexCol) => {
    if (symbol === "A") {
      lookForX_MAS(indexLine, indexCol);
    }
  }),
);
function lookForX_MAS(x, y) {
  const word = dirs
    .map((dir) => {
      if (
        matrix[x + dir.x]?.[y + dir.y] === "S" ||
        matrix[x + dir.x]?.[y + dir.y] === "M"
      ) {
        return matrix[x + dir.x]?.[y + dir.y];
      }
      return "";
    })
    .join("");
  if (possibleSets.includes(word) && word.length === 4) {
    counter++;
  }
}
console.log(counter);

// M   S            S   M             S   S            M   M
//   A                A                 A                A
// M   S            S   M             M   M            S   S    MMSS, SSMM, SMMS, MSSM
