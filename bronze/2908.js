const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(' ');

// 문자열의 숫자를 받으면 자리수를 거꾸로 만들어 리턴해주는 함수
const reverseNum = function (numString) {
    const reverse = numString.split('').reverse().join('');
    return +reverse;
}

// 두 숫자를 리스트로 받으면 크기가 큰 숫자를 리턴해주는 함수(크기가 같은 수는 제외한다.)
const compareNum = function (numList) {
    return numList[0] < numList[1] ? numList[1] : numList[0];
}

// map함수를 통해서 리스트로 묶어 리턴
const num = input.map((numString)=>reverseNum(numString));
console.log(compareNum(num));
