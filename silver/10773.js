// const input = ["10", "1", "3", "5", "4", "0", "0", "7", "0", "0", "6"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const resultList = [];
for (let i = 1; i <= input[0]; i++) {
  if (input[i] === "0") {
    resultList.pop();
  } else {
    resultList.push(+input[i]);
  }
}
if (resultList.length === 0) {
  console.log("0");
} else {
  console.log(resultList.reduce((acc, num) => acc + num));
}
