const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const recurseFiveAndThree = function(num, x) {
    let isZero = (num - x*3)%5;
    let isZeroVal = Math.floor((num - x*3)/5);
    // console.log("isZero :", isZero, "isZeroVal :", isZeroVal);
    if (isZero === 0) {
        return x;
    } 
    else if (x>5) {
        return -1;
    }
    else if(isZero<3 && isZeroVal === 0) {
        return -1;
    }
    else {
        return recurseFiveAndThree(num, x+1);
    }
}

const refineRecursive = function(num, input) {
    if (num < 0) {
        return -1;
    } else {
        return num + (input - num*3)/5;
    }
}

const pureDivide = function(num) {
    if (num%5 === 0) {
        return num/5;
    } else if (num%3 === 0) {
        return num/3;
    } else {
        return -1;
    }
}

// if (input<5) {
//     // 5보다 작은 수
//     console.log(input%3 ? -1 : 1);
// } else if(+input===5) {
//     console.log(1);
// } else {
//     // 5보다 클 때
//     // 여기서 함수가 필요하겠다. 이를테면 재귀함수
//     const finalA = refineRecursive(recurseFiveAndThree(+input, 1));
//     const finalB = pureDivide(+input);

//     if (finalA === -1 && finalB === -1) {
//         console.log(-1);
//     } else if (finalA === -1 || finalB === -1) {
//         console.log(Math.max(finalA, finalB));
//     } else {
//         console.log(Math.min(finalA, finalB));
//     }
// }

const testFunc = function(input) {
    if (input<5) {
        // 5보다 작은 수
        console.log(input%3 ? -1 : 1);
    } else if(+input===5) {
        console.log(1);
    } else {
        // 5보다 클 때
        // 여기서 함수가 필요하겠다. 이를테면 재귀함수
        const finalA = refineRecursive(recurseFiveAndThree(+input, 1), +input);
        const finalB = pureDivide(+input);

        // console.log(recurseFiveAndThree(+input, 1), finalA, finalB);

        if (finalA === -1 && finalB === -1) {
            console.log(-1);
        } else if (finalA === -1 || finalB === -1) {
            console.log(Math.max(finalA, finalB));
        } else {
            console.log(Math.min(finalA, finalB));
        }
    }
}

testFunc(input);


// for(let i =3; i<=5000; i++){
//     console.log(i,":");
//     testFunc(i);
// }

// testFunc("7");