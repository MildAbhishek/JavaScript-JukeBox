// Immediately Invoked Function Expressions (IIFE)

// Used to prevent the pollution from global scope.
// In case of more than 1 iife in a file, semicolon(;) is required to terminate the first one

// syntax: (FUNCTION)();
(function fun(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('Anhishek')