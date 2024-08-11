//var c = 300
// let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a); //ReferenceError:  a is not defined
// console.log(b); //ReferenceError:  b is not defined
// console.log(c); // 30 - hoisting


function one(){
    const username = "mild"

    function two(){
        const website = "linkedin"
        console.log(username); // accessible - mild: Child function can access variable from parent but not vice versa
    }
    console.log(website); // ReferenceError: website is not defined

     two()

}

// one()

if (true) {
    const username = "mild"
    if (username === "mild") {
        const website = " linkedin"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username); // ReferenceError: username is not defined


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6

// Function defined like this syntax can be accessed before definition
function addone(num){
    return num + 1
}



addTwo(5) // ReferenceError: cannot access 'addTwo' before initialization

// Function defined like this syntax can't be accessed before definition
const addTwo = function(num){
    return num + 2
}