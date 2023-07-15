// const data = `10 10
// BBBBBBBBBB
// BBWBWBWBWB
// BWBWBWBWBB
// BBWBWBWBWB
// BWBWBWBWBB
// BBWBWBWBWB
// BWBWBWBWBB
// BBWBWBWBWB
// BWBWBWBWBB
// BBBBBBBBBB`;
// const input = data.split("\n");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [size_height, size_width] = input.shift().split(" ");
const answerSheet = ["BWBWBWBW", "WBWBWBWB"];
const settingInput = (input) => {
  const resultList = [];
  for (let i = 0; i <= size_height - 8; i++) {
    for (let j = 0; j <= size_width - 8; j++) {
      if (resultList.includes(0)) {
        break;
      }
      for (let flip = 0; flip < 2; flip++) {
        let count = 0;
        for (let x = 0; x < 8; x++) {
          for (let y = 0; y < 8; y++) {
            const curruntValue = input[i + x][j + y];
            curruntValue !== answerSheet[(flip + x) % 2][y] ? ++count : count;
          }
        }
        resultList.push(count);
        if (count === 0) {
          break;
        }
      }
    }
  }
  return resultList;
};
console.log(Math.min(...settingInput(input)));
