// const input = "6 3";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [num, index] = input.split(" ").map(Number);
const getDivisors = (num, index) => {
  let count = 0;
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      ++count;
      if (count === index) {
        return divisors;
      }
      if (num / i != i) divisors.push(num / i);
    }
  }
  return divisors;
};

const resultList = getDivisors(num, index);
console.log(resultList.length < index ? 0 : resultList.pop());
