// Code here ...

// Let can changes its value
let age = 21
age = 27
console.log("🚀 ~ age:", age)

// Const can't changes its value
const shortName = "Dana"

// This code work
if (age > 0) {
    var middleName
    middleName = "Ardana"
}
middleName = "A"
console.log("🚀 ~ middleName:", middleName)
// Middle is changing to "A" even though the declaration level is not consistent

// This code won't work
age = 50
if (age === 50) {
    let lastName = 'Putra'
    lastName = 'Put'
}
lastName = 'P'
console.log("🚀 ~ lastName:", lastName)
// Unlike "VAR", "LET" won't work if declaration level is lower. TypeScript will give an error
// Let means, the variable only give an access only on its bracket level the declaration was declared.
// That's why, "VAR" doesn't recommended

