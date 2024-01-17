const input = ["2 7", "3 5"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [first_son, fist_mom] = input[0].split(" ");
const [second_son, second_mom] = input[1].split(" ");

// 먼저 분모의 최소 공배수를 구해야 한다.
const getTheLeastCommonMultiple = (num_1, num_2) => {
  const [small, big] = [num_1, num_2].sort((a, b) => a - b);
  let count = 1;
  while ((big * count) % small !== 0) {
    count++;
  }
  return big * count;
};
// 두 수가 서로소인지 확인하기
const getTwoCoprime = ([num_1, num_2]) => {
  const [small, big] = [num_1, num_2].sort((a, b) => a - b);
  if (num_1 % num_2 === 0) {
    return [num_1 / num_2, 1];
  }
  if (num_2 % num_1 === 0) {
    return [1, num_2 / num_1];
  }
  if (num_1 === 1 || num_2 === 1) {
    return [num_1, num_2];
  }
  let smallSqrt = Math.ceil(Math.sqrt(small));
  let startNum = 2;
  while (startNum <= smallSqrt) {
    if (small % startNum === 0 && big % startNum === 0) {
      return getTwoCoprime([num_1 / startNum, num_2 / startNum]);
    }
    startNum++;
  }
  return [num_1, num_2];
};

const new_mom = getTheLeastCommonMultiple(fist_mom, second_mom);
const new_son =
  (new_mom / fist_mom) * first_son + (new_mom / second_mom) * second_son;

console.log(getTwoCoprime([new_son, new_mom]).join(" "));
