// const input = [
//   "3 4",
//   "ohhenrie",
//   "charlie",
//   "baesangwook",
//   "obama",
//   "baesangwook",
//   "ohhenrie",
//   "clinton",
// ];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [neverHeard, neverSeen] = input[0].split(" ");
const neverHeardSet = new Set(input.slice(1, +neverHeard + 1));
const neverSeenList = input.slice(+neverHeard + 1);
const neverBothList = [];
for (let i = 0; i < neverSeenList.length; i++) {
  if (neverHeardSet.has(neverSeenList[i])) {
    neverBothList.push(neverSeenList[i]);
  }
}
console.log(neverBothList.length);
// 알파벳들이 대소문자가 혼용되어 있어 비교가 잘못되고 있었다. localeCompare을 사용하여 비교해준다.
console.log(neverBothList.sort((a, b) => a.localeCompare(b)).join("\n"));
