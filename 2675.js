const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

const lineNum = +arr[0];

// 단어와 횟수를 받으면 횟수만끔 연속으로 한 문자씩 출력해주는 함수
const continuPrint = function (num, word) {
    let result = '';
    for (let i of word) {
        // word 의 문자 하나씩 가져와 입력받은 num 만큼 반복해줌
        result += i.repeat(num);
    }
    return result;
}

for (let j =1; j<=lineNum; j++) {
    // 구조분해할당. split 사용시 배열로 리턴되며 해당 값들을 변수에 할당함.
    const [count, word] = arr[j].split(' ');
    console.log(continuPrint(count, word))
}