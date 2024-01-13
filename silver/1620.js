// const input = [
//   "26 5",
//   "Bulbasaur",
//   "Ivysaur",
//   "Venusaur",
//   "Charmander",
//   "Charmeleon",
//   "Charizard",
//   "Squirtle",
//   "Wartortle",
//   "Blastoise",
//   "Caterpie",
//   "Metapod",
//   "Butterfree",
//   "Weedle",
//   "Kakuna",
//   "Beedrill",
//   "Pidgey",
//   "Pidgeotto",
//   "Pidgeot",
//   "Rattata",
//   "Raticate",
//   "Spearow",
//   "Fearow",
//   "Ekans",
//   "Arbok",
//   "Pikachu",
//   "Raichu",
//   "25",
//   "Raichu",
//   "3",
//   "Pidgey",
//   "Kakuna",
// ];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [caseNum, testNum] = input[0].split(" ");
const caseList = input.slice(1, +caseNum + 1);
const caseObj = {};
const testList = input.slice(+caseNum + 1);
const resultList = [];

caseList.forEach((vlaue, index) => (caseObj[vlaue] = index + 1));

for (let i = 0; i < testList.length; i++) {
  const testValue = testList[i];
  if (+testValue) {
    // 숫자
    resultList.push(caseList[+testValue - 1]);
  } else {
    // 이름
    resultList.push(caseObj[testValue]);
  }
}
console.log(resultList.join("\n"));
