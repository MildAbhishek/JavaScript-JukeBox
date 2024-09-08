function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // case1:
    SetUsername(username)

    // case2:
    SetUsername.call(this, username) // passing the reference of current function ie. createUser
   
    this.email = email
    this.password = password
}

const user = new createUser("abhishek", "abhishek@fb.com", "123")
console.log(user);
/**
 * case1:  
 * createUser { email: 'abhishek@fb.com', password: '123' }
 * 
 * case 2:
 * createUser { username: 'abhishek', email: 'abhishek@fb.com', password: '123' }
 */
