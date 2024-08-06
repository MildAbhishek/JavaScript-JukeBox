// Array in JS

const myArr = [0, 1, 2, 3, 4, 5, "Abhishek"]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr) // [ 0, 1, 2, 3, 4, 5, 'Abhishek', 6, 7 ]
// myArr.pop() // [ 0, 1, 2, 3, 4, 5, 'Abhishek', 6 ]
// console.log(myArr)

// myArr.unshift(9) 
// console.log(myArr) // // [ 9, 0, 1, 2, 3, 4, 5, 'Abhishek' ]
// myArr.shift() 
// console.log(myArr) // [ 0, 1, 2, 3, 4, 5, 'Abhishek' ]

// console.log(myArr.includes(9)); // false
// console.log(myArr)
// console.log(myArr.indexOf(3)); // 3
// console.log(myArr.indexOf(30)); // -1
// console.log(myArr)

const newArr = myArr.join()

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 'Abhishek' ]
// console.log( newArr); // Type is string now: 0,1,2,3,4,5,Abhishek


// slice : DO not change the original array
// splice: Change the original array and last index is included

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1); //  // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5, 'Abhishek' ]


const myn2 = myArr.splice(1, 3)
console.log(myn2); // [ 1, 2, 3 ]
console.log("C ", myArr); // C  [ 0, 4, 5, 'Abhishek' ]
