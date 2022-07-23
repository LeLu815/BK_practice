const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(' ');

console.log(arr[0] === ''? 0 : arr.length);