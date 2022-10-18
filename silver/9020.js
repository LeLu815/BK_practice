// // const fs = require("fs");
// // const input = fs
// //     .readFileSync("/dev/stdin")
// //     .toString()
// //     .trim()
// //     .split('\n')
// //     .map((n)=>parseInt(n));

// /**
//  * 숫자를 받으면 2부터 해당 숫자보다 작은 소수들을 담은 배열을 리턴하는 함수
//  * 해당 숫자들을 조합하여 합이 되는 두 수를 리턴하는 함수
//  * 두 수의 차이가 가장 작은 조합을 리턴하는 함수
//  * 
//  * 해결책1
//  * 문제 1 : 숫자를 받으면 해당 수보다 작은 소수를 계산하는 과정을 불필요하게 반복함.
//  *          범위를 받았기 때문에 한번 계산을 해놓고 사용하면 연산 과정을 줄일 수 있다.
//  * 
//  * 문제 2 : 대칭적인 수가 생길 수 있기 때문에 중복체크를 해줄 수 있는 배열보다는 Set 객체를 이용한다.
//  */



// // const data = `3
// // 8
// // 10
// // 16`

// // const input = data.split('\n').map((n)=>parseInt(n));

const input =[4999];
for(let i=4; i<=10000; i+=2) {
    input.push(i);
}


const isPrime = (n) => {
    if (n === 1) {
        return false;
    }

    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}

function range(size, start = 0) {
    return Array.from({length: size}, (_, index) => index + start);
}

const primeList = (n) => {
    let list;
    list = range(n-1, 2);
    // let list=[];
    // for (let i=2; i<=n; i++) {
    //     list.push(i);
    // }
    list = list.filter((n)=>isPrime(n));
    return list;
}

const combination = (list, num) => {
    const answer = [];
    const rank = [];
    
    for(let i=0; list[i]<num/2+1; i++) {
        // list.map((n)=>list[i]+n).filter((n, index)=>{
        //     if (n===num) {
        //         answer.push([list[i], list[index]]);
        //     }
        //     return n===num;
        // });
        list.map((n, index)=>{
            if (list[i]+n === num) {
                answer.push([list[i], list[index]]);
                rank.push(list[index]-list[i]);
            }
            return ;
        });
    }
    return [answer, rank];
}

const mostSmallGap = (list, rank) => {
    // const temp = [];
    // for(let i=0; i<list.length; i++) {
    //     // 오름차순 정렬이기 때문에 뒷수에서 앞수를 뺀다.
    //     // temp.push(list[i].sort((a, b) => a-b).reduce((a,b)=>b-a));
    //     temp.push(list[i].reduce((a,b)=>b-a));
    // }
    const gap = Math.min(...rank);
    const idx = rank.indexOf(gap);
    return list[idx];
}

const mainList = primeList(10000);

for (let i=1; i<=input.at(0); i++) {
    const [combiList, rank] = combination(mainList, input[i]);
    const finalList = mostSmallGap(combiList, rank);
    // console.log(input[i], finalList);
    console.log(input[i],':' ,finalList.join(' '));
}

