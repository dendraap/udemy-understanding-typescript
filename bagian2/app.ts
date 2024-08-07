enum Role {ADMIN, READ_ONLY, AUTHOR}

type ConversionType = 'as_number' | 'as_string'
type Combinable = number | string
type User = {
    name: string
    age: number
    address: {
        city: string
        street: string
        postalcode: number
    }
    hobbies: string[]
    role: Role
}

const combine = (input1: Combinable, input2: Combinable, resultConversion: ConversionType): number|string => {
    return (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as_number')
        ? +input1 + +input2
        : input1.toString() + ' ' + input2.toString()
}

const isOlderUser = (user1: User, user2: User): string => {
    return (user1.age > user2.age)
        ? user1.name + ' is older ' + Math.abs(user1.age-user2.age) + ' year then ' + user2.name
        : user2.name + ' is older ' + Math.abs(user1.age-user2.age) + ' year then ' + user1.name
}

const u1: User = {
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
const u2: User = {
    name: 'Dana2',
    age: 22,
    address: {
        city: 'Gresik',
        street: 'Jl. Veteran Gg IX',
        postalcode: 61122
    },
    hobbies: ['Makan', 'Tidur', 'Nonton Youtube'],
    role: Role.AUTHOR
}

const combineNumber = combine(14, 23, 'as_number')
console.log("🚀 ~ combineNumber:", combineNumber)

const combineMix = combine('14', '23', 'as_number')
console.log("🚀 ~ combineMix:", combineMix)

const combineString = combine('Dendra', 'Ardana', 'as_string')
console.log("🚀 ~ combineString:", combineString)

const checkUserAge = isOlderUser(u1, u2)
console.log("🚀 ~ checkUserAge:", checkUserAge)

console.log("🚀 ~ u1:", u1)