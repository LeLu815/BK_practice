const used1 = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`약 ${Math.round(used1 * 100) / 100} MB의 메모리를 사용중입니다.`);

// const input = ["5", "3 2 1 -3 -1"];

// 원형 양방향 연결 리스트를 이용한 문제풀이
// 문제를 잘 읽자
// 코드를 하루종일 작성했는데... 메모리 초과라니..
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const fs = require("fs");
const input = fs
  .readFileSync("/Users/iin/development/BK_practice/2346test.txt")
  .toString()
  .trim()
  .split("\n");

const Node = function (data) {
  this.data = data;
  this.prev = null;
  this.next = null;
};
const CurrleLinkedListClass = class {
  constructor() {
    // 삭제가 진행시에 사용가능
    this.poninter = null;
    this.size = 0;
  }
  movePointer() {
    this.poninter = this.poninter.next;
  }

  append(data) {
    let node = new Node(data),
      prev,
      next;
    if (this.poninter != null) {
      prev = this.poninter;
      if (this.size === 1) {
        prev.prev = node;
        prev.next = node;
        node.prev = prev;
        node.next = prev;
      } else {
        next = prev.next;
        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
      }
    }
    this.poninter = node;
    this.size++;
  }

  remove(index) {
    const isPositive = index > 0;
    let count = isPositive ? 1 : 0,
      prev,
      next,
      returnData;

    if (this.size === 0) {
      return false;
    }
    if (this.size === 1) {
      returnData = this.poninter.data;
      this.poninter.data = null;
      this.size = 0;
      return returnData;
    }
    while (index !== "0" && +index !== count) {
      // 여기서는 카운트 올려주면서 next로 이동시키기
      if (isPositive) {
        this.poninter = this.poninter.next;
        count++;
      } else {
        this.poninter = this.poninter.prev;
        count--;
      }
    }
    prev = this.poninter.prev;
    next = this.poninter.next;

    returnData = this.poninter.data;
    delete this.poninter;
    this.poninter = next;
    prev.next = next;
    next.prev = prev;
    this.size--;

    return returnData;
  }
};
const myCurrleLinkedList = new CurrleLinkedListClass();
const insideNumList = input[1].split(" ");
let resultString = "";
for (let i = 1; i <= input[0]; i++) {
  myCurrleLinkedList.append(i);
}
myCurrleLinkedList.movePointer();
// 삭제하는 코드 작성
let indexNum = myCurrleLinkedList.remove("0");
resultString += indexNum;
for (let i = 0; i < input[0] - 1; i++) {
  indexNum = myCurrleLinkedList.remove(insideNumList[indexNum - 1]);
  resultString += ` ${indexNum}`;
}

console.log(resultString);

const used2 = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`약 ${Math.round(used2 * 100) / 100} MB의 메모리를 사용중입니다.`);
