const initialData = require("./initialData.js").initialData;

const example =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const regExp = /mul\(\d{1,3},\d{1,3}\)/g;

const result = initialData
  .match(regExp)
  .map((mul) => mul.slice(4, -1))
  .map((pair) => pair.split(",").map((n) => +n))
  .reduce((a, b) => a + b[0] * b[1], 0);
console.log(result);
