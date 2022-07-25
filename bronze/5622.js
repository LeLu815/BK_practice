const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();


const dial = {
    ABC : 3,
    DEF : 4,
    GHI : 5,
    JKL : 6,
    MNO : 7,
    PQRS : 8,
    TUV : 9,
    WYXZ : 10
}
let count = 0;
for (let i of input) {
    for (let alphabets in dial) {
        if (alphabets.includes(i)) {
            count += dial[alphabets];
        }
    }
}

console.log(count)