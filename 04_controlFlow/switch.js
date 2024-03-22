
// if(true) console.log("this is true statement");
// if(true) console.log("this is true statement"),console.log("this is false statement");

const month = "nov";
switch (month) {
    case "jan":
        console.log("january")
        break;
    case "may":
        console.log("may")
        break;
    case "jun":
        console.log("june")
        break;
    case "nov":
        console.log("november")
        break;
    case "apr":
        console.log("april")
        break;

    default:
        console.log("december")
        break;
}

//truthy falsy values
//falsy --> false,0,-0,BigInt 0n,undefined,null,NaN
//truthy --> true,1,"0",' ','false',[],{},function(){},

//nullish collaescing operator(??)
// let a = 5 ?? 10;
// let a = null ?? 10;
// let a = undefined ?? 24;
let a = null ?? 20 ?? 30;
console.log(a);

//ternanry operator
const icecream = 100;
icecream <= 80 ? console.log('less than 80') : console.log('more than 80');