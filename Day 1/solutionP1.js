const initialData = require("./initialData").initialData;
const left = [];
const right = [];

initialData
  .split("\n")
  .map((row) =>
    row
      .split("   ")
      .map((num, index) =>
        index % 2 === 0 ? left.push(+num) : right.push(+num),
      ),
  );
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);
const result = left
  .map((num, index) => Math.abs(num - right[index]))
  .reduce((a, b) => a + b);

console.log(result);

module.exports = {
  left,
  right,
};
