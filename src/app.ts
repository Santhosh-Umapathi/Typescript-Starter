import { PointClass } from "./class_concept";

PointClass;

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
