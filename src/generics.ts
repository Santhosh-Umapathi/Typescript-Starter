// Generic Types
const genericFunc = <T>(items: T[]): T[] => {
  // T is replaced with type
  return Array().concat(items);
};

let strgArray = genericFunc(["a", "b", "c"]);
let numbArray = genericFunc([1, 2, 3]);
//or (more specific on type)
let strgArray2 = genericFunc<string>(["a", "b", "c"]);
let numbArray2 = genericFunc<number>([1, 2, 3]);

strgArray2.push("d");
