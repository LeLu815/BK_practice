// const input = [
//   "5 11",
//   "baekjoononlinejudge",
//   "startlink",
//   "codeplus",
//   "sundaycoding",
//   "codingsh",
//   "baekjoon",
//   "codeplus",
//   "codeminus",
//   "startlink",
//   "starlink",
//   "sundaycoding",
//   "codingsh",
//   "codinghs",
//   "sondaycoding",
//   "startrink",
//   "icerink",
// ];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [answerNum, testNum] = input[0].split(" ");
const answerList = new Set(input.slice(1, +answerNum + 1));
const testList = input.slice(+answerNum + 1);
let count = 0;
for (let i = 0; i < testList.length; i++) {
  if (answerList.has(testList[i])) {
    count++;
  }
}
console.log(count);
