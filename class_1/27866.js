const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const index = +input[1] - 1;
const result = input[0].split("")[index];
console.log(result);
