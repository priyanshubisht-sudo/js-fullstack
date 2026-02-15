const userEmail = []

if (userEmail) {
    console.log(`User email entered`);
}
else{
    console.log(`Email not entered`);
}

// falsy values - 

// null, BigInt 0n, "", 0, -0, undefined, NaN

// truthy values -

// "0", 'false', " ", [], {}, function() {}

// to check array

// if (userEmail.length === 0) {
//     console.log(`Array is empty`);
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is empty`);
}

// Nullish Coalence Operator (??)

let val1

// val1 = 5 ?? 10
// val1 = null ?? 10
// console.log(val1);

// val1 = null ?? 10 ?? 20
// console.log(val1);

// Ternary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);





