const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

// const raw = `250000
// 4
// 20000 5
// 30000 2
// 10000 6
// 5000 8`;

// const input = raw.split('\n');

const receiptTotal = +input[0];
let myTotal = 0;
// const count = input[1];

for (let i=2; i<input.length; i++){
    myTotal += input[i].split(' ').reduce((pre, cur)=> pre*cur, 1);
}

console.log(receiptTotal === myTotal ? 'Yes' : 'No');


