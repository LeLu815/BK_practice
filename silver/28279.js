// const input = ["11", "1 1", "1 2", "1 3", "2 4", "3", "4"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const DoubleEndedQueue_Class = class {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.container = {};
  }
  pushFront(value) {
    if (this.size() === 0) {
      this.container[this.rear] = value;
    } else {
      this.container[this.front - 1] = value;
      this.front--;
    }
  }
  pushRear(value) {
    if (this.size() === 0) {
      this.container[this.rear] = value;
    } else {
      this.container[this.rear + 1] = value;
      this.rear++;
    }
  }
  popFront() {
    if (this.size() === 0) {
      return -1;
    }
    let temp;
    if (this.front === this.rear) {
      temp = this.container[this.front];
      delete this.container[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.container[this.front];
      delete this.container[this.front];
      this.front++;
      return temp;
    }
  }
  popRear() {
    if (this.size() === 0) {
      return -1;
    }
    let temp;
    if (this.front === this.rear) {
      temp = this.container[this.rear];
      delete this.container[this.rear];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.container[this.rear];
      delete this.container[this.rear];
      this.rear--;
      return temp;
    }
  }
  size() {
    if (this.container[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }
};
const DoubleEndedQueue = new DoubleEndedQueue_Class();
const resultList = [];
for (let i = 1; i < input.length; i++) {
  const [type, value] = input[i].split(" ");
  switch (type) {
    case "1":
      DoubleEndedQueue.pushFront(value);
      break;
    case "2":
      DoubleEndedQueue.pushRear(value);
      break;
    case "3":
      resultList.push(DoubleEndedQueue.popFront());
      break;
    case "4":
      resultList.push(DoubleEndedQueue.popRear());
      break;
    case "5":
      resultList.push(DoubleEndedQueue.size());
      break;
    case "6":
      resultList.push(DoubleEndedQueue.size() === 0 ? "1" : "0");
      break;
    case "7":
      resultList.push(
        DoubleEndedQueue.container[DoubleEndedQueue.front] || "-1"
      );
      break;
    case "8":
      resultList.push(
        DoubleEndedQueue.container[DoubleEndedQueue.rear] || "-1"
      );
      break;
  }
}
console.log(resultList.join("\n"));
