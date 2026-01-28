// singleton
// Object.create

// object literals  

const mySym = Symbol("key1")
const JsUser = {
    name: "Priyanshu",
    [mySym]: "mykey1",
    "full name": "Priyanshu Bisht",
    age: 18,
    location: "Jaipur",
    email: "priyanshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "priyanshu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "priyanshu@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User!");
}
JsUser.greeting2  = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
