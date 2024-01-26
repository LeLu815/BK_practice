// const input = [
//   "15",
//   "push 1",
//   "push 2",
//   "front",
//   "back",
//   "size",
//   "empty",
//   "pop",
//   "pop",
//   "pop",
//   "size",
//   "empty",
//   "pop",
//   "push 3",
//   "empty",
//   "front",
// ];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.storage = {};
    this.forward = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.forward + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  pop() {
    if (this.size() === 0) {
      return -1;
    }
    let temp;
    if (this.forward === this.rear) {
      temp = this.storage[this.forward];
      delete this.storage[this.forward];
      this.forward = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.forward];
      delete this.storage[this.forward];
      this.forward += 1;
    }
    return temp;
  }

  empty() {
    if (this.size() === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.size() === 0) {
      return "-1";
    } else {
      return this.storage[this.forward];
    }
  }

  back() {
    if (this.size() === 0) {
      return "-1";
    } else {
      return this.storage[this.rear];
    }
  }
}

const resultList = [];
const myQueue = new Queue();
for (let i = 1; i < input.length; i++) {
  const [oreder, value] = input[i].split(" ");
  if (oreder === "push") {
    myQueue[oreder](value);
  } else {
    resultList.push(myQueue[oreder]());
  }
}

console.log(resultList.join("\n"));
