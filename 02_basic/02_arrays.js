const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

marvel_heros.push(dc_heros); // will insert array in array

const all_heroes = marvel_heros.concat(dc_heros)

// spread operator
const aL = [...marvel_heros, ...dc_heros]  // sme as concate

const another_arr = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))   // to check it is array or not
console.log(Array.from("Hitesh"))  // to convert it in array

console.log(Array.from({name : "Hitesh"}))  // interesting case will give empty array []  .. to make it in array we have to specify the value or key of which we have to make array

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))  //return a array with these values