
/*In JS, objects can be created by two type...
1. singleton - Object.create
    Object.create() returns a new object with the specified prototype object and properties. 

2. object literals - {}
*/

// creating a function which will be the 
// prototype for the object to be created later
function fruits() {
    this.name = 'fruit 1';
    console.log("Inside Fruits")
}
  
  // creating a function to whose object will 
  // inherit properties from the prototype 
  // using object.create() method
  function apple() {
    fruits.call(this);
  }

  //apple()

  // creating an object of the apple function which
  // will have properties of the prototype 
  // object i.e. fruits
  apple.prototype = Object.create(fruits.prototype);
  console.log(fruits.prototype) // {}
  console.log(apple) // [Function: apple]

  const app = new apple();

 // console.log(app) // fruits { name: 'fruit 1' }
  
//   // Displaying the created object
//   console.log(app.name);



// Object Literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Anand", // Always accessed via square bracket
    [mySym]: "mykey1", // Always accessed via square bracket
    age: 18,
    location: "Delhi",
    email: "abhishek@delhi.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abhishek@chatgpt.com"
// Object.freeze(JsUser) // Create a lock on this object so that it cant be manipulated further
JsUser.email = "abhishek@microsoft.com" // will not reflect
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // or JSUser.name
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());