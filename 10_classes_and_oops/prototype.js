// let myName = "Abhishek     "
// let mychannel = "road     "

// console.log(myName.trueLength); // undefined


let myCar = ["Verna", "XUV 700"]


let carPower = {
    verna: "1250 cc",
    xuv: "1750 cc",

    getVernaPower: function(){
        console.log(`Verna power is ${this.verna}`);
    }
}

Object.prototype.milege = function(){
    console.log(`milege is present in all objects`);
}

Array.prototype.color = function(){
    console.log(`Color is beautiful`);
}

// carPower.milege() // milege is present in all objects
// myCar.milege() // milege is present in all objects


// myCar.color() // Color is beautiful
// carPower.color() // TypeError: carPower.color is not a function because color property is applied to Array, not on object

// inheritance

const User = {
    name: "abhishek",
    email: "a@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// Inheriting the property of TeachingSupport into TASupport using __proto__ keyword
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// prototypal inheritance
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "RoadPeCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // string which i calling trueLength()
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhishek".trueLength()
"iceTea".trueLength()