const newSymbol = Symbol('myarr1'); //symbol datatype

const JSuser = {
    name : 'akku',
    id : 213,
    company : 'JIVA',
    email : 'akku@jiva.com',
    "key role" : "software engineer",
    salary : 20000,
    [newSymbol] : 'newSymb'
}

// console.log(JSuser);
// console.log(JSuser.email);
// console.log(JSuser['key role']);

// Object.freeze(JSuser); //it will freeze object not to change any data
// JSuser.email = 'akku@gmail.com';
// console.log(JSuser);

// console.log(JSuser[newSymbol]); //symbol datatype need to use squarebrackets

JSuser.greetings = function(){
    console.log("hello this is function within object");
}

JSuser.greeting2 = function() {
    console.log(`Hello you can achieve it ${this.name}`);
}

console.log(JSuser.greetings());
console.log(JSuser.greeting2());