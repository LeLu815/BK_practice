function isPrime(n) {
  if (n === 2) return true;
  if (n < 2 || n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // 차피 짝수는 무조건 아니니까 2씩 더하기
    if (n % i === 0) return false;
  }
  return true;
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a, i) => {
    // 첫 번째 수는 테스트 케이스 개수이므로 생략
    if (i === 0) return a;
    const curNum = Number(a);
    for (let i = curNum; ; i++) {
      // 주어진 수는 0부터니까 1까지는 무조건 2를 반환하면 된다.
      if (i <= 1) return 2;
      if (isPrime(i)) {
        return i;
      }
    }
  });

// 첫번쨰 수는 갯수니까 빼주기
input.shift();
const result = input.join("\n");
console.log(result);
