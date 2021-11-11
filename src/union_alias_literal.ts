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
