const person: {
    name: string;
    age: number;
    address: {
        city: string;
        street: string;
        postalcode: number
    };
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Dana',
    age: 21,
    address: {
        city: 'Juwana',
        street: 'Jl. Kepodang',
        postalcode: 59185
    },
    hobbies: ['Gaming', 'Badminton'],
    role: [2, 'AUTHOR']
}

// person.role.push('ADMIN')
// person.role[1] = 10
console.log("🚀 ~ person.role:", person.role)

let favoriteActivites: string[];
favoriteActivites = ['Gaming', 'Sleep']
console.log("🚀 ~ favoriteActivites:", favoriteActivites)

for (const hobby of person.hobbies) {
    console.log("🚀 ~ person.hobbies.map:", hobby.toUpperCase())
}

