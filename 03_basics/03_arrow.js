const user = {
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    }
}

user.welcomeMessage()

console.log(this)  // will be {}  ... but in browser it will be Window

function chai(){
    let username = "hitesh"
    console.log(this)  // it will give all it s method and various think
    console.log(this.username) // will give undefined hence this is only used inside object
}

chai()


// **************************** arrow function ************************************


const chai = ()=>{
    let username = "hitesh"
    console.log(this)  // it will give {}
    console.log(this.username) // will give undefined hence this is only used inside object
}
chai()


// in {} we hve to write "return" keyword (explicit return ) but in () we don't have to use "return" (implicit return)

// const addTwo = (num1 , num2)=> (num1+num2)
const addTwo = (num1 , num2)=> ({username:"jayesh"}) // use in returning object
addTwo(5,6)