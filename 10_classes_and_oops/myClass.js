// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword = ()=> {
//         return `${this.password}abc`
//     }
//     changeUsername = () => {
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user = new User("abhishek", "abhishek@gmail.com", "123")

// console.log(user.encryptPassword());
// console.log(user.changeUsername());



// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const myUser = new User("mitthu", "m@gmail.com", "123")

console.log(myUser.encryptPassword());
console.log(myUser.changeUsername());