let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN (not a nuber)

// "33" =>33
// "33abc" => NaN  (type of nan will show numbwer only)
// null => 0
//  true => 1 false = 0


let islog = 1
let booleanIsLoggedIn = Boolean(islog)
console.log(booleanIsLoggedIn);


// 1 => true ; 0=>false
//  "" => false
// "hitesh" => true


let someNumber = 33
let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);