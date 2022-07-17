type Drinks = "coke" | "sprite" | "water" | "beer" | "wine";

/*--- EXTRACT - PICK ---*/
type JamesDrinks = Extract<Drinks, "wine" | "soda">; // sode doesnt exist

let jamesDrinks: JamesDrinks = "wine";

/*--- EXCLUDE - OMIT ---*/
type JohnDrinks = Exclude<Drinks, "wine">;

let johnDrinks: JohnDrinks = "beer";
