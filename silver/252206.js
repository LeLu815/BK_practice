// const input = [
//   "ObjectOrientedProgramming1 3.0 A+",
//   "IntroductiontoComputerEngineering 3.0 A+",
//   "ObjectOrientedProgramming2 3.0 A0",
//   "CreativeComputerEngineeringDesign 3.0 A+",
//   "AssemblyLanguage 3.0 A+",
//   "InternetProgramming 3.0 B0",
//   "ApplicationProgramminginJava 3.0 A0",
//   "SystemProgramming 3.0 B0",
//   "OperatingSystem 3.0 B0",
//   "WirelessCommunicationsandNetworking 3.0 C+",
//   "LogicCircuits 3.0 B0",
//   "DataStructure 4.0 A+",
//   "MicroprocessorApplication 3.0 B+",
//   "EmbeddedSoftware 3.0 C0",
//   "ComputerSecurity 3.0 D+",
//   "Database 3.0 C+",
//   "Algorithm 3.0 B0",
//   "CapstoneDesigninCSE 3.0 B+",
//   "CompilerDesign 3.0 D0",
//   "ProblemSolving 4.0 P",
// ];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const scoreChart = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let creditNum = 0;
const totalScore = input.reduce((prev, curr) => {
  const [name, credit, score] = curr.split(" ");
  if (score === "P") {
    return prev;
  } else {
    creditNum += parseInt(credit);
    return prev + parseInt(credit) * scoreChart[score];
  }
}, 0);

console.log(creditNum ? (totalScore / creditNum).toFixed(6) : "0.000000");
