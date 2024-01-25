// const input = ["5", "4 5 1 3 2"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const maxCount = +input[0];
const unsortedLineList = input[1].split(" ").reverse();
const stackList = [];
let answer = "Nice";
for (let i = 1; i <= maxCount; i++) {
  const stackLength = stackList.length;
  if (stackLength !== 0 && stackList[stackLength - 1] === i) {
    stackList.pop();
  } else {
    let isFind = false;
    while (unsortedLineList.length !== 0) {
      const unsortNum = +unsortedLineList.pop();
      if (unsortNum === i) {
        isFind = unsortNum;
        break;
      } else {
        stackList.push(unsortNum);
      }
    }
    if (!isFind) {
      answer = "Sad";
      break;
    }
  }
}
console.log(answer);
