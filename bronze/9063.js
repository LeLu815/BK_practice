// const input = ["4", "2 1", "3 2", "5 2", "3 4"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const xPositionList = [];
const yPositionList = [];

let xGap;
let yGap;

switch (input[0]) {
  case "1":
    console.log(0);
    break;
  case "2":
    for (let i = 1; i < 3; i++) {
      input[i].split(" ").map((num, index) => {
        if (index === 0) {
          xPositionList.push(num);
        } else {
          yPositionList.push(num);
        }
      });
    }
    xGap = xPositionList.reduce(
      (accumulator, currentValue) => accumulator - currentValue
    );
    yGap = yPositionList.reduce(
      (accumulator, currentValue) => accumulator - currentValue
    );
    console.log(Math.sqrt(Math.pow(xGap * yGap, 2)));
    break;

  default:
    for (let i = 1; i < +input[0] + 1; i++) {
      input[i].split(" ").map((num, index) => {
        if (index === 0) {
          xPositionList.push(num);
        } else {
          yPositionList.push(num);
        }
      });
    }
    xPositionList.sort((a, b) => a - b);
    yPositionList.sort((a, b) => a - b);
    console.log(
      (xPositionList.pop() - xPositionList[0]) *
        (yPositionList.pop() - yPositionList[0])
    );
}
