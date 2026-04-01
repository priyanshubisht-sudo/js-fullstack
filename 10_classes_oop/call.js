function SetUsername(username){
    // complex DB Calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){

    SetUsername.call(this, username) // .call is used to explicitly call a function inside function or wherever you want but the this in SetUsername is destryed from Global execution, thats why we user our this in call function.

    this.email = email
    this.password = password
}

const chai = new createUser("Priyanshu", "priyanshu@google.com", "123")

console.log(chai)