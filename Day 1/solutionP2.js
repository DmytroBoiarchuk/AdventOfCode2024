const { left, right } = require("./solutionP1");


const result = left.map(l => right.map(r => l === r ? 1 : 0).reduce((a, b) => a + b) * l).reduce((a, b) => a + b);
console.log(result);