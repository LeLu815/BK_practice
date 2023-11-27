/*
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
        for j <- 1 to n
            for k <- 1 to n
                sum <- sum + A[i] x A[j] x A[k]; # 코드1
    return sum;
}
*/
// const input = "500000";
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let num = BigInt(input);
console.log(`${num * num * num}`);
console.log(3);
