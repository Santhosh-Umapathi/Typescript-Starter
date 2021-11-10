var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["OWNER"] = 1] = "OWNER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//Better without types defined for objects for known values
var person = {
    name: "Jack",
    age: 30,
    hobbies: ["sports", "games"],
    role: [2, "author"],
    type: Role.ADMIN
};
var favoriteActivities; // any[]
favoriteActivities = ["test"];
person.role = [3, "jack"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("For Loop =>", hobby.toUpperCase()); //Understands values are strings because of string array
}
if (person.type === Role.ADMIN) {
    console.log("Enum check =>", person.type === Role.ADMIN);
}
console.log("Person Object =>", person);
