"use strict";
const addNumbers = (num1, num2, showResults) => {
    if (showResults)
        return num1 + num2;
};
let unknown; //Defining type for unknown value
// unknown = "test"; //Error
const number1 = 2;
const number2 = 2.8; //"2.8"
const printCheck = true; //"false"
const results = addNumbers(number1, number2, printCheck);
console.log("🚀 --- results", results);
