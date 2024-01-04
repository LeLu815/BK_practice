// 내가 여러번 틀린 이유는 진법을 10진법 이상만 고려하게 되어서 틀렸다.

// // const input = ["60466175", "36"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// const numberOverTenList = [
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
// const getMaxNum = (type, num, list) => {
//   let count = 0;
//   while (num >= Math.pow(type, count) && num >= Math.pow(type, count + 1)) {
//     count++;
//   }
//   const indexNum = parseInt(num / Math.pow(type, count));
//   return [
//     indexNum >= 10 ? list[indexNum - 10] : indexNum,
//     count,
//     num - Math.pow(type, count) * indexNum,
//   ];
// };

// const [num, numType] = input;
// let lastNum = num;
// let resultList;
// let listCount = 1;

// while (lastNum) {
//   const [resultNum, count, restNum] = getMaxNum(
//     numType,
//     lastNum,
//     numberOverTenList
//   );
//   if (listCount === 1) {
//     resultList = Array(count + 1).fill(0);
//   }
//   resultList[resultList.length - count - 1] = resultNum;
//   lastNum = restNum;
//   listCount++;
// }

// console.log(resultList.join(""));

// 디음은 뤼튼이 만든 해결코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const numberOverTenList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const convertToBaseB = (num, base) => {
  let result = "";
  while (num > 0) {
    const remainder = num % base;
    const convertedDigit =
      remainder < 10 ? remainder.toString() : numberOverTenList[remainder - 10];
    result = convertedDigit + result;
    num = Math.floor(num / base);
  }
  return result;
};

const [N, B] = input.map(Number);
const convertedNumber = convertToBaseB(N, B);
console.log(convertedNumber);
