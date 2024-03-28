const heros = ['cricket','actors'];

const cricketHeros = {
    name : 'Rohit Sharma',
    country : 'India', 
    Century : function(){  //this funciton is available for only this object
        console.log(`${this.name} have record of 50 centuries`)
    }
}

cricketHeros.Century();

//create a function which is accessible for all datatypes
//needs to add function in object because it is father of all dataytpes

Object.prototype.EligiblePlayer = function(name){
    this.name = name;
    return `${name} is eligible for playing 11`
}

console.log(EligiblePlayer("akku"))   //openly available
console.log(heros.EligiblePlayer("suraj"))  //within array can also be accessed
console.log(cricketHeros.EligiblePlayer("anusha")) //within  object an also be accessed

//Inheritance
const obj1 = {
    name : "akku",
    age : 23
}
const obj2 = {
    country : "India"
}
const obj3 = {
    state : "karnataka"
}
const obj4 = {
    city : "gulbarga",
    __proto__ : obj3   //old version
}

Object.setPrototypeOf(obj2,obj1);  //new version

console.log(obj2.name)

//trimLength property
let stringtoTrim = "   akku        ";

String.prototype.trimLength = function(){
    console.log(`${this.trim().length}`)
}
stringtoTrim.trimLength()
"   patil".trimLength()


