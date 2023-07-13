// const arr = `AABCDD
// afzz
// 09121
// a8EWg6
// P5h3kx`;

const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim();

const splitList = arr.split("\n").map((list) => list.split(""));
const resultList = [];

for (let i = 0; i < 15; i++) {
  let isFinished = 0;
  for (let j = 0; j < splitList.length; j++) {
    try {
      if (splitList[j][i]) {
        resultList.push(splitList[j][i]);
      }
    } catch (error) {
      ++isFinished;
    }
  }
  if (isFinished === splitList.length) {
    break;
  }
}
console.log(resultList.join(""));

// console.log("Aa0aPAf985Bz1EhCz2W3D1gkD6x");
