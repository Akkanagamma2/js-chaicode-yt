function multiple5(num){
    return num * 5
}
multiple5.power = 2; //property assigned to function means function will have object behaviour
console.log(multiple5(2))
console.log(multiple5.power)
console.log(multiple5.prototype) //the multiples5 constructor have prototype of object

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.info = function(){   //new function is added to the prototype
    console.log(`${this.userName} has scored ${this.score}`)
}

const user1 = new createUser("Akku",45);  //creating a new object reference using new keyword
const user2 = new createUser("suraj",48)

console.log(user1)      //accessing the user1 object
console.log(user2)

console.log(user1.info())   //accessing the function present in prototype
console.log(user2.info())


