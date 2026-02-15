const isUserLoggedIn = true

// if(2 != -2) {
//     console.log(`executed`);
// }

// == only checks value, === also checks datatype

const score = 200

// if(score > 100) { // inner scope
//     var power = "fly" // var is global scope thats why it runs, shouldn't be used, use let or const instead.
//     console.log(`User power is ${power}.`);
// }

// console.log(`User power is ${power}.`); // global scope

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard) {
    console.log(`Allow to buy the course.`);
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log(`Welcome to website!`);
}

