"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["OWNER"] = 1] = "OWNER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Jack",
    age: 30,
    hobbies: ["sports", "games"],
    role: [2, "author"],
    type: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["test"];
person.role = [3, "jack"];
for (const hobby of person.hobbies) {
    console.log("For Loop =>", hobby.toUpperCase());
}
if (person.type === Role.ADMIN) {
    console.log("Enum check =>", person.type === Role.ADMIN);
}
console.log("Person Object =>", person);
