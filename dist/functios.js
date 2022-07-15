"use strict";
const addNums = (n1, n2) => {
    //Return type declarations: void, string, number etc
    return String(n1 + n2);
};
const addNumsCallback = (n1, n2, cb) => {
    //Return type declarations: void, string, number etc
    cb(n1 + n2);
};
const printResults = (result) => {
    console.log("Results =>", result);
};
let newFunction; //Function Type with return type declaration
newFunction = addNums;
// newFunction = printResults; //Error
printResults(addNums(1, 2));
addNumsCallback(1, 2, (res) => {
    console.log("callback value =>", res);
});
