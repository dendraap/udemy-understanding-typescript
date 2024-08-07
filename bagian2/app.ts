const person: {
    name: string;
    age: number;
    address: {
        city: string;
        street: string;
        postalcode: number;
    };
} = {
    name: 'Dana',
    age: 21,
    address: {
        city: 'Juwana',
        street: 'Jl. Kepodang',
        postalcode: 59185
    }
}

console.log("🚀 ~ person.name:", person.name)
console.log("🚀 ~ person.address.city:", person.address.city)
