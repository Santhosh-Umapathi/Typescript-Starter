var addNums = function (n1, n2) {
    //Return type declarations: void, string, number etc
    return String(n1 + n2);
};
var addNumsCallback = function (n1, n2, cb) {
    //Return type declarations: void, string, number etc
    cb(n1 + n2);
};
var printResults = function (result) {
    console.log("Results =>", result);
};
var newFunction; //Function Type with return type declaration
newFunction = addNums;
// newFunction = printResults; //Error
printResults(addNums(1, 2));
addNumsCallback(1, 2, function (res) {
    console.log("callback value =>", res);
});
