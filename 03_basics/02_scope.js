// const var1 = 20;
// let var2 = 30;
// var var3 = 40;

let var2 = 70;

if(true){
    const var1 = 20;
    let var2 = 30;
    var var3 = 40;
}

// console.log(var1);
// console.log(var2);
// console.log(var3);

function one(){
    const name = "akku";
    function two(){
        const age = 23;
        console.log(`${name} your age is ${age}`)
    }
    two()

    console.log(name);

}
// one()

new1()
function new1(){
    console.log("first function")
}


new2() //because of hosting it will give error hosting will just do declaration not initialization in beginning
const new2 = function(){
    console.log("Second function")
}
// new2() //correct way to call variable store function
