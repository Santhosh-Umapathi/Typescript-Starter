const addWithCallback = (
  a: number,
  b: number,
  callback: (num: number) => void
): number => {
  const results = a + b;

  callback(results);
  return results;
};

const printResultsWithVal = (num: number): void => {
  console.log(`Result: ${num}`);
};

printResultsWithVal(
  addWithCallback(5, 12, (res) => {
    console.log("CALLBACK =>", res);
  })
);

let newFunction: (a: number, b: number) => number;

const generateError = (message: string): never => {
  throw [message];
};

console.log(generateError("Something went wrong"));

// newFunction = addWithCallback;
// newFunction = printResultsWithVal || 5;
