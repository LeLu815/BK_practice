/*
첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 정수가 공백으로 구분되어져있다. 
셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 
입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.
*/

// const input = ["11", "1 4 1 -2 4 2 4 -2 3 0 -4", "1"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numList = input[1].split(" ");
const wantToFind = input[2];
let result = 0;
numList.forEach((num) => {
  if (num === wantToFind) {
    result++;
  }
});
console.log(result);
