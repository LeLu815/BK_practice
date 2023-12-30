// const input = [
//   "3",
//   "1",
//   "4",
//   "5",
//   "7",
//   "9",
//   "6",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
//   "21",
//   "22",
//   "23",
//   "24",
//   "25",
//   "26",
//   "27",
//   "28",
//   "29",
//   "30",
// ];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const range = new Set([...Array(30)].map((v, i) => i + 1));
input.forEach((v) => range.delete(+v));

console.log([...range].join("\n"));
