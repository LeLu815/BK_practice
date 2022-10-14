// const fs = require("fs");
// const input = fs
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim();

// 소인수분해
// 먼저 소수인지 판별?


// const input = '72';
// const input = '10';
// const input = '3';
// const input = '2';
// const input = '9991';
// const input = '49';
// const input = '50';
// let temp = +input;
// const answerList = [];
// //분자, 분모
// const divideFunc = (denominator, numerator) => {
//     if (numerator%denominator === 0) {
//         return numerator/denominator;
//     } else {
//         return 0;
//     }
// }

// for (let i=2; i<=Math.sqrt(+input); i++) {
//     let count = 0;
//     while(divideFunc(i, temp)) {
//         temp = divideFunc(i, temp);
//         count++;
//     }

//     // answerList 에 count 만큼 i 를 push 한다.
//     if (count) {
//         for(let j=0; j<count; j++){
//             answerList.push(i);
//         }
//     }
// }
// if (temp !== 1) {
//     answerList.push(temp);
// }

// if (+input !== 1) {
//     for (let i of answerList) {
//         console.log(i);
//     }
// } else if (+input === +temp) {
//     console.log(input);
// }


const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

// 소인수분해
// 먼저 소수인지 판별?


// const input = '72';
// const input = '10';
// const input = '3';
// const input = '2';
// const input = '9991';
// const input = '49';
// const input = '50';
let temp = +input;
const answerList = [];
const divideFunc = (denominator, numerator) => {
    if (numerator%denominator === 0) {
        return numerator/denominator;
    } else {
        return 0;
    }
}

// 우선 제곱근을 포함하는 소수를 추출하는 함수를 작성
let PrimeList = [];
const filterPrime = (num) => {
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num%i === 0) {
            return false;
        }
    }
    return true;
}
const makePrimeNums = (num) => {
    if (num === 1) {
        return ;
    }
    for(let i=2; i<=Math.sqrt(num); i++) {
        PrimeList.push(i);
    }
    PrimeList = PrimeList.filter((num)=>filterPrime(num));
}


if (input === '1') {
    console.log('');
} else if (filterPrime(+input)) {
    console.log(input);
} else {
    makePrimeNums(+input);
    for (let n of PrimeList) {
        let count = 0;
        while(divideFunc(n, temp)) {
            temp = divideFunc(n, temp);
            count++;
        }
        // answerList 에 count 만큼 i 를 push 한다.
        if (count) {
            for(let j=0; j<count; j++){
                answerList.push(n);
            }
        }
    }
    if (temp !== 1) {
        answerList.push(temp);
    }

    for (let i of answerList) {
        console.log(i);
    }
}