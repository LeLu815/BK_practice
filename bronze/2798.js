// const input = ["5 21", "5 6 7 8 9"];
// const input = ["10 500", "93 181 245 214 315 36 185 138 216 295"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [numCount, targetNum] = input[0].split(" ");
const numList = input[1].split(" ");
const resultList = [];

numList.forEach((num, index) => {
  for (let i = index + 1; i < numCount; i++) {
    for (let j = i + 1; j < numCount; j++) {
      const sumResult = +num + +numList[i] + +numList[j];
      if (sumResult <= targetNum) {
        resultList.push(sumResult);
      } else {
        continue;
      }
    }
  }
});

console.log(Math.max(...resultList));
