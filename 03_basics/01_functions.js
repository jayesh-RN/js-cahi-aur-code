function sayMyNme(){
    console.log("Jayesh")
}
sayMyNme()  //refrence of fuction is executed

// function addTwoNo(number1 , number2){
//     console.log(number1+nuber2)
// }
function addTwoNo(number1 , number2){
    return number1+nuber2
}

const res = addTwoNo(3,5)


function loginUserMessage(username = "mohodey"){
    return `${username} just logged in`
}

console.log(loginUserMessage("jayesh"))
// console.log(loginUserMessage("jayesh"))    it will give :- undefined logged in



function calculateCartPrize(...num1){
    return num1   // will return array with all value
}

console.log(calculateCartPrize(400,500,600))


const user = {
    username : "jayesh",
    preice:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and prece is ${anyobject.preice}`)
}

// handleObject(user)
handleObject({
    username :"sam",
    preice: 399
})

const arr = [1,2,3,4]

function returnSecondval(getArray){
    return getArray[1]
}

console.log(returnSecondval(arr))
// console.log(returnSecondval([1,2,3,4]))