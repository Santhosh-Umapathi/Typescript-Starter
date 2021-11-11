enum Role {
  ADMIN, // =0
  OWNER, // =1
  AUTHOR, // =2
}

//Better without types defined for objects for known values
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple, only this order is allowed, PUSH will work(beaware)
  type: Role;
} = {
  name: "Jack",
  age: 30,
  hobbies: ["sports", "games"],
  role: [2, "author"],
  type: Role.ADMIN,
};

let favoriteActivities: string[]; // any[](dont use any, same as js)
favoriteActivities = ["test"];

person.role = [3, "jack"];

for (const hobby of person.hobbies) {
  console.log("For Loop =>", hobby.toUpperCase()); //Understands values are strings because of string array
}

if (person.type === Role.ADMIN) {
  console.log("Enum check =>", person.type === Role.ADMIN);
}

console.log("Person Object =>", person);
