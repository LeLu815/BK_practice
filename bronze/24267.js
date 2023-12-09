/*
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 2
        for j <- i + 1 to n - 1
            for k <- j + 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
}
*/

// const input = "7";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let result = 0;
let bigResult = BigInt(result);

for (let i = 1; i <= input - 2; i++) {
  repeatByI = ((+input - i) / 2) * (+input - i - 1);
  bigResult += BigInt(repeatByI);

  // for (let j = i + 1; j <= input - 1; j++) {
  //   result += input - j;
  //   console.log(input - j);
  // }
}
console.log(`${bigResult}`);
console.log(3);

// 숫자가 크면 표기가 안된다는 점과 빅인트는 인트와 연산이 안되며 문자열로 바꿔줘야 숫자처럼 나온다.
