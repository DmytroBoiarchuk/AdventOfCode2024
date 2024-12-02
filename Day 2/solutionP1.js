const initialData = require("./initialData.js").initialData;

const parsedData = initialData
  .split("\n")
  .map((line) => line.split(" ").map((num) => +num));

const result = parsedData
  .map((line) => line.map((n, i) => n - line[i + 1]).slice(0, -1))
  .filter(
    (line) =>
      line.every((n) => n > 0 && n < 4) || line.every((n) => n < 0 && n > -4),
  ).length;

console.log(result);
