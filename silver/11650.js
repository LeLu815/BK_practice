// const input = ["5", "3 4", "1 1", "1 -1", "2 2", "3 3"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const newList = input.slice(1);
newList.sort((a, b) => {
  const [a_start, a_end] = a.split(" ").map(Number);
  const [b_start, b_end] = b.split(" ").map(Number);
  if (a_start !== b_start) {
    return a_start - b_start;
  } else {
    return a_end - b_end;
  }
});
console.log(newList.join("\n"));
