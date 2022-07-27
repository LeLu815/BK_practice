/*
문자열을 하나씩 추가하는 방향으로 가자.
처음 값을 받으면 문자열에서 알파벳 하나씩 때서 중복 확인을 한다 : 중복을 허용하지 않는 셋에 담는다.

for 문을 돌면서 문자열 하나씩 비교하고 결과 문자열을 있으면 1, 없으면 0을 추가해준다. 
0으로 split을 해준 후에 빈 문자열은 제거한다.
이후 갯수를 파악해서 연속인지 아닌지 판명한다.
*/

const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

// 문자열과 한 문자를 받으면 해당 문자가 문자열에 대해 있으면 1, 없으면 0인 문자열을 리턴하는 함수
const isCharExist = function (char, charString) {
    let reuslt = '';
    for (let i of charString) {
        if (char === i) {
            reuslt += '1';
        } else {
            reuslt += '0';
        }
    }
    return reuslt;
}

// 문자열 이진수를 받으면 1이 연속인지 아닌지 출력해주는 함수. 연속이면 1, 아니면 0을 출력한다.
const biContinue = function (biString) {
    const result = biString.split('0').filter((value)=>value!=='');
    if (result.length === 1) {
        return 1;
    } else {
        return 0;
    }
}

let result = 0;

for (let i=1; i<input.length; i++) {
    let count = 1;
    const inputSet = new Set(input[i].split(''));
    for (let j of inputSet) {
        const x = isCharExist(j, input[i]);
        // 만약에 한 문자라도 0이 나오면 연속이 아니기 때문에 0개가 되어야 한다. 모두 1이면 최종 1개 이다.
        count *= biContinue(x);
    }
    result += count;
}

console.log(result);

