/* --- Types --- */
let num: number;
let str: string;
let bool: boolean;
let unk: unknown;
let any: any;
//Arrays
let numArr: number[];
let strArr: string[];
let numStrArray: number | string[];
let anyArr: any[];
//Functions
let func: () => void; //"undefined", "never", "number", "string", "boolean", "object", "array", "function"
let specFunc: (str: string, num: number) => void;
//Objects
let obj: object;
let objSpec: { name: string; age: number };
let objArr: object[];

let userInput: unknown; //better than "any"
let username: string;

userInput = "Jack";

if (typeof userInput === "string") username = userInput;

const generateErrors = (): never => {
  //Stops execution at this point, more specific for void
  throw {
    code: 500,
    message: "Error occured",
  };
};

// generateErrors();
