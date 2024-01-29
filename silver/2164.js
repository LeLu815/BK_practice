// const input = "3";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
if (input === "1") {
  console.log(1);
} else {
  let front = 1;
  let rear;
  const container = {};
  for (let i = 1; i <= input; i++) {
    if (i % 2 === 0) {
      // 짝수번쨰
      container[i / 2] = i;
      rear = i / 2;
    }
  }

  let discard;
  if (input % 2 === 0) {
    discard = true;
  } else {
    discard = false;
  }
  while (front - rear !== 0) {
    if (discard) {
      delete container[front];
      front++;
      discard = false;
    } else {
      discard = true;
      const temp = container[front];
      delete container[front];
      container[rear + 1] = temp;
      front++;
      rear++;
    }
  }
  console.log(container[rear]);
}
