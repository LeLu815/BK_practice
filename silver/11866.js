// const input = ["3", "3"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [listNum, gap] = input;
const result = [];
const JosephusStackQueueClass = class {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.container = {};
    this.count = 0;
  }
  add(value) {
    if (this.container[this.rear] === undefined) {
      this.container[this.rear] = value;
    } else {
      this.container[this.rear + 1] = value;
      this.rear++;
    }
  }
  goEnd() {
    const temp = this.container[this.front];
    delete this.container[this.front];
    this.container[this.rear + 1] = temp;
    this.front++;
    this.rear++;
  }
  goDelete() {
    const temp = this.container[this.front];
    delete this.container[this.front];
    this.front++;
    return temp;
  }
  size() {
    if (this.container[this.rear] === undefined) {
      return "-1";
    } else {
      return this.rear - this.front + 1;
    }
  }
};
let count = listNum % gap;
const myJosephusStackQueue = new JosephusStackQueueClass();
for (let i = 1; i <= listNum; i++) {
  if (i % gap !== 0) {
    myJosephusStackQueue.add(i);
  } else {
    result.push(i);
  }
}
while (myJosephusStackQueue.size() !== "-1") {
  ++count;
  if (count % gap !== 0) {
    myJosephusStackQueue.goEnd();
  } else {
    result.push(myJosephusStackQueue.goDelete());
  }
}

console.log(`<${result.join(", ")}>`);
