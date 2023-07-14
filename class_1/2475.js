// const input = ["0", "4", "2", "5", "6"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let sum = 0;
input.forEach((num) => {
  sum += num ** 2;
});

console.log(sum % 10);
