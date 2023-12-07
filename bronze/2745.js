// const input = ["ZZZZZ", "36"];

// const numsToDecimal = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [number, system] = input;
const myLength = number.length;
let result = 0;

number.split("").forEach((num, index) => {
  if (isNaN(num)) {
    // 문자열이면
    result += Math.pow(+system, myLength - 1 - index) * (num.charCodeAt() - 55);
  } else {
    // 숫자이면
    result += Math.pow(+system, myLength - 1 - index) * num;
  }
});

console.log(result);
