function add(n1: number, n2: number, showResult: boolean, phrase?: string) {
  const results = n1 + n2;

  if (showResult) {
    phrase ? console.log(phrase + results) : console.log(results);
  }

  return results;
}

let numberOne: number; // If initial values is unknown
numberOne = 5;

const numberTwo = 4;
const printResults = true;
const resultPhrase = "Results are: ";

add(numberOne, numberTwo, printResults, resultPhrase);

let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}
