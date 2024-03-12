const tinderUser = new Object()

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname :{
            firstname : "jayesh",
            lastname : "pandey"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = { obj1 , obj2}

const obj3 = Object.assign({},obj1,obj2)  // first parameter is target object and rest are source

const obj4 = {...obj1 , ...obj2}
// console.log(obj3);
console.log(obj4)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))










const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor    
const {courseInstructor:instructor} = course       //object destructuring
console.log(instructor)



