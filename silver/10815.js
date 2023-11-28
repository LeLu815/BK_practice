// const input = ["5", "6 3 2 10 -10", "8", "10 9 -5 2 3 4 5 -10"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let answer = "";
// const nums = +input[2];
// const [hasCards, cards] = [input[1].split(" "), input[3].split(" ")];

// for (let i = 0; i < nums; i++) {
//   if (hasCards.includes(cards[i])) {
//     answer += "1";
//   } else {
//     answer += "0";
//   }
// }
// console.log(answer);

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = [+input[0], +input[2]];
const [hasCards, cards] = [
  new Set(input[1].split(" ").map(Number)),
  input[3].split(" ").map(Number),
];

let answer = "";
for (let i = 0; i < M; i++) {
  if (hasCards.has(cards[i])) answer += 1 + " ";
  else answer += 0 + " ";
}

console.log(answer);

/*

Set은 내부적으로 해시 테이블과 유사한 방식으로 데이터를 저장하므로 값에 대한 빠른 검색을 제공합니다. 이는 내부적으로 해시 함수를 사용하여 각 값에 대해 인덱스를 계산하고, 이 인덱스를 기반으로 데이터를 저장하고 검색하기 때문에 가능합니다.

카드 번호가 Set에 포함되어 있는지 확인하는 경우, Set은 해시 테이블과 같은 자료구조를 사용하여 빠르게 해당 값이 존재하는지 여부를 판별합니다. 이 과정은 일반적으로 상수 시간(O(1))에 이루어집니다.

따라서 M 개의 카드 번호에 대해 Set을 사용하여 각 카드가 Set 안에 있는지 확인하는 경우, 전체 작업은 M에 선형적으로 비례하여 시간이 소요됩니다. 이것은 시간 복잡도가 O(M)이 됨을 의미합니다.

반면 배열에 includes 메서드를 사용하여 카드의 존재 여부를 확인하는 경우, 각 요소에 대해 배열을 순회하면서 선형 검색을 수행해야 합니다. 따라서 이 경우 시간 복잡도는 nums(카드의 개수)와 cards 배열의 길이에 선형적으로 비례하여 증가하며, 시간 복잡도는 보다 높은 O(nums * cards.length)가 됩니다.

따라서 Set을 사용하는 것은 값의 빠른 검색과 확인을 가능하게 하므로 대규모 데이터셋에서 효율적인 시간 복잡도를 제공합니다.
*/
