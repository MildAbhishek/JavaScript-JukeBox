const hero_bike = ["ZMR", "Glamour", "Splendor"]
const tvs_bike = ["Apache", "Sports", "Radeon"]

// hero_bike.push(tvs_bike)

// console.log(hero_bike); // [ 'ZMR', 'Glamour', 'Splendor', [ 'Apache', 'Sports', 'Radeon' ] ]
// console.log(hero_bike[3][1]); // Sports

const allBikes = hero_bike.concat(tvs_bike)
console.log(allBikes);  // [ 'ZMR', 'Glamour', 'Splendor', 'Apache', 'Sports', 'Radeon' ]

const all_new_bikes = [...hero_bike, ...tvs_bike]

console.log(all_new_bikes); // [ 'ZMR', 'Glamour', 'Splendor', 'Apache', 'Sports', 'Radeon' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const real_another_array = another_array.flat(Infinity) // infinity is depth here
console.log(real_another_array); [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



console.log(Array.isArray("Abhishek")) // false
console.log(Array.from("Abhishek")) ['A', 'b', 'h', 'i', 's', 'h', 'e', 'k']
console.log(Array.from({name: "Abhishek"})) // [] super interesting as can't decide array from key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]