const marvel_heros = ["spiderman","Batman","Iroman"];
const indian_heros = ["Rohit","Dhoni","virat"];

// marvel_heros.push(indian_heros);
// console.log(marvel_heros);

const arr = marvel_heros.concat(indian_heros);
// console.log(arr);

var all_heros = new Array(...marvel_heros,...indian_heros);
// console.log(all_heros);

// console.log(Array.isArray("akku"));
// console.log(Array.from("Akku"));
// console.log(Array.of("akku","patil","ballatigi"));

var newArray = [2,3,4,[3,4],[6,7,[3,4,[2,1]]],9];
console.log(newArray.flat(5));



