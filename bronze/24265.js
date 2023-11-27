// ```
// MenOfPassion(A[], n) {
//   sum <- 0;
//   for i <- 1 to n - 1
//       for j <- i + 1 to n
//           sum <- sum + A[i] x A[j]; # 코드1
//   return sum;
// }
// ```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const counterFunc = function (n) {
  const num = parseInt(n);
  let conunter = 0;
  for (let i = 0; i < num - 1; i++) {
    conunter += num - (i + 1);
  }
  return conunter;
};

console.log(`${counterFunc(input)}\n2`);
