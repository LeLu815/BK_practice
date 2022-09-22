// const fs = require("fs");
// const input = fs
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim()
//     .split(' ');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const go = +input[0];
const back = +input[1];
const goal = +input[2];

console.log(Math.ceil((goal-back)/(go-back)));

// let value = 0;
// let period = 0;
// const go = +input[0];
// const back = +input[1];
// const goal = +input[2];

// while(value < goal) {
//     value += go;
//     period++;
//     if (value >= goal) {
//         break;
//     }
//     value -= back;
// }

console.log(period);