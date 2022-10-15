const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

// const input = ['1','10','13','100','1000','10000','100000','0'];
const numberInput = input.map((n)=>parseInt(n));

const isPrime = (n) => {
    if (n === 1) {
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}


const countPrime = (n) => {
    const start = n+1;
    const end = n*2;

    let list = [];
    for (let i=start; i<=end; i++) {
        list.push(i);
    }
    list = list.filter((n)=>isPrime(n));
    return list.length;
}

let index = 0;

while(numberInput[index]) {
    console.log(countPrime(numberInput[index]));
    index++
}