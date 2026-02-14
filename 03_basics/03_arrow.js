const user = {
    username: "Priyanshu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website!`); // this shows from the current context of the file, (like scope)
        console.log(this); // 'this' shows the object of current scope
        
    }
}

// user.welcomeMessage()
// user.username = "Sam" // the current context changes to sam now
// user.welcomeMessage()

// console.log(this); // if nothing is declared in global scope, it shows empty object but in browser it shows window because window is the global scope in browsers

// function chai() {
//     let username = "Priyanshu"
//     console.log(this); // but when 'this' is declared in function, it shows many values
//     console.log(this.username); // it prints undefined 
// }

// chai()

// const chai = function() {
//     let username = "Priyanshu"
//     console.log(this.username);
// }
const chai = () => { // this is arrow function which can be used to create function directly
    let username = "Priyanshu"
    // console.log(this.username); // shows undefined
    // console.log(this); // shows {} empty object
}

// const addTwo = (num1, num2) => {
//     return num1 + num2; // explicit return
// }

// const addTwo = (num1, num2) => (num1 + num2) // no need to write the return function, known as implicit return

const addTwo = (num1, num2) => ({username: "Priyanshu"}) // to declare object in arrow function, parenthisis is required

console.log(addTwo(3, 4))

