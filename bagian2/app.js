var person = {
    name: 'Dana',
    age: 21,
    address: {
        city: 'Juwana',
        street: 'Jl. Kepodang',
        postalcode: 59185
    },
    hobbies: ['Gaming', 'Badminton']
};
var favoriteActivites;
favoriteActivites = ['Gaming', 'Sleep'];
console.log("🚀 ~ favoriteActivites:", favoriteActivites);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("🚀 ~ person.hobbies.map:", hobby.toUpperCase());
}
