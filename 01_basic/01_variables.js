const accountId = 144555
let accountEmail = "jayesh@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// donot use var because of issues in block scope and functional scope.


// accountId = 2
console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity]);