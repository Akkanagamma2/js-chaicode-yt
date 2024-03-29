// using class keyword

// class user{
//     constructor(username,email){
//         this.username = username;
//         this.email = email
//     }

//     helloId(){
//         return this.email
//     }

//     nameConversion(){
//         return (this.username.toUpperCase())
//     }

// }

// const userdetails = new user("akku","akku@gmail.com")
// console.log(userdetails.helloId())
// console.log(userdetails.nameConversion())


//behind scenes using object and adding methods in prototype
function user(username,email){
    this.username = username;
    this.email = email;
}

user.prototype.helloId = function(){
    return `${this.email}`
}

user.prototype.nameConversion = function(){
    return `${this.username.toLowerCase()}`
}

const userdetails = new user('SURAJ','suraj@gmail.com');
console.log(userdetails.helloId())
console.log(userdetails.nameConversion())