var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Dana',
    age: 21,
    address: {
        city: 'Juwana',
        street: 'Jl. Kepodang',
        postalcode: 59185
    },
    hobbies: ['Gaming', 'Badminton'],
    role: Role.ADMIN
};
console.log("🚀 ~ person.role:", person.role);
var favoriteActivites;
favoriteActivites = ['Gaming', 'Sleep'];
console.log("🚀 ~ favoriteActivites:", favoriteActivites);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("🚀 ~ person.hobbies.map:", hobby.toUpperCase());
}
person.role === Role.ADMIN
    ? console.log('This user is ADMIN')
    : console.log('This user isn\'t ADMIN');
