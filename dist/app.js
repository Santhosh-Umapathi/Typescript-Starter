"use strict";
let userInput; //better than "any"
let username;
userInput = "Jack";
if (typeof userInput === "string")
    username = userInput;
const generateErrors = () => {
    //Stops execution at this point, more specific for void
    throw {
        code: 500,
        message: "Error occured",
    };
};
// generateErrors();
