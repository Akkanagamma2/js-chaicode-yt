//this keyword 

//In Object
const user = {
    name : "Akku",
    job : "Software Engineer",
    myProfile : function(){
        console.log(`${this.name} and your role is ${this.job}`)
    }
}
// user.myProfile()

function userprofile(){
    let nm = "akku patil"
    console.log(this.nm); //it will return object
}
// userprofile();


//++++++++++ arrow function ++++++++++++
const vr = () => {
    return 'this is arrow function'
}
console.log(vr());

const vr1 = (num1, num2) => {
    let v2 = "akku";
    console.log(this);  //this is will return null object
    return num1+num2
}
// console.log(vr1(2,6))

const v3 = (num1,num2) => num1+num2
console.log(v3(10,12))

const obj = () => ({name: "akku"})
console.log(obj())

