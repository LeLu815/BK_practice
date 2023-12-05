// const input = "80";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const maxNum = (input - 1) * 2 + 1;
for (let i = 1; i < input * 2; i++) {
  if (i <= input) {
    const repeatStar = i === 1 ? i : 1 + (i - 1) * 2;
    console.log(" ".repeat(input - i) + "*".repeat(repeatStar));
  } else {
    const repeatSpace = i - input;
    const repeatStar = maxNum - repeatSpace * 2;
    console.log(" ".repeat(repeatSpace) + "*".repeat(repeatStar));
  }
}

// let result = "";
// for (let i = 1; i < input * 2; i++) {
//   if (i <= input) {
//     const repeatStar = i === 1 ? i : 1 + (i - 1) * 2;
//     console.log(" ".repeat(input - i) + "*".repeat(repeatStar));
//     // result += " ".repeat(input - i) + "*".repeat(repeatStar) + "\n";
//   } else {
//     const repeatSpace = i - input;
//     const repeatStar = maxNum - repeatSpace * 2;
//     // const islineBreak = i === maxNum ? 0 : 1;
//     console.log(" ".repeat(repeatSpace) + "*".repeat(repeatStar));
//     // result +=
//     //   " ".repeat(repeatSpace) +
//     //   "*".repeat(repeatStar) +
//     //   "\n".repeat(islineBreak);
//   }
// }
// console.log(result);

// for (let i = 1; i <= input; i++) {
//   const repeatStar = i === 1 ? i : 1 + (i - 1) * 2;
//   result += " ".repeat(input - i) + "*".repeat(repeatStar) + "\n";
// }
// for (let i = 1; i < input; i++) {
//   const repeatStar = i === input - 1 ? input - i : (input - i - 1) * 2 + 1;
//   if (i === input - 1) {
//     result += " ".repeat(i) + "*".repeat(repeatStar);
//   } else {
//     result += " ".repeat(i) + "*".repeat(repeatStar) + "\n";
//   }
// }
