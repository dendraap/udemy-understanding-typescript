var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var combine = function (input1, input2, resultConversion) {
    return (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as_number')
        ? +input1 + +input2
        : input1.toString() + ' ' + input2.toString();
};
var isOlderUser = function (user1, user2) {
    return (user1.age > user2.age)
        ? user1.name + ' is older ' + Math.abs(user1.age - user2.age) + ' year then ' + user2.name
        : user2.name + ' is older ' + Math.abs(user1.age - user2.age) + ' year then ' + user1.name;
};
var u1 = {
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
var u2 = {
    name: 'Dana2',
    age: 22,
    address: {
        city: 'Gresik',
        street: 'Jl. Veteran Gg IX',
        postalcode: 61122
    },
    hobbies: ['Makan', 'Tidur', 'Nonton Youtube'],
    role: Role.AUTHOR
};
var combineNumber = combine(14, 23, 'as_number');
console.log("🚀 ~ combineNumber:", combineNumber);
var combineMix = combine('14', '23', 'as_number');
console.log("🚀 ~ combineMix:", combineMix);
var combineString = combine('Dendra', 'Ardana', 'as_string');
console.log("🚀 ~ combineString:", combineString);
var checkUserAge = isOlderUser(u1, u2);
console.log("🚀 ~ checkUserAge:", checkUserAge);
console.log("🚀 ~ u1:", u1);
