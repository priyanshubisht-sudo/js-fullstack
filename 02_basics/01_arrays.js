// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["CaptainAmerica", "IronMan", "Loki", "DrStrange"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // removes last element

// myArr.unshift(7) // adds the element (here 7) at beginning and shifts other elements but size stays same.
// myArr.shift()

// console.log(myArr.includes(8)); 
// console.log(myArr.indexOf(4));

// const newArr = myArr.join() // converts array from object to string

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // doesnt manipulate the array

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // manipulates the string
console.log(myn2);
console.log("C ", myArr);




