
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");

let step =  1;
let numResult = 1;

while(+input > numResult) {
    numResult += step*6
    step++;
}
console.log(step);