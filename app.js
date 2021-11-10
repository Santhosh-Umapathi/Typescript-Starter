var userInput; //better than "any"
var username;
userInput = "Jack";
if (typeof userInput === "string")
    username = userInput;
var generateErrors = function () {
    //Stops execution at this point
    throw {
        code: 500,
        message: "Error occured"
    };
};
generateErrors();
