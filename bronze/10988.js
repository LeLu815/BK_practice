// const input = "baekjoon";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let halfPpint;
let secondList;
let firstList;
const inputList = input.split("");

if (input.length % 2) {
  // 홀수이면
  halfPpint = (input.length - 1) / 2;
  firstList = inputList.slice(0, halfPpint);
  secondList = inputList.slice(halfPpint + 1);
} else {
  // 짝수이면
  halfPpint = input.length / 2;
  firstList = inputList.slice(0, halfPpint);
  secondList = inputList.slice(halfPpint);
}

let result = 1;

for (let i = 0; i < firstList.length; i++) {
  if (firstList[i] !== secondList[firstList.length - 1 - i]) {
    result = 0;
    break;
  }
}

console.log(result);
