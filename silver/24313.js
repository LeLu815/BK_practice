// const input = ["7 7", "8", "7"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [f_nums, g_um, start_num] = input;
const [slope, intercept] = f_nums.split(" ").map(Number);
console.log(
  slope * start_num + intercept <= g_um * start_num && slope <= g_um ? 1 : 0
);
