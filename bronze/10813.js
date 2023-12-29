// const input = ["5 4", "1 2", "3 4", "1 4", "2 2"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [numCount, calculateCount] = input[0].split(" ");
const numList = [];
for (let i = 1; i <= numCount; i++) {
  numList.push(i);
}
for (let i = 1; i <= calculateCount; i++) {
  const [first, second] = input[i].split(" ");
  [numList[first - 1], numList[second - 1]] = [
    numList[second - 1],
    numList[first - 1],
  ];
}
console.log(numList.join(" "));
