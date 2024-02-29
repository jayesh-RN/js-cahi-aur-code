const name = "hitesh"
const rep = 50

console.log(name + rep + "value");

console.log(`Helo my name is ${name} and my repo count is ${rep} `)

const gameName =  new String('jayesh-fc')

console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringone = "  jayesh    "
console.log(newStringone.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))