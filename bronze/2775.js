// const rawData = `6
// 0
// 1
// 2
// 3
// 4
// 3
// 2
// 5
// 1
// 6
// 4
// 1
// `;

// const input = rawData.trim().split('\n');

const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

const whereDOULive = function (list) {
    if (+list[0] === 0) {
        console.log(list[1]);
    } else {
        // 층수만큼 1로 채워진 리스트를 생성한다
        let tmpList = new Array(+list[0]).fill(1);
        // 첫 번째는 층수, 두 번째는 호수
        for (let j=2; j<=list[1]; j++) {
            let tmpNum = j;
            let newTemp = tmpList.map(
                (num)=>{
                    num += tmpNum;
                    tmpNum = num;
                    return num;
                }
            )
            tmpList = newTemp;
        }
        console.log(tmpList.pop());
    }
}

for(let i=1; i<=input.length-1; i +=2) {
    const a = [+input[i], +input[i+1]];
    whereDOULive(a);
}

