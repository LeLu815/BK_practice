// 자바스크립트는 메모리 초과로 해결이 불가하다

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// const input = [
//     '10'
// ,'5'
// ,'2'
// ,'3'
// ,'1'
// ,'4'
// ,'2'
// ,'3'
// ,'5'
// ,'1'
// ,'7'
// ];

input.shift();

input.sort((a,b)=>a-b);
console.log(input.join('\n'));