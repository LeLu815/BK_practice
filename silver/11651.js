// const input = ["5", "0 4", "1 2", "1 -1", "2 2", "3 3"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const newList = input.slice(1);
newList.sort((a, b) => {
  const [a_start, a_end] = a.split(" ").map(Number);
  const [b_start, b_end] = b.split(" ").map(Number);
  if (a_end !== b_end) {
    return a_end - b_end;
  } else {
    return a_start - b_start;
  }
});
console.log(newList.join("\n"));
