var combine = function (num1, num2, conversion, option) {
    console.log("🚀 --- option", option);
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    if (conversion === "as-number") {
        return +result;
    }
    return result;
};
var unionType = combine(1, 2, "as-number", false);
var unionType2 = combine("number1", "number2", "as-text");
var literalType = combine("1", "2", "as-number");
console.log("🚀 --- unionType", unionType);
console.log("🚀 --- unionType2", unionType2);
console.log("🚀 --- literalType", literalType);
