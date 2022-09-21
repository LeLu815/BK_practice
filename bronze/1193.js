const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");

let step = 0;
let numResult = 0;
const calculRules = function (input) {
    while (numResult< input) {
        ++step;
        numResult += step;
    }

    const gap = numResult - input;
    let order = 0;
    if (step === 1 || step === 2 || step%2 === 0) {
        order = step - gap;
    } else {
        order = gap+1;
    }

    const denominator = order;
    const numerator = step - order + 1

    console.log(`${denominator}/${numerator}`);
}

calculRules(input);