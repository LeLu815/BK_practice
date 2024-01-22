const inputNum = 24;

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
// const inputNum = Number(input);

// // 소인수 갯수가 창문의 열고 닫음의 수
// // 홀수이면 열리고 짝수이면 닫힌다
// const getDividerCount = (num) => {
//   const dividerList = [];
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       dividerList.push(i);
//       if (num / i !== Math.sqrt(num)) {
//         dividerList.push(num / i);
//       }
//     }
//   }
//   return dividerList.length % 2 === 1 ? true : false;
// };
// let resultCount = 0;
// for (let i = 1; i <= inputNum; i++) {
//   if (i === 1) {
//     resultCount++;
//   } else {
//     getDividerCount(i) ? resultCount++ : "";
//   }
// }
// console.log(resultCount);

// 숫자가 제곱수일때 창문이 하나씩 생긴다
// 이유는 소인수 갯수는 제곱수를 제외하고는 모두 쌍으로 생기기 때문에 짝이 스스로인 제곱수를 제외하고는 모두 창문이 닫히게 된다.
