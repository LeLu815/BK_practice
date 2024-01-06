// const input = "25 4";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [num, index] = input.split(" ").map(Number);
const getDivisors = (num, index) => {
  let count = 0;
  const divisors_head = [];
  const divisors_tail = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors_head.push(i);
      ++count;
      if (count === index) {
        return [divisors_head];
      }
      if (num / i != i) divisors_tail.push(num / i);
    }
  }
  return [divisors_head, divisors_tail];
};

const resultList = getDivisors(num, index);
if (resultList.length === 1) {
  console.log(resultList[0].pop());
} else {
  const [first, second] = resultList;
  if (first.length + second.length < index) {
    console.log(0);
  } else {
    console.log(second[second.length - (index - first.length)]);
  }
}

// const getDivisorsNum = (num, index) => {
//   let count = 0;
//   const divisors = [];
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       divisors.push(i);
//       ++count;
//       if (num / i != i) divisors.push(num / i);
//     }
//   }
//   return divisors;
// };

// const testList = Array(10000).map((v, i) => i + 1);
// const bedTestCaseList = [];

// for (let i = 1; i < +testList.length; i++) {
//   const divisorsList = getDivisorsNum(i);
//   divisorsList.forEach((value) => {
//     console.log(i, value);
//     const resultList = getDivisors(i, value);
//     if (resultList.length === 1) {
//       // console.log(resultList[0].pop());
//       const result = resultList[0].pop();
//       if (!result) {
//         bedTestCaseList.push(i, value, result);
//       }
//     } else {
//       const [first, second] = resultList;
//       if (first.length + second.length < value) {
//         // console.log(0);
//       } else {
//         if (!second[second.length - (value - first.length)]) {
//           bedTestCaseList.push(
//             i,
//             value,
//             second[second.length - (value - first.length)]
//           );
//         }
//         // console.log(second[second.length - (index - first.length)]);
//       }
//     }
//     //
//   });
// }
// console.log(bedTestCaseList);
