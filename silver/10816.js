// const input = ["10", "6 3 2 10 10 10 -10 -10 7 3", "8", "10 9 -5 2 3 4 5 -10"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sangGeunOb = {};
input[1].split(" ").forEach((value, index) => {
  if (sangGeunOb[value]) {
    // 값이 있으면
    sangGeunOb[value] += 1;
  } else {
    // 값이 없으면
    sangGeunOb[value] = 1;
  }
});
const answer = input[3]
  .split(" ")
  .map((value) => (sangGeunOb[value] ? sangGeunOb[value] : 0))
  .join(" ");
console.log(answer);
