const input = ["1", "2", "3"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b, c] = input.map((n) => parseInt(n)).sort((a, b) => a - b);
if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log(2 * (a + b) - 1);
}
