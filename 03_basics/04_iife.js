// Immediately Invoked Function Expressions (IIFE)

// function chai() { // normal way to do it
//     console.log("DB CONNECTED");    
// }

// chai()
(function chai() { // iife way
    console.log(`DB CONNECTED`);    
}) (); // <= the semicolon is important to end the context. // first bracket is declaration and second is execution call.

// IIFE is used to avoid the pollution caused by the global scope

// with name is named IIFE
( (name) => { // unnamed IIFE (without name)
    console.log(`DB CONNECTED TWO ${name}`);
}) (`Priyanshu`) // this is similar to

function chai(name) { // this
     console.log(`DB CONNECTED ${name}`);    
}
chai(`Priyanshu`)
