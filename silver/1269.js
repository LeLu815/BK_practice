const input = ["3 5", "1 2 4", "2 3 4 5 6"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [fistListNum, secondListNum] = input[0].split(" ");
const [fistList, secondList] = input.slice(1).map((value) => value.split(" "));
const sumCount = new Set(fistList.concat(secondList)).size;
console.log(
  +fistListNum + +secondListNum - (+fistListNum + +secondListNum - sumCount) * 2
);
