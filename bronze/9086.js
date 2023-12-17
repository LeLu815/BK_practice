// const input = ["3", "ACDKJFOWIEGHE", "O", "AB"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseList = input.splice(1);
for (let i = 0; i < testCaseList.length; i++) {
  const testLength = testCaseList[i].length;
  switch (testLength) {
    case 1:
      console.log(testCaseList[i].repeat(2));
      break;
    case 2:
      console.log(testCaseList[i]);
      break;
    default:
      const first = testCaseList[i][0];
      const last = testCaseList[i][testLength - 1];
      console.log(first + last);
      break;
  }
}
