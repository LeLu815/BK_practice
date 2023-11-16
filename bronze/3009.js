const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const xPositionObject = {};
const yPositionObject = {};

for (let i = 0; i < input.length; i++) {
  input[i].split(" ").map((num, index) => {
    if (index % 2) {
      if (yPositionObject[num]) {
        delete yPositionObject[num];
      } else {
        yPositionObject[num] = num;
      }
    } else {
      if (xPositionObject[num]) {
        delete xPositionObject[num];
      } else {
        xPositionObject[num] = num;
      }
    }
  });
}

console.log(
  [...Object.values(xPositionObject), ...Object.values(yPositionObject)].join(
    " "
  )
);
