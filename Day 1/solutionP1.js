const initialData = require("./initialData").initialData;
const left = [];
const right = [];
const example =
  "3   4\n" + "4   3\n" + "2   5\n" + "1   3\n" + "3   9\n" + "3   3";
initialData.split("\n").map((row) => row.split("   ").map((num, index) => index %2 === 0? left.push(+num): right.push(+num)));
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);
const result = left.map((num, index) => Math.abs(num - right[index])).reduce((a, b) => a + b);

console.log(result)

module.exports={
    left,
    right
}
