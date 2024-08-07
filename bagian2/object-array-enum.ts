enum Role { ADMIN, READ_ONLY, AUTHOR} 

const person = {
    name: 'Dana',
    age: 21,
    address: {
        city: 'Juwana',
        street: 'Jl. Kepodang',
        postalcode: 59185
    },
    hobbies: ['Gaming', 'Badminton'],
    role: Role.ADMIN
}

console.log("🚀 ~ person.role:", person.role)

let favoriteActivites: string[]
favoriteActivites = ['Gaming', 'Sleep']
console.log("🚀 ~ favoriteActivites:", favoriteActivites)
console.log("🚀 ~ typeof favoriteActivites:", typeof favoriteActivites)

// Example for "ANY" data types
let random: any[]
random = [1, 2, 'Dana', '123Dana']
console.log("🚀 ~ random:", random)
console.log("🚀 ~ typeof random:", typeof random)

for (const hobby of person.hobbies) {
    console.log("🚀 ~ person.hobbies.map:", hobby.toUpperCase())
}

person.role === Role.ADMIN
    ? console.log('This user is ADMIN')
    : console.log('This user isn\'t ADMIN')

