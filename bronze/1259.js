// const data = `121
// 1231
// 12421
// 0`;
// const input = data.split("\n");
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.forEach((element) => {
  const elementNumber = parseInt(element);
  const elementReverse = parseInt(element.split("").reverse().join(""));
  let isConsoled = false;
  switch (elementNumber) {
    case 0:
      isConsoled = true;
      break;
    case elementReverse:
      console.log("yes");
      isConsoled = true;
      break;
  }
  if (!isConsoled) {
    console.log("no");
  }
});
