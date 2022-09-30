const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

// const input = ['4', '1 3 5 7'];

// 1부터 1000까지 담긴 리스트를 만든다
let primeList = new Array(1000);
primeList.fill(1).reduce((pre, current, curInex)=>{
    primeList[curInex] = pre +current;
    return pre +current
});
primeList.shift();

// 리스트 안에서 숫자를 하나씪 늘려가면서 해당 숫자의 배수를 지운다.
for(let i=2; i<=primeList.length+1; i++) {
    if (primeList.includes(i)) {
        // console.log(i);
        primeList = primeList.filter((num)=>num%i !== 0);
        primeList.push(i);
        // console.log(primeList.length);
    }
}

const values = input[1].trim().split(' ');
let count = 0;

for (let value of values ) {
    if (primeList.includes(+value)) {
        count++;
    }
}
console.log(count);