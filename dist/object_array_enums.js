"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["OWNER"] = 1] = "OWNER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//Better without types defined for objects for known values
const person = {
    name: "Jack",
    age: 30,
    hobbies: ["sports", "games"],
    role: [2, "author"],
    type: Role.ADMIN,
};
let favoriteActivities; // any[](dont use any, same as js)
favoriteActivities = ["test"];
person.role = [3, "jack"];
for (const hobby of person.hobbies) {
    console.log("For Loop =>", hobby.toUpperCase()); //Understands values are strings because of string array
}
if (person.type === Role.ADMIN) {
    console.log("Enum check =>", person.type === Role.ADMIN);
}
console.log("Person Object =>", person);
