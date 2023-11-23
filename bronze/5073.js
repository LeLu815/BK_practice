// const input = ["7 7 7", "6 5 4", "3 2 5", "6 2 6", "0 0 0"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const triangleDistinction = function (numWithSpace) {
  const numList = numWithSpace.split(" ").sort((a, b) => a - b);
  const gap = +numList[0] + +numList[1] - numList[2];
  if (gap < 1) {
    return "Invalid";
  }
  if (numList[0] === numList[2]) {
    return "Equilateral";
  }
  if (numList[0] === numList[1] || numList[1] === numList[2]) {
    return "Isosceles";
  }
  return "Scalene";
};

input.forEach((element, index) => {
  if (index === input.length - 1) {
  } else {
    console.log(triangleDistinction(element));
  }
});
