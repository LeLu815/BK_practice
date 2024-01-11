// const input = ["5", "2 4 -10 4 -9"];
// const input = ["6", "1000 999 1000 999 1000 999"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numList = input[1].split(" ");
const sortedList = Array.from(new Set(numList)).sort((a, b) => a - b);
const numObj = {};
for (let i = 0; i < sortedList.length; i++) {
  const currValue = sortedList[i];
  numObj[currValue] = i;
}
console.log(numList.map((value) => numObj[value]).join(" "));

// const numList = input[1].split(" ");
// const quickSortFunc = (list) => {
//   if (list.length <= 1) {
//     return list;
//   }
//   const index = Math.floor(list.length / 2);
//   console.log(index, list.length);
//   const pivot = list[index];
//   const firstLsit = [];
//   const secondList = [];
//   for (let i = 0; i < list.length; i++) {
//     if (i !== index) {
//       if (list[i] <= pivot) {
//         firstLsit.push(list[i]);
//       } else {
//         secondList.push(list[i]);
//       }
//     }
//   }
//   return [...quickSortFunc(firstLsit), pivot, ...quickSortFunc(secondList)];
// };
// console.log(quickSortFunc(numList));
