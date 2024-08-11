// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "421A"
tinderUser.name = "Sarah"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser?.fullname?.userfullname?.firstname); // optional chaining for safety

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign(obj1, obj2, obj4)  // all the objects are cloned in obj1 here and returned - { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// 1st aparameter is optional, it always guarantee the return of new object which consists obj1, obj2, obj4, type of deep cloning
// const obj3 = Object.assign({}, obj1, obj2, obj4) // all the objects are cloned in new empty object

// const obj3 = {...obj1, ...obj2}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser); // { id: '421A', name: 'Sarah', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); //  [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '421A', 'Sarah', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '421A' ], [ 'name', 'Sarah' ], [ 'isLoggedIn', false ] ] 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "JavaScript JukeBox",
    price: "9999",
    courseInstructor: "abhishek"
}

// course.courseInstructor

// const {courseInstructor} = course
// const {courseInstructor: instructor} = course // object destructuring

// console.log(courseInstructor);
// console.log(instructor);

// JSON object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
