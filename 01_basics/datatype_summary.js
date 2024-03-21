//datatype types - primitive & non-primitive

//Primitive - 7 types
// String, Number, Boolean, Null, Undefined, Symbol, BigInteger

let name = "akku"
let age = 24
let loggedIn = false
let country;

let accountId = Symbol('1234');
let newAccountId = Symbol('1234');
// console.log(typeof accountId);
// console.log(accountId == newAccountId);
// console.table([accountId,newAccountId]);
// console.table([typeof accountId, typeof newAccountId]);


//non-primitive datatype
//Array, Objects, Functions

let array = ["akku","anusha","suraj"];
// console.log(array);
// console.log(typeof array); //object

let object = {
    elder : 'anusha',
    middle : 'akku',
    younger : 'suraj',
    total : 3
}
// console.log(object);
// console.log(object.elder);
// console.log(typeof object); //object

const myfunction = function(){
    console.log("this is new era");
}
myfunction();
console.log(typeof myfunction);  //function

