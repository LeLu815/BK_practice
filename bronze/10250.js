const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split('\n');

// const a = `3
// 6 12 60
// 6 12 6
// 30 50 72`;

// const input = a.trim().split('\n');

const countInput = +input[0];

const waitingList = function(list) {
    const [H, W, N] = list.trim().split(' ');
    const roomNum = Math.floor(N/H) === N/H ? N/H : Math.floor(N/H) + 1;
    const roomFloor = N%H === 0 ? H : N%H
    if (roomNum < 10) {
        console.log(`${roomFloor}${0}${roomNum}`)
    } else {
        console.log(`${roomFloor}${roomNum}`)
    }
}

for (let i=1; i<=countInput; i++) {
    waitingList(input[i]);
}