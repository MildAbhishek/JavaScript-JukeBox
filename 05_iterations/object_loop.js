
const myObject = {
    cpp: 'C++',
    js: 'javascript',
    swift: "swift by apple",
    rb: "ruby"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["java", "js", "cpp", "rb", "py"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) { // for in loop would not work with Map. for-of will
//     console.log(key);
// }
