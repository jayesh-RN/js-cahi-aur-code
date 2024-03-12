// singleton --> it is made when declared through constructor not with literals


// object literals

const mysm = Symbol("key1")

const JSUser = {
    name:"jayesh",
    "full name" : "jayesh Pandey", // can not acess through dot operator
    // mySym : "mykey1",  // here mysm will not be symbol it will be string
    [mysm] : "mykey1",
    age: 18,
    location:"jaunpur",
    email:"hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JSUser.email)
console.log(JSUser["email"])
console.log(JSUser[mysm])

JSUser.email = "jayesh@tcetmumbai.in"
// Object.freeze(JSUser)  // now we cannot cahnge values in object

JSUser.greeting = function(){
    console.log("namste")
}


console.log(JSUser.greeting) // function will nbot execute only function's refrence will be returned
console.log(JSUser.greeting()) 

JSUser.greeting2 = function(){
    console.log(`namaste , ${this.name}`)  //this is used to acces the member of same object
}