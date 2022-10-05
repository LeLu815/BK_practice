// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개
const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(' ');

// const input = ['2', '1', '2', '1', '2', '1'];

const chessCountList = [1, 1, 2, 2, 2, 8];
const needValues = chessCountList.map(function(val, index){
    return val-input[index];
})
console.log(needValues.join(' '));
