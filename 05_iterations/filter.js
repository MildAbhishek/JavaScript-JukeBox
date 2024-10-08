// const coding =  ["java", "js", "cpp", "rb", "py"]

/**
 * Foreach loop does not return anything...
 */
//  const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * Filter return an array
 */
const newNums = myNums.filter( (num) => {
    return num > 4 // all the no. greater than 4 will be returned.
    // return num * num; // operation will not happen as filter return only true or false value
    /**
     * [
        1, 2, 3, 4,  5,
        6, 7, 8, 9, 10
        ]
     */
} )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
// console.log(userBooks);