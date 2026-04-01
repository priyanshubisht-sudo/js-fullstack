// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const Priyanshu = new User("Priyanshu", "priyanshu@fb.com", "123")
console.log(Priyanshu.encryptPassword());
console.log(Priyanshu.changeUsername());
 