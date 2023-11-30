// const input = "4";
// const input = "20";
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const count = parseInt(input) / 4;
const middleChar = new Array(count);
middleChar.fill("long");
const result = `${middleChar.join(" ")} int`;
console.log(result);

// String.prototype.repeat() 을 사용하면 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
// console.log(`${"long ".repeat(+input/4)}int`);
