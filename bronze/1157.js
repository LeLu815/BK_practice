const fs = require("fs");
const arr = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim();

const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const alphaLen = alphabets.length;

// 단어를 받으면 해당 단어가 알파벳이 몇 개 있는지 리턴해주는 함수
const checkHowMany = function (word) {
    let result = [];
    for (let j of alphabets) {
        const count = checkHowManyWithAlpha(j, word)
        result.push(count);
    }
    return result;
}

// 알파벳 하나를 받으면 해당 알파벳이 입력된 단어에 몇개 있는지 확인해주는 함수
const checkHowManyWithAlpha = function (alphabet, word) {
    let count  = 0;
    for (let i of word) {
        // 주어진 단어가 대소문자를 구분하지 않으므로 소문자로 통일하여 비교한다.
        if (i.toLowerCase() === alphabet) {
            count++;
        }
    }
    return count;
}

// 갯수 리스트를 받으면 alphabets와 비교해서 가장 많은 대문자 알파벳을 리턴, 같으면 ? 리턴하는 함수
const frequency = function (list) {
    const mostFrequent = {idx : 0, value : 0, count : 0};
    for (let k=0; k<list.length; k++) {
        if (list[k]>mostFrequent.value) {
            mostFrequent.idx = k;
            mostFrequent.value = list[k];
            mostFrequent.count = 1;
        } else if (list[k]===mostFrequent.value) {
            mostFrequent.count += 1;
        } else {
            continue;
        }
    }
    if (mostFrequent.count === 1) {
        return alphabets.charAt(mostFrequent.idx).toUpperCase();
    } else {
        return "?";
    }
}

const countList = checkHowMany(arr);
console.log(frequency(countList));