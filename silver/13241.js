// const input = [121n, 199n];
// 최소공배수 구하기, 빅인트 사용할 것.
// 최소 공배수는 약수 중에서 공통된 것 * 서로 다른것 모두

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .sort((a, b) => a - b)
  .map(BigInt);
const [small, big] = input;
let theLeasetCommanMultiple = big;
let count = 1n;
while ((theLeasetCommanMultiple * count) % small !== 0n) {
  count++;
}
console.log(`${theLeasetCommanMultiple * count}`);
