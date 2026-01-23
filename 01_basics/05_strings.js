const name = "Priyanshu"
const repoCount = 50

// console.log(name + repoCount + " Value" );

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('priyanshu-pb-com')

// console.log(gameName.__proto__);
// console.log(gameName[0]);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const anotherStringOne = "   Priyanshu   "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const url = "www.priyanshu.com/priyanshu%20bisht/"
console.log(url.replace('%20', '-'))

console.log(url.includes('corrupted'))

console.log(gameName.split('-'))
