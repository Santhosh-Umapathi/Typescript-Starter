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

// atleast this property must be present
const genericFunc2 = <T extends { firstname: string }>(item: T): T => {
  // T is replaced with type
  return item;
};

let objType = genericFunc2({ firstname: "John", age: 20 });

// Interface generics
interface GenericInterface<T> {
  name: string;
  age: T; //Can be any type, declared outside of the interface
}

type intGen = GenericInterface<number>;

let value: intGen = { age: 20, name: "John" };

// React example - Generics in JSX
interface Props<T> {
  value: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ children, value }: Props<T>) => {
  return children(value);
};

const App:FC<> = () => {
    return (
        <Form value={{ firstname: "John" }}>
            {(values) => <div>{values.firstname}</div>}
        </Form>
    );
}
//or more explicit
const App:FC<> = () => {
    return (
        <Form <{firstname:string | null}> value={{ firstname: "John" }}>
            {(values) => <div>{values.firstname}</div>}
        </Form>
    );
}