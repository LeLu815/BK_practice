// const input = [5, 6, 8, 10, 12, 100];

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const numList = input.slice(1);
const maxNum = Math.max(...numList);
const primeList = new Array(maxNum + 1).fill(true);
primeList[0] = false;
primeList[1] = false;
for (let i = 2; i * i <= maxNum; i++) {
  //제곱근까지만 반복
  if (primeList[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      //반복을 i * i 부터 시작하는 것은 그 이전의 값은 j이전의 수에서 이미 확인했기 때문
      primeList[j] = false; //배수이므로 소수가 아닌것으로 만든다.
    }
  }
}

const resultList = [];
numList.forEach((value) => {
  let count = 0;
  if (primeList[2] && primeList[value - 2]) {
    count++;
  }
  for (let i = 3; i <= value / 2; i += 2) {
    if (primeList[i] && primeList[value - i]) {
      count++;
    }
  }
  resultList.push(count);
});
console.log(resultList.join("\n"));
// const isPrime = (num) => {
//   if (num === 2) {
//     return true;
//   }
//   if (num <= 1 || num % 2 === 0) {
//     return false;
//   }
//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     // 차피 짝수는 무조건 아니니까 2씩 더하기
//     if (num % i === 0) return false;
//   }
//   return true;
// };
