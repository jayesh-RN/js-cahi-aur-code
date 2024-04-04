// for of loop

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
}

// Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"America")

console.log(map)

for (const [key,value] of map) {
    console.log(key ,':-' , value)
}


// object is not iteratable by for of

const myObject = {
    js : 'javascript',
    cpp: 'c++',
    rb : 'ruby',
    swift : 'swift by app'
}

for (const key in myObject) {
    console.log(myObject[key])
}

// for in iterates on key and for of directly gives value


const coding = ["js","ruby","java","cPP"]

coding.forEach( function (item) {
    console.log(item)
} )

coding.forEach((item) => {
    console.log(item)
} )


coding.forEach((item,index,arr)=>{
    console.log(item , index , arr)
})


