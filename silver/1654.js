const data = `4 11
802
743
457
539`;
const input = data.split("\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [lineCount, lineCountGoal] = input;
// const lineList = input.slice(1);
// const minLine = Math.min(...lineList);
// console.log(minLine);
let maxLine = input[2];
let minLine = input[2];
let lineCount;
let lineCountGoal;
const allLine = input.reduce((pre, curr, index) => {
  switch (index) {
    case 0:
      lineCount = curr;
      break;
    case 1:
      lineCountGoal = curr;
      break;
  }
  maxLine = maxLine >= curr ? maxLine : curr;
  minLine = minLine <= minLine ? minLine : curr;
  return pre + curr;
}, 0);
