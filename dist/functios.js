"use strict";
const addNums = (n1, n2) => {
    return String(n1 + n2);
};
const addNumsCallback = (n1, n2, cb) => {
    cb(n1 + n2);
};
const printResults = (result) => {
    console.log("Results =>", result);
};
let newFunction;
newFunction = addNums;
printResults(addNums(1, 2));
addNumsCallback(1, 2, (res) => {
    console.log("callback value =>", res);
});
