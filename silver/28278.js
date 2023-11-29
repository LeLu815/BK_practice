/*
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
3: 스택에 들어있는 정수의 개수를 출력한다.
4: 스택이 비어있으면 1, 아니면 0을 출력한다.
5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
*/
// const input = ["9", "4", "1 3", "1 5", "3", "2", "5", "2", "2", "5"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stackList = [];
const resultList = [];
let listLength = 0;
const stackFunc = function (instructnNum) {
  switch (instructnNum[0]) {
    case "1":
      stackList.push(instructnNum.split(" ")[1]);
      listLength++;
      break;

    case "2":
      if (listLength === 0) {
        resultList.push("-1");
      } else {
        listLength--;
        resultList.push(stackList.pop());
      }
      break;

    case "3":
      resultList.push(listLength);
      break;

    case "4":
      if (listLength === 0) {
        resultList.push("1");
      } else {
        resultList.push("0");
      }
      break;

    case "5":
      if (listLength === 0) {
        resultList.push("-1");
      } else {
        resultList.push(stackList[listLength - 1]);
      }
      break;
  }
};

for (let i = 1; i < +input[0] + 1; i++) {
  stackFunc(input[i]);
}
console.log(resultList.join("\n"));

// 일일이 console을 찍는 것보다는 리스트나 문자열에 담아서 한번에 console을 찍는데 훨씬 빠릅니다.
