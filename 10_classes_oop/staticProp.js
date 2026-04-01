class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const Priyanshu = new User("Priyanshu")
// console.log(Priyanshu.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iPhone = new Teacher("Iphone", "Iphone@.com" )
console.log(iPhone.logMe());
console.log(iPhone.createId());

