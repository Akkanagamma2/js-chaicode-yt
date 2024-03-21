"use strict"; //javascript in strict mode new features

//datatypes
/*
String -- ""
number -- 2 to the power of 53
boolean -- true/false
undefined -- if not initialised
null -- Standalone object
 */

let name = "akku"
let age = 25
let loggedIn = true
let state;
let stateCode = 0;

console.table([typeof name, typeof age, typeof loggedIn, typeof state, typeof stateCode]);
console.table(typeof [name,age,loggedIn,state,stateCode]); //object

console.log(typeof undefined); //undefined
console.log(typeof null); //object 