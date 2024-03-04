// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023 , 0 , 23)
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); //in millisecond
console.log(myCreatedDate.getTime()) //in millisecond

console.log(Math.floor(Date.now()/1000))  // in second


let newD = new Date()
console.log(newD)

newDate.tolocalString('default' , {
    weekday:"long"
}) //ese customize kare sakte apan