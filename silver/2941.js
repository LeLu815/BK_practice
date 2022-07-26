const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const croatianAlphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

// 문자열과 검색하고 싶은 문자를 넣으면 존재여부 및 개수를 리턴하는 함수
const countAlphabet = function (strings, alphabet) {
    let count = 0;
    if (strings.includes(alphabet) === true) {
        count = strings.split(alphabet).length;
    } else {
        return 0;
    }
    return count-1;
}
let countNumOut = 0;
const inputLen = input.length;
// 함수를 통해 크로아티아 알파벳을 리스트에서 하나씩 꺼내와 함수에 넣는다
for (let i=0; i<croatianAlphabet.length; i++) {
    // 크로아티아 알파벳은 두세개가 한 문자으므로 갯수와 문자수를 파악후 중복되는 카운트를 전체 문자열 수에서 제외해야한다.
    const amount = countAlphabet(input, croatianAlphabet[i]);
    // 문자열 개수가 두 개일 때와 세 개일 때
    if (croatianAlphabet[i].length === 2 ){
        countNumOut += (amount * (croatianAlphabet[i].length-1));
    } else {
        countNumOut += (amount * (croatianAlphabet[i].length-2));
    }
    
} 
console.log(inputLen-countNumOut);