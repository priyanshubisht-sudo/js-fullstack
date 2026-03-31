const user  = {
    username: "Priyanshu",
    loginCount: 0,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this // (not that important to write but lets do it still)
}

const userOne = new User("Priyanshuu", 12, true)
const userTwo = new User("Bayern Munich", 11, false) // overwrites the values of userOne without even doing console log on userTwo

console.log(userOne.constructor);
// console.log(userTwo);
 
