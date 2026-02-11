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
// console.log(a);  always returns the value out of if scope

function one(){ // parent
    const username = "Priyanshu"
    
    function two(){ // child
        const website = "youtube"
        console.log(username);
    } // the inner function can access outer function

    // console.log(website); it can't ask from the second block scope
    two()
} 

one()

if(true) {
    const username = "priyanshu"
    if(username === "priyanshu"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);

// ++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++


console.log(addOne(5))

function addOne(num){
    return num + 1;
}


addTwo()
const addTwo = function(num){ // sometimes this is called expression
    return num + 2 
}


