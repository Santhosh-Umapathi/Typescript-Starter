/*--- Annotations ---*/
let age: number = 20;

/*--- TypeScript Interpreter ---*/
let text = "Hello World";
let num = 10;
let isActive = true;
let any;

let undefinedValue: undefined;
let nullValue: null;

let strArray: string[] = [];
let numArray: number[];
let tuple: [string, number];

/*--- Enum ---*/
enum Size {
  Small = 1,
  Medium,
  Large,
}
const size: Size = Size.Small;
console.log("🚀 --- size", size);

/*--- Optimized Enums ---*/
const enum SizeOptimized {
  Small = 1,
  Medium,
  Large,
}

const sizeNew: SizeOptimized = SizeOptimized.Medium;
console.log("🚀 --- sizeNew", sizeNew);

/*--- Function with annotation and optional parameter ---*/
const calculateTax = (income: number, year?: number): number => {
  if (year && year > 2022) {
    return year + 1;
  }
  return income * 0.18;
};

console.log("🚀 --- calculateTax", calculateTax(1000));
console.log("🚀 --- calculateTax", calculateTax(1000, 2030));

/*--- Object and readonly ---*/
let employee: {
  id: number;
  readonly name: string;
  retirement: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retirement: (date: Date) => {
    console.log("🚀 --- retirement", date);
  },
};

employee.id = 2;

/*---  Type Alias ---*/
type Employee = {
  id: number;
  readonly name: string;
  retirement: (date: Date) => void;
};

let employeeNew: Employee = {
  id: 1,
  name: "",
  retirement: (date: Date) => {
    console.log("🚀 --- retirement", date);
  },
};

employeeNew.id = 2;

/*--- Union Types and Narrowing ---*/
const kgToLbs = (value: number | string): number => {
  //Narrowing
  if (typeof value === "number") {
    return value * 2.2;
  }
  return +value * 2.2;
};

/*--- Intersection Types  ---*/
type Drag = {
  isDragging: boolean;
};

type Resize = {
  isResizing: boolean;
};

type Check = Drag & Resize; // Intersection Type

let check: Check = {
  isDragging: true,
  isResizing: true,
};

/*--- Literal Types  ---*/
type Sizes = "Small" | "Medium" | "Large";

let sizeValue: Sizes = "Small";
