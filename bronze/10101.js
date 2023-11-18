// const input = ["60", "70", "50"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sidesSet = new Set();
const sideSum = input.reduce((acc, curr) => {
  sidesSet.add(curr);
  return +acc + +curr;
}, 0);

if (sideSum === 180) {
  switch (sidesSet.size) {
    case 1:
      console.log("Equilateral");
      break;
    case 2:
      console.log("Isosceles");
      break;
    case 3:
      console.log("Scalene");
      break;
  }
} else {
  console.log("Error");
}
