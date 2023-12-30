// const input = ["5 4", "1 2", "3 4", "1 4", "2 2"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [bucketCount, executionCount] = input[0].split(" ");
let resultList = new Array(+bucketCount).fill(0).map((v, i) => i + 1);
const executionList = input.splice(1);

for (let i = 0; i < executionList.length; i++) {
  const [startIdx, endIdx] = executionList[i].split(" ");
  const gap = endIdx - startIdx;
  switch (gap) {
    case 0:
      break;
    case 1:
      [resultList[startIdx - 1], resultList[endIdx - 1]] = [
        resultList[endIdx - 1],
        resultList[startIdx - 1],
      ];
      break;
    default:
      const itemReverse = resultList.slice(startIdx - 1, endIdx);
      const middleList = itemReverse.map(
        // slice 는 인수로 인덱스 값을 넘겨주어야 하며, 원본 배열은 훼손하지 않는다.
        (value, index) => itemReverse[itemReverse.length - index - 1]
      );
      const startList = resultList.slice(0, startIdx - 1);
      const endList = resultList.slice(endIdx);
      resultList = [...startList, ...middleList, ...endList];
      break;
  }
}
console.log(resultList.join(" "));
