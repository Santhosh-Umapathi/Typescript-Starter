/*--- Conditional ---*/
type One = number;

type Two = One extends string ? string : number;

const conditionCheck = <T>(args: T) => {
  return (newValues: T extends string ? "Type String" : "Type Number") => {
    let values = newValues;
    console.log(values);
  };
};

const checkResults = conditionCheck(2);

// Only string or no type
type StringOrNot<T> = T extends string ? string : never;

// Never is a type that represents the type of values that never occur.
type AUnion = string | number | never;
