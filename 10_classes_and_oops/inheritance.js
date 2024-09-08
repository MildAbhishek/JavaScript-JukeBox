
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // behind the scene- .call(this, username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher = new Teacher("abhishek", "a@teacher.com", "123")
teacher.logMe()


const user = new User("Mitthu")
user.logMe()

console.log(teacher === Teacher); // false
console.log(teacher === user); // false

console.log(teacher instanceof User);  // true
