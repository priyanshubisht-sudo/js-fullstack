class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // best method
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const Priyanshu = new Teacher("Teacher", "priyanshu@fb.com", "121")

Priyanshu.addCourse()

const tea = new User("Tea")
tea.logMe()

console.log(Priyanshu === tea)
console.log(Priyanshu instanceof User);
