const input = ["3", "((", "))", "())(()"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const resultList = [];
for (let i = 1; i < input.length; i++) {
  const parenthesisStackList = [];
  let isValid = true;
  const inputItem = input[i].split("");
  for (let j = 0; j < inputItem.length; j++) {
    if (inputItem[j] === "(") {
      parenthesisStackList.push("(");
    } else {
      if (!parenthesisStackList.pop()) {
        isValid = false;
        break;
      }
    }
  }
  if (parenthesisStackList.length === 0 && isValid) {
    resultList.push("YES");
  } else {
    resultList.push("NO");
  }
}
console.log(resultList.join("\n"));
