const coding =  ["java", "js", "cpp", "rb", "py"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// Arrow Function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // passing reference of executable function

// By default in callback function, we have access of each item, index of each item and complete original array
coding.forEach( (item, index, arr)=> {
    // arr[index] = index;
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

// myCoding.forEach( (item) => {
    
//     console.log(item?.languageName);
// } )