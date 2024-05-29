const accountId = 1001
let accountEmail = "abhishek@google.com"
var accountPassword = "12345"
accountCity = "Patna" // will work but not a good practice.
let accountState;

console.log(accountCity)
// accountId = 2 // not allowed


accountEmail = "mild@alia.com"
accountPassword = "12345"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])