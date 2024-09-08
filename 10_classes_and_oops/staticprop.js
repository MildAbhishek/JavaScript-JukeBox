class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // static keyword stops this function to be accessible using outside the class. neither any object nor inherited object can access this.
    static createId(){
        return `123`
    }
}

const abhishek = new User("Abhishek")
// console.log(abhishek.createId()) // TypeError: abhishek.createId is not a function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const teacher = new Teacher("abhishek", "abhishek@phone.com")
console.log(teacher.createId()); // TypeError: teacher.createId is not a function