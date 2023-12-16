// const input = ["5 4", "1 2 3", "3 4 4", "1 4 1", "2 2 2"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [bucketCount, executionCount] = input[0].split(" ");
const resultList = new Array(+bucketCount).fill(0);
const executionList = input.splice(1);

for (let i = 0; i < executionList.length; i++) {
  const [startIdx, endIdx, num] = executionList[i].split(" ");
  const repeatCount = endIdx - startIdx + 1;
  const addList = new Array(+repeatCount).fill(num);
  resultList.splice(startIdx - 1, repeatCount, ...addList);
}

console.log(resultList.join(" "));
