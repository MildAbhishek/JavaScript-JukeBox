const name = "Abhishek"
const repoCount = 19

// console.log(name + repoCount + " Value");

// String Interpolation: injecting placehoder for variables
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mild-talk-com')

// console.log(gameName[0]); // m
// console.log(gameName.__proto__); // {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
const newString2 = gameName.substring(-5, 4) // -5 converted into 0
// console.log(newString, newString2); // newString == newString2

// slice method take argument as index number
const anotherString = gameName.slice(0, 4) // mild
const anotherString2 = gameName.slice(-8, 9) // talk
console.log(anotherString2);

const newStringOne = "   abhishek    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://youtube.com/mild%20abhishek"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('profile')) // contains - false

// console.log(gameName.split('-'));