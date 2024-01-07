/*
어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다.
예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다.
n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.
 */

// const input = ["6", "12", "28", "-1"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const getDivisiors = (num) => {
  const criteria = Math.sqrt(num);
  const divisors_head = [];
  const divisors_tail = [];
  let sum = 0;
  for (let i = 1; i <= criteria; i++) {
    if (num % i === 0) {
      divisors_head.push(i);
      sum += i;

      if (num / i !== i) {
        divisors_tail.unshift(num / i);
        sum += +num / i;
      }
    }
  }
  return [divisors_head.concat(divisors_tail), sum / 2];
};

input.forEach((value, index) => {
  let list, sum;
  if (value !== "-1") {
    [list, sum] = getDivisiors(value);

    if (+value === sum) {
      list.pop();
      console.log(value + " = " + list.join(" + "));
    } else {
      console.log(value + " is NOT perfect.");
    }
  }
});
