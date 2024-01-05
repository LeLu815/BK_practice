// const input = [3, 124, 25, 194];

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const moneyToChangeList = input.slice(1);
const usMoney = [25, 10, 5, 1];

const getMoneyCount = (money, moneyList) => {
  let restMoney = money;
  const countList = [];
  moneyList.forEach((moneyInList) => {
    let count = 0;
    if (moneyInList > restMoney) {
      countList.push(count);
    } else {
      // 남은 돈이 0이 아닐 때,
      while (restMoney !== 0 && moneyInList <= restMoney) {
        restMoney -= moneyInList;
        count++;
      }
      countList.push(count);
    }
  });
  return countList.join(" ");
};

for (let i = 0; i < moneyToChangeList.length; i++) {
  console.log(getMoneyCount(moneyToChangeList[i], usMoney));
}
