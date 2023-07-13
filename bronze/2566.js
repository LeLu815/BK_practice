// const fillZeroNine = new Array(9).fill(0);
// const zeroStrig = fillZeroNine.join(" ");
// const arrList = [];
// for (let i = 0; i < 9; i++) {
//   arrList.push(zeroStrig);
// }

// const arr = `3 23 85 34 17 74 25 52 65
// 10 7 39 42 88 52 14 72 63
// 87 42 18 78 53 45 18 84 53
// 34 28 64 85 12 16 75 36 55
// 21 77 45 35 28 75 90 76 1
// 25 87 65 15 28 11 37 28 74
// 65 27 75 41 7 89 78 64 39
// 47 47 70 45 23 65 3 41 44
// 87 13 82 38 31 12 29 29 80`;
// const arr = arrList.join("\n");

const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim();

const splitList = arr.split("\n");
const temperList = [];

splitList.forEach((list, listIndex) => {
  const rowIndex = parseInt(listIndex) + 1;
  const listToNum = list.split(" ").map(Number);
  const maxNum = Math.max(...listToNum);
  const columnIndex = listToNum.indexOf(maxNum) + 1;
  temperList.push({
    number: maxNum,
    index: [rowIndex, columnIndex],
  });
});

let answerNum = 0;
let answerIndex = [];
temperList.forEach((numberObj) => {
  if (numberObj.number >= answerNum) {
    answerNum = numberObj.number;
    answerIndex = numberObj.index;
  }
});

console.log(answerNum);
console.log(answerIndex.join(" "));
