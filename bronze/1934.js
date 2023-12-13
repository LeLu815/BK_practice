// const input = ["3", "1 45000", "6 10", "13 17"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let resultList = [];
const numList = input.splice(1);

const getGCDwithWhile = (num1, num2) => {
  while (num1 % num2 !== 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }
  return num2;
};

numList.forEach((numString) => {
  const [firstNum, secondNum] = numString
    .split(" ")
    .map((item) => Number(item));
  const gcd = getGCDwithWhile(firstNum, secondNum);
  resultList.push((firstNum * secondNum) / gcd);
});

console.log(resultList.join("\n"));
