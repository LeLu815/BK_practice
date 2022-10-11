const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();
const [start, end] = input.split("\n").map(Number);

// const [start, end] = [60, 100];

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

const numList = [];
for(let i=start; i<=end; i++) {
    numList.push(i);
}
const primeList = numList.filter((n)=>isPrime(n));
const answer = primeList.length ? primeList.reduce((a,b)=>a+b) : -1;

if(answer === -1) {
    console.log(answer);
} else {
    console.log(answer);
    console.log(Math.min(...primeList));
}

