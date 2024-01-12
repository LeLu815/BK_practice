// const input = [
//   "4",
//   "Baha enter",
//   "Askar enter",
//   "Baha leave",
//   "Artem enter",
//   "Leein enter",
//   "Leein leave",
// ];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const isHereList = [];
// const isHereObj = {};
// let count = 0;
// for (let i = 1; i < input.length; i++) {
//   const [name, status] = input[i].split(" ");
//   if (status === "enter") {
//     isHereList.unshift(name);
//     ++count;
//     isHereObj[name] = count;
//   } else if (isHereObj[name]) {
//     isHereList[isHereList.length - isHereObj[name]] = "";
//     delete isHereObj[name];
//   }
// }
// console.log(isHereList.filter((value) => value !== "").join("\n"));

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const isHereList = [];
const isHereObj = {};

for (let i = 1; i < input.length; i++) {
  const [name, status] = input[i].split(" ");
  if (status === "enter") {
    isHereObj[name] = true; // 현재 회사에 있는 사람으로 표시
  } else if (status === "leave") {
    delete isHereObj[name]; // 회사를 나간 사람으로 표시 제거
  }
}

const sortedNames = Object.keys(isHereObj).sort().reverse(); // 사전 순으로 역순 정렬

console.log(sortedNames.join("\n"));
