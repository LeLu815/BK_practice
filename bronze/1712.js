const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(' ');

/* 
let num = 0;
// while 조건문 안의 값이 거짓이 될때 멈추게 된다.
while (+input[0] + (+input[1]*num) >= (+input[2]*num)) {
    num++;
    if (input[1] > input[2]) {
        num = -1;
        break;
    }
}
console.log(num);
숫자를 하나씩 올리게 되면 연산속도가 늦는다
*/

// 고정비용을 판매비용-생산비용으로 나눈후 해당 값을 내림 후 1을 더해주어 손익분기점 개수를 자연수로 만들어준다
// 판매-생산이 음수을 경우 -1을 출력한다.

// 입력값을 숫자타입으로 넣어줄 것.
const breakEvenPointFunc = function (fixedCost, variableCost, sellingCost) {
    const pureIncome = sellingCost - variableCost;
    if (pureIncome<=0) {
        return -1;
    }
    return Math.floor(fixedCost/pureIncome) + 1;
}

const result = breakEvenPointFunc(+input[0], +input[1], +input[2]);
console.log(result);
