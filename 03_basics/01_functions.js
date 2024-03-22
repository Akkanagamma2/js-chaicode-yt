function username(){
    console.log("Akku welcome to the js tutorial")
}
// username()

function loggedInUser(username = "guest user"){ //username = "" default value is assigned
    if(username === undefined){
        return "please enter the username"
    }
    return `${username} just logged in`
}
// console.log(loggedInUser("akku patil"))
// console.log(loggedInUser()) //undefined for that condition to check

//multiple values passed as argument
function cartItems(...items){ //converts into array react operator/spread operator (...)
    return items
}
// console.log(cartItems("brush","soap","paste","powder"));

const object = {
    name : "akku",
    phoneno : 7337818166
}

function objectCall(anyObject){
    return `${anyObject.name} your numer is ${anyObject.phoneno}`
}
// console.log(objectCall(object))

function arrayCall(anyArray){
    console.log(anyArray)
}
arrayCall(['akku','anusha','suraj'])