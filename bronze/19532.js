// const input = [1, 3, -1, 4, 1, 7];

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c, d, e, f] = input;

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y == c && d * x + e * y == f) {
      console.log(x + " " + y);
      break;
    }
  }
}
