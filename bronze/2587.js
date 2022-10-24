const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

// const input = ['10','40','30','60','30'];
// console.log((input.reduce((a,b)=>a+b))/input.length);
console.log((input.reduce((a,b)=>+a + +b)/input.length));
input.sort((a,b)=>a-b);
console.log(input[Math.floor(input.length / 2)]);

