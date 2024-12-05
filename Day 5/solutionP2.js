const initialData = require("./initialData.js").initialData;

let counter = 0;
let [rules, orders] = initialData.split("\n\n");
rules = rules.split("\n").map((rule) => rule.split("|").map((n) => +n));
orders = orders.split("\n").map((order) => order.split(",").map((n) => +n));

orders.map((order) => {
  const filtered = order.map((page) =>
    rules.filter((rule) => page === rule[0] || page === rule[1]),
  );

  checkOrder(order, filtered);
});

function findPair(array, pair) {
  return (
    array.find((item) => item[0] === pair[0] && item[1] === pair[1]) || false
  );
}

function checkOrder(order, rules) {
  let newOrder;
  let valid = true;
  order.forEach((page, index) =>
    rules[index].forEach((rule) => {
      if (rule.findIndex((el) => el === page) === 0) {
        if (
          order.findIndex((el) => el === rule[1]) < index &&
          order.findIndex((el) => el === rule[1]) !== -1
        ) {
          valid = false;
        }
      }
      if (rule.findIndex((el) => el === page) === 1) {
        if (
          order.findIndex((el) => el === rule[0]) > index &&
          order.findIndex((el) => el === rule[0]) !== -1
        ) {
          valid = false;
        }
      }
    }),
  );
  if (!valid) {
    const reducedRules = rules.reduce((acc, curr) => [...acc, ...curr], []);
    newOrder = order.sort((a, b) => (findPair(reducedRules, [a, b]) ? -1 : 1));
    counter += newOrder[Math.floor(order.length / 2)];
  }
}

console.log(counter);
