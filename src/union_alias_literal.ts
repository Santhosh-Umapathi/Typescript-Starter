type UnionType = number | string;
type LiteralType = "as-text" | "as-number";

const combine = (
  num1: UnionType, //type alias to reuse
  num2: number | string,
  conversion: LiteralType,
  option?: boolean
) => {
  console.log("🚀 --- option", option);

  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  if (conversion === "as-number") {
    return +result;
  }
  return result;
};

const unionType = combine(1, 2, "as-number", false);
const unionType2 = combine("number1", "number2", "as-text");
const literalType = combine("1", "2", "as-number");

console.log("🚀 --- unionType", unionType);
console.log("🚀 --- unionType2", unionType2);
console.log("🚀 --- literalType", literalType);

//Type Aliases
type Sizes = ("s" | "m" | "l")[]; //Any or all of these options

//Union Types
function combineNew(
  input1: number | string, //Literal
  input2: number | string,
  resultConversion: "as-number" | "as-text",
  option?: Sizes
) {
  console.log("🚀 --- option", option);
  let results;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    results = +input1 + +input2;
  } else {
    results = input1.toString() + input2.toString();
  }

  return results;
}

const ages = combineNew(5, 10, "as-number", ["l", "s"]);
console.log("Ages =>", ages);

const stringAges = combineNew("5", "10", "as-text");
console.log("String Ages =>", stringAges);

const names = combineNew("John", "David", "as-text");
console.log("Names =>", names);
