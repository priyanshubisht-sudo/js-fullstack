// {} --> in objects, it used to declare object, but it is called scope when used with if-else or function!

// var c = 30

let a = 300

if(true) {
    let a = 100
    const b = 200
    let c= 300

    console.log("INNER:", a); // returns the value inside the if scope
    
}

// written inside if -> block scope, outside if -> global scope

// console.log(a);
// console.log(b);
console.log(a); // always returns the value out of if scope

