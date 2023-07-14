// const test_1 = `1 2 3 4 5 6 7 8`;
// const test_2 = `8 7 6 5 4 3 2 1`;
// const test_3 = `8 1 7 2 6 3 5 4`;
// const input = test_3.split(" ");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let answer;
switch (input[0]) {
  case "1":
    for (let i = 1; i < input.length; i++) {
      if (input[i] - input[i - 1] !== 1) {
        answer = "mixed";
        break;
      }
    }
    answer = answer ? answer : "ascending";
    break;
  case "8":
    for (let i = 1; i < input.length; i++) {
      if (input[i - 1] - input[i] !== 1) {
        answer = "mixed";
        break;
      }
    }
    answer = answer ? answer : "descending";
    break;
}
console.log(answer ? answer : "mixed");
