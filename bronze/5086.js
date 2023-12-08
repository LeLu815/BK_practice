// const input = ["8 16", "32 4", "17 5", "0 0"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((num) => {
  const [num_1, num_2] = num.split(" ");
  if (num_1 === "0") {
    return;
  }
  if (num_1 - num_2 < 0) {
    console.log(num_2 % num_1 === 0 ? "factor" : "neither");
  } else {
    console.log(num_1 % num_2 === 0 ? "multiple" : "neither");
  }
});
