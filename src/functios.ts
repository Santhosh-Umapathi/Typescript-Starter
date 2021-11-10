const addNums = (n1: number, n2: number): string => {
  //Return type declarations: void, string, number etc
  return String(n1 + n2);
};

const addNumsCallback = (
  n1: number,
  n2: number,
  cb: (num: number) => void
): void => {
  //Return type declarations: void, string, number etc
  cb(n1 + n2);
};

const printResults = (result: string) => {
  console.log("Results =>", result);
};

let newFunction: (a: number, b: number) => string; //Function Type with return type declaration

newFunction = addNums;
// newFunction = printResults; //Error

printResults(addNums(1, 2));

addNumsCallback(1, 2, (res) => {
  console.log("callback value =>", res);
});
