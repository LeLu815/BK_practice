const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphaLen = alphabet.length;

let result = '';

// 단어를 받으면 해당 단어의 인덱스를 리턴해주는 함수
const checkIndex = function(word) {
    // 알파벳의 요소를 하나씩 꺼내옴(문자열도 리스트의 성질을 가지고 있음)
    for (let i of alphabet) {
        // indexOf 함수는 있으면 인덱스, 없으면 -1을 반환
        const idx = word.indexOf(i);
        // result에 넣어줄 때 한칸을 띄워야한다
        result += `${idx} `;
    }
}
// 함수실행
checkIndex(arr);

// 맨 마지막 띄어쓰기 삭제를 위한 트림.
console.log(result.trim());