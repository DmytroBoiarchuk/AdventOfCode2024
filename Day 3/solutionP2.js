const initialData = require("./initialData.js").initialData;

const regExp = /mul\(\d{1,3},\d{1,3}\)/g;

const result = initialData
  .split("do()")
  .map((toDo) => toDo.split("don't()"))
  .map((rest) => rest[0])
  .map((mul) =>
    mul
      .match(regExp)
      .map((mul) => mul.slice(4, -1))
      .map((pair) => pair.split(",").map((n) => +n))
      .reduce((a, b) => a + b[0] * b[1], 0),
  )
  .reduce((a, b) => a + b);

console.log(result);
