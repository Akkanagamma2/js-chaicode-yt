//conversion to number
let name = false;

// console.log(typeof(name));

let numberName = Number(name);
// console.log(typeof(numberName));
// console.log(numberName);

/* 
 "33" == 33
 "33abc" == NaN
 "" == 0
 "akku" == NaN
 true==1 false==0
 null = 0
 undefined = NaN
*/

//conversion to boolean value
let value = 33

let booleanValue = Boolean(value);
// console.log(booleanValue);

/*  33 = true
     1 = true , 0 = false
     "" = false ,"akku" = true
     null = false , undefined = false
 */

//conversion to string
let score = 0;

let stringScore = String(score);
console.log(stringScore);
console.log(typeof stringScore);

//everything null,undefined,true,false,0,1,33 values converted to string