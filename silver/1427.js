// 퀵정렬을 이용한 풀이

const input = ["5", "0", "0", "6", "1", "3", "0", "0", "9"];

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const quickSortFunc = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[parseInt(arr.length / 2)];
  const [lesser_arr, equal_arr, greater_arr] = [[], [], []];

  arr.forEach((element) => {
    if (element < pivot) {
      lesser_arr.push(element);
    } else if (element === pivot) {
      equal_arr.push(element);
    } else {
      greater_arr.push(element);
    }
  });
  return quickSortFunc(greater_arr).concat(
    equal_arr,
    quickSortFunc(lesser_arr)
  );
};

console.log(quickSortFunc(input).join(""));
