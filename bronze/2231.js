// const input = "216";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const posibleGap = input.length * 9;
let countingNum = input - posibleGap;

const calculateNum = (num) => {
  return `${num}`.split("").reduce((prev, curr) => prev + +curr, 0) + +num;
};

while (calculateNum(countingNum) !== +input) {
  ++countingNum;
  if (countingNum === +input) {
    countingNum = 0;
    break;
  }
}
console.log(countingNum);
