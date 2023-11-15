const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const resultList = [];
const oddList = [];
const evenList = [];
for (let i = 0; i < input.length; i++) {
  if (i % 2 !== 1) {
    if (i < 2) {
      oddList.push(parseInt(input[i]));
      resultList.push(parseInt(input[i]));
    } else {
      resultList.push(
        Math.sqrt(Math.pow(oddList.pop() - parseInt(input[i]), 2))
      );
    }
  } else {
    if (i < 2) {
      evenList.push(parseInt(input[i]));
      resultList.push(parseInt(input[i]));
    } else {
      resultList.push(
        Math.sqrt(Math.pow(evenList.pop() - parseInt(input[i]), 2))
      );
    }
  }
}

console.log(Math.min(...resultList));
