function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    // console.log("Priyanshu"); doesnt print after the return 
    
    return number1+number2   // this also does the same job like above
}

const result = addTwoNumbers(3, 5)

// console.log("Result : ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username!");
    //     return
    // }
    if(!username){ // ! converts true value to false and vice-versa means !username means undefined.
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage("Priyanshu"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){ // "..." is rest operator, returns values in array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Priyanshu",
    price: 199
}

function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and price is ${anyObject.price}.`);
}

handleObject({
    username: "Sam",
    price: 900
});

const myNewArray = [200, 300, 500, 1000]

function returnSecondElement(getArray){
    return getArray[1]
}

// console.log(returnSecondElement(myNewArray))
console.log(returnSecondElement([200, 300, 400, 500]));
