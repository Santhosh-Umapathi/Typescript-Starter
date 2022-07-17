type DrinksTwo = string | null | undefined;

/*--- Null, Undefined not allowed ---*/
type JamesDrinksTwo = NonNullable<DrinksTwo>;

let jamesDrinksTwo: JamesDrinksTwo = "undefined";
