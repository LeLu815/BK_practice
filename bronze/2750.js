const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');
    // .map((n)=>parseInt(n));

// const input = ['5','5','2','3','4','1'];

const index = input.shift();
const newInput = input.map((n)=>parseInt(n)).sort((a,b)=>a-b).map((n)=>{
    console.log(n);
    return;
});