// Enum
enum Role {
  ADMIN, //0
  AUTHOR = 2, //2
  USER = "Mac_User", //3
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; //String Array
  role: [number, string]; //Tuple
  allowedRoles: Role;
} = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  allowedRoles: Role.ADMIN,
};

// person.role.push("admin");
person.role[0] = 10;

let favoriteActivities: string[];

favoriteActivities = ["Sports", "Cooking"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

console.log(person.name);

if (person.allowedRoles === Role.AUTHOR) {
  console.log("is admin");
}
