// // const data = 
// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Hello promise start ogaya')
//         resolve()
//     },1000);
// })
// promise.then(function(){
//     console.log("abb resolve bole tho then")
// })


// new Promise(function(resolve,reject){
//     console.log('new promise created without setTimeout');
//     resolve()
// }).then(function(){
//     console.log("second time bhi resolve tho bantha bai")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     console.log("data send kare")
//     resolve({name:"akku",gender:"girl"})
// }).then(function(data){
//     console.log(data)
// })

//promiseFour reject
new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve({name:"suraj",gender:"boy"})
    }else{
        reject("OOPS! error occured")
    }
})
.then(function(data){
    console.log(data)
    return data
})
.then((data)=> console.log(data.name))
.catch(function(data){
    console.log(data)
})
.finally(()=>console.log("mai toh kabhibhi run hote huu either resolve/reject"))

const apiData = 'https://jsonplaceholder.typicode.com/todos';

// async function apiCall(){
//     try{
//         const response = fetch('https://jsonplaceholder.typicode.com/todos');
//         const resObject = await response;
//         console.log(resObject)
//     }catch(error){
//         console.log("E:", error)
//     }
    
// }
// apiCall()

fetch('https://jsonplaceholder.typicode.com/todos')
.then((response)=>{
    return response.json()
}).then((data)=>console.log(data))
.catch((error)=>
    console.log(error)
)

