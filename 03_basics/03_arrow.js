const user = {
    username: "Abhishek",
    age: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current context
    }

}
// user.welcomeMessage()
// user.username = "Anand"
// user.welcomeMessage()

// console.log(this); // {}

// function fun(){
//     let username = "abhishek"
//     console.log(this.username); // undefined
// }

// fun()


// const fun = function () {
//     let username = "abhishek"
//     console.log(this.username); // // undefined
// }

const fun =  () => {
    let username = "abhishek"
    console.log(this); // undefined
}
// fun()


// const add = (num1, num2) => {
//     return num1 + num2
// }

// const add = (num1, num2) =>  num1 + num2

// const add = (num1, num2) => ( num1 + num2 )

const add = (num1, num2) => ({username: "hitesh"})


console.log(add(3, 4))