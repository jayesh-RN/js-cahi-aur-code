let a = 10
const b = 20
var c = 30   // This means that they are accessible within the function in which they are declared, as well as in any nested functions.



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

addOne(5)   // no error
function addOne(num){
    return nums+1
}


addTwo(5)   // this will give error 
const addTwo = function(num){
    return nums+2
}