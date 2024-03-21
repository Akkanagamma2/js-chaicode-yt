let number = 20;
// console.log(number);

let num = new Number(500000);
// console.log(num);

// console.log(num.toString());
// console.log(num.toFixed(4)); //places after decimal
// console.log(num.toLocaleString()); //default in US based
// console.log(num.toLocaleString('en-IN')); //passing the Locale
// console.log(num.toLocaleString("de-DE", { style: "currency", currency: "EUR" })); //Locale with currency symbol
// console.log(num.toLocaleString('de-DE'));

// console.log(num.toPrecision(9));
// console.log(num.toExponential(1));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);


//++++++++++++++++++++++++++++        Math             +++++++++++++++++++++++++++++++++++++++++

console.log(Math.floor(3.6));
console.log(Math.ceil(3.2));
console.log(Math.pow(2,5));
console.log(Math.floor(Math.random() * 10));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min); 
