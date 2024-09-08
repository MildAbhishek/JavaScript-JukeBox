const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
/***
 * {
    value: 3.141592653589793,
    writable: false, // we can't make it true a it is a constant but we can overwrite the value of our object
    enumerable: false,
    configurable: false
    }
 */
// console.log(Math.PI);
// Math.PI = 5 // Can't overwrite the value
// console.log(Math.PI);


const car = {
    name: 'Hyundai Verna',
    price: 1500000,
    isAvailable: true,

    orderCar: function(){
        console.log("Car is out of stock");
    }
}

console.log(Object.getOwnPropertyDescriptor(car, "name"));

Object.defineProperty(car, 'name', {
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(car, "name"));

for (let [key, value] of Object.entries(car)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}