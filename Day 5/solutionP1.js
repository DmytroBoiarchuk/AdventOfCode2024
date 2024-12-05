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

function checkOrder(order, rules) {
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
  if (valid) {
    counter += order[Math.floor(order.length / 2)];
  }
}

console.log(counter);
