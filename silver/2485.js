// const input = [4, 1, 3, 7, 13];
// const input = [4, 2, 6, 12, 18];
// const input = [4, 1, 5, 7, 11];

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const numList = input.slice(1);
const gapList = [];
let smallNum = 10000000000;
numList.reduce((prev, curr) => {
  const newGap = curr - prev;
  if (smallNum > newGap) {
    smallNum = newGap;
  }
  gapList.push(newGap);
  return curr;
});
const smallNumDiverderList = [];
const smallNumSqrt = Math.ceil(Math.sqrt(smallNum));
for (let i = 1; i <= smallNumSqrt; i++) {
  if (smallNum % i === 0) {
    smallNumDiverderList.push(i);
    if (smallNum / i !== smallNumSqrt) {
      smallNumDiverderList.push(smallNum / i);
    }
  }
}
smallNumDiverderList.sort((a, b) => b - a);

for (let i = 0; i < smallNumDiverderList.length; i++) {
  let count = 0;
  let totalCount = 0;
  for (let j = 0; j < gapList.length; j++) {
    totalCount += gapList[j] / smallNumDiverderList[i] - 1;
    if (gapList[j] % smallNumDiverderList[i] !== 0) {
      break;
    } else {
      // 원래는 count가 if else 밖에 존재했는데 이렇게 카운트 하게 되면 마지막 카운트에서 조건을 만족하지 못하게 되서  다음 if에서 break가 실행되어 제출되는 오류를 발생시킨다.
      ++count;
    }
  }
  if (count === gapList.length) {
    console.log(totalCount);
    break;
  }
}
