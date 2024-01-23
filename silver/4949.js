const input = [
  "So when I die (the [first] I will see in (heaven) is a score list).",
  "[ first in ] ( first out ).",
  "Half Moon tonight (At least it is better than no Moon at all].",
  "A rope may form )( a trail in a maze.",
  "Help( I[m being held prisoner in a fortune cookie factory)].",
  "([ (([( [ ] ) ( ) (( ))] )) ]).",
  " .",
  ".",
];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const resultList = [];
const isBalanced = (string) => {
  const stringList = string.split("");
  const stackList = [];
  let balanceCheck = true;

  for (let i = 0; i < stringList.length; i++) {
    if (!balanceCheck) {
      break;
    } else {
      switch (stringList[i]) {
        case "(":
          stackList.push("(");
          break;
        case "[":
          stackList.push("[");
          break;
        case ")":
          balanceCheck = stackList.pop() === "(" ? true : false;
          break;
        case "]":
          balanceCheck = stackList.pop() === "[" ? true : false;
          break;
      }
    }
  }

  if (balanceCheck && stackList.length === 0) {
    return "yes";
  } else {
    return "no";
  }
};

for (let i = 0; i < input.length - 1; i++) {
  resultList.push(isBalanced(input[i]));
}
console.log(resultList.join("\n"));
