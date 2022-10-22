// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const input = ['5','5','4','3','2','1'];
input.shift()
const answer = input.sort((a,b)=>a-b);
console.log(answer.join('\n'));