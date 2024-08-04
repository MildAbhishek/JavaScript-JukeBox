//  Primitive Data types :  Call By Value
// 7 - String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 1000
const scoreValue = 100.37

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n // BigInt



// Non primitive Types: Call By Reference (object Type)

// Array, Objects, Functions

const heros = ["shaktiman", "Marvel", "Superman"];
let myObj = {
    name: "Abhishek",
    age: 27,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);


// _________________________________________MEMEORY ALLOCATION___________________________________________________
// CALL BY VALUE
let myName = "Abhishek"
let yourName = myName
yourName = "Alia"

console.log(myName) // "Abhishek"
console.log(yourName) // "Alia"


// CALL BY REFERENCE
let userDetail = {
    email : "abhishek@gmail.com",
    password: "12_3_45"
}

let userInfo = userDetail

userInfo.email = "alia@gmail.com"
console.log(userDetail.email) // "alia@gmail.com"
console.log(userInfo.email) // "alia@gmail.com"

// Return type of variables in JavaScript
/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// JavaScript is a dynamically typed language. 
/*
This means that variable types are determined at runtime, and 
you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness
*/


// https://262.ecma-international.org/5.1/#sec-11.4.3