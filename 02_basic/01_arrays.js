const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(0,1,2,3,4,5)

myArr.push(6)
myArr.pop(7)

myArr.unshift(9)  // to insert at 0 position 
myArr.shift()  // remove 1st element


// console.log(myArr.includes(9));
// console.log(myArr.indexof(3));

const newArr = myArr.join() // joins it in newArr and convert to string ','

// slice , splice

const my1 = myArr.slice[1,3]

const my2 = myArr.splice(1,3)
// slice doesn't manipulae the array
// splice manipulate the array it cut out that part of the array
