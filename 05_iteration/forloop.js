const arr=[1,2,3,4,5,6]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);    
// }
let names = ['akku','anusha','suraj']
for (let i of names) {
    // console.log(i)
}

const name = "akkanagamma mali patil"
for(let alpha of name){
    // console.log(alpha)
}

const map = new Map();
map.set("IN","+91")
map.set("PAk","+92")
map.set("USA","+10")

// console.log(map)
// console.log(map.keys())

for (const [key,value] of map) {
    // console.log(`phone code of country ${key} is ${value}`)
}

//forof is only applied for array and maps not for objects

let obj = {
    country : "India",
    code : "+91",
    digits : 10
}

// for (const key of obj) {
    // console.log(key) //gives error not working for objects
// }

//forin --> array and objects not for map
// for (const key in names) {
//     // console.log(key)
//     console.log(`${key} :- ${names[key]}`)
// }

// for(const key in obj){
//     console.log(`${key} :-- ${obj[key]}`)
// }

// for(const key in map){
//     console.log(key)  //because map is not iterable.
// }

//++++++++++  for each +++++++++++++++
const lang = ['java','javascript','css','cpp']

// lang.forEach(element => {        //arrow function as callback
//     console.log(element)  
// });

// lang.forEach((ele) => {          //arrow function as callback
//     console.log(ele)
// })

// lang.forEach(function(ele){         //callback function
//     console.log(ele)
// })

// function greet(items){                //passing function reference 
//     console.log(items)
// }
// lang.forEach(greet)


// lang.forEach((items,index,array) => {   //not only values but also indexes and whole array needed
//     console.log(items,index,array)
// })

const profile = [
    {
        name : "akku",
        order : 2
    },
    {
        name : "anusha",
        order : 1
    },
    {
        name : "suraj",
        order : 3
    }
]

profile.forEach((obj)=>{
    console.log(`${obj.name} age is ${obj.order}`)
})