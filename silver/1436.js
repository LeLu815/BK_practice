// const data = ["2", "3", "6", "187", "500"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const getEndMovieNumber = (num) => {
  let count = 0;
  let temperNum = 665;
  if (+num === 1) {
    return "666";
  }
  while (count < num) {
    temperNum++;
    if (temperNum.toString().includes("666")) {
      count++;
    }
  }
  return temperNum;
};
console.log(getEndMovieNumber(input));

// data.forEach((num) => {
//   console.log(getEndMovieNumber(num));
// });
