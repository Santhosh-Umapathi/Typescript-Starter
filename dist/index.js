"use strict";
let age = 20;
let text = "Hello World";
let num = 10;
let isActive = true;
let any;
let undefinedValue;
let nullValue;
let strArray = [];
let numArray;
let tuple;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
const size = Size.Small;
console.log("🚀 --- size", size);
const sizeNew = 2;
console.log("🚀 --- sizeNew", sizeNew);
const calculateTax = (income, year) => {
    if (year && year > 2022) {
        return year + 1;
    }
    return income * 0.18;
};
console.log("🚀 --- calculateTax", calculateTax(1000));
console.log("🚀 --- calculateTax", calculateTax(1000, 2030));
