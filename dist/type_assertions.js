"use strict";
let message;
message = "abc";
let newString1 = message.endsWith("c");
//Both are same, when the default type was "any", to get better intellisense
let newString2 = message.endsWith("c");
let newString3 = message.endsWith("c");
const pointCheck = (point) => {
    console.log("point", point);
};
pointCheck({ x: 1, y: 1 });
