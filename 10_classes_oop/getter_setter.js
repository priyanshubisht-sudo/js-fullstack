class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password.slice(0,2)}***`
    }
    
    set password(value){
        this._password = value
    }
}

const priyanshu = new User("pri@fb.com", "abc")
console.log(priyanshu.email);
 