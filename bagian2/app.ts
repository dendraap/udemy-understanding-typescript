const person = {
    name: 'Dana',
    age: 21,
    address: {
        city: 'Juwana',
        street: 'Jl. Kepodang',
        postalcode: 59185
    },
    hobbies: ['Gaming', 'Badminton']
}

let favoriteActivites: string[];
favoriteActivites = ['Gaming', 'Sleep']
console.log("🚀 ~ favoriteActivites:", favoriteActivites)

for (const hobby of person.hobbies) {
    console.log("🚀 ~ person.hobbies.map:", hobby.toUpperCase())
}

