// const input = "5";

// 단계 한번을 거치면 변의 갯수가 2배가 된다 최초는 한변의 갯수가 1, 1단계를 거치면 2, 2단계를 거치면 4....
// 꼭짓점의 개수는 변의 갯수 + 1 의 제곱 개가 된다.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const sideCount = Math.pow(2, input) + 1;
console.log(sideCount * sideCount);
