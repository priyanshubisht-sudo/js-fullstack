// for-of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

const map = new Map() // it only prints unique values
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: "Basketball",
    game2: "Football"
}

// for (const [key, value] of myObject) { // cant be printed this way coz object is not iterable
//     console.log(key, ':-', value); 
// }