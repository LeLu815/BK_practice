// const fs = require("fs");
// const input = fs
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim()
//     .split(' ');

/**
 * 생각없이 while 문을 돌리게 되면 시간초과가 난다
 * 올라갔다 내려오는데 한번 끝까지 올라가면 내려오지 않으니 총 몇일이 걸리는지 계산을 해볼 때
 * 올라간 길이 - 내려간 길이 한 값을 총 가야할 길이에서 나눠 된다.
 * 여기서 주의할 점은 마지막에 미끄러지지 않는데 위와 같이 그냥 나눠주면 올라갔다가 미끄러지는 것까지 계산된 값이 되므로
 * 실제로 그렇게 날짜를 계산하고 싶으면 총 길이에서 마지막에 미끄러진다고 가정하여 빼준 값을 가야할 총 길이로 구해주면 된다.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const go = +input[0];
const back = +input[1];
const goal = +input[2];

console.log(Math.ceil((goal-back)/(go-back)));

// let value = 0;
// let period = 0;
// const go = +input[0];
// const back = +input[1];
// const goal = +input[2];

// while(value < goal) {
//     value += go;
//     period++;
//     if (value >= goal) {
//         break;
//     }
//     value -= back;
// }

// console.log(period);