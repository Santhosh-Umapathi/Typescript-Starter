const addNumbers = (num1: number, num2: number, showResults: boolean) => {
  if (showResults) return num1 + num2;
};

let unknown: boolean; //Defining type for unknown value
// unknown = "test"; //Error

const number1 = 2;
const number2 = 2.8; //"2.8"
const printResults = true; //"false"

const results = addNumbers(number1, number2, printResults);
console.log("🚀 --- results", results);
