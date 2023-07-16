// const arr = `13
// but
// i
// wont
// hesitate
// no
// more
// no
// more
// it
// cannot
// wait
// im
// yours`;
// const input = arr.split("\n");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
const repeatRemoveList = Array.from(new Set(input));
repeatRemoveList.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
});
repeatRemoveList.forEach((word) => console.log(word));
