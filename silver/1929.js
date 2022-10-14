const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(' ');

// const input = ['3', '16'];

const [start, end] = input;
const betweenNumList = [];
for (let i = +start; i<=end; i++) {
    betweenNumList.push(i);
}

const isPrime = (n) => {
    if (n === 1) {
        return false;
    }
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}
const answerList = betweenNumList.filter((n)=>isPrime(n));

for(let i of answerList) {
    console.log(i);
}