// const input = ["3", "3 7", "15 7", "5 2"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const paperPositionsList = input.splice(1);
const pixelList = [];

const pixelFunc = function (nums, list) {
  const [firstNum, secondNum] = nums.split(" ");
  for (let i = +firstNum; i < +firstNum + 10; i++) {
    for (let j = secondNum; j < +secondNum + 10; j++) {
      list.push(`${i}:${j}`);
    }
  }
};
paperPositionsList.forEach((num) => {
  pixelFunc(num, pixelList);
});
console.log(new Set(pixelList).size);
