// const fs = require("fs");
// const arr = fs.readFileSync("/dev/stdin").toString().trim();

const lineNum = `3 5
1 1 1 -1 0
2 2 2 0 10
0 1 0 4 3
3 3 3 2 4
4 4 4 5 -2
5 5 100 0 5`;

const numList = lineNum.split("\n");
const [lineSize, columnSize] = numList[0].split(" ");

const firstLine = numList.slice(1, +lineSize + 1);
const secondLine = numList.slice(+lineSize + 1);

const resultList = [];

for (let i = 0; i < lineSize; i++) {
  const lineNumList = firstLine[i].split(" ");
  const columnNumList = secondLine[i].split(" ");
  const resultLine = [];

  for (let j = 0; j < columnSize; j++) {
    resultLine.push(+lineNumList[j] + +columnNumList[j]);
  }
  resultList.push(resultLine);
}

for (let i = 0; i < lineSize; i++) {
  console.log(resultList[i].join(" "));
}
