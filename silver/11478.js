// const input = "ababc";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const stringLenght = input.length;
let portionStringSet = new Set();
for (let i = 1; i <= stringLenght; i++) {
  // substring
  for (let j = 0; j <= stringLenght - i; j++) {
    portionStringSet.add(input.substring(j, j + i));
  }
}
console.log(portionStringSet.size);
