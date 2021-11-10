"use strict";
let userInput;
let username;
userInput = "Jack";
if (typeof userInput === "string")
    username = userInput;
const generateErrors = () => {
    throw {
        code: 500,
        message: "Error occured",
    };
};
