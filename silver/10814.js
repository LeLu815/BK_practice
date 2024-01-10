/*
첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)
둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 
나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 
길이가 100보다 작거나 같은 문자열이다. 입력은 가입한 순서로 주어진다.
*/

// const input = ["3", "21 hunyoung", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const memberList = input.slice(1);
const memberObj = {};
for (let i = 0; i < memberList.length; i++) {
  memberObj[memberList[i]] = i;
}
memberList.sort((a, b) => {
  const [a_age, a_name] = a.split(" ");
  const [b_age, b_name] = b.split(" ");
  if (a_age !== b_age) {
    return a_age - b_age;
  } else {
    memberObj[a] - memberObj[b];
  }
});
console.log(memberList.join("\n"));
