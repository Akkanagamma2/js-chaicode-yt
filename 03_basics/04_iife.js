//Immediately invoke function Exression(IIFE)
//THey are executed immediately after defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.


//named iife
// () () -- first () => function defination, second () => for function call
(function chai(){
    console.log('DB connected');
})();  //when we write two iife need to put semicolon

//not named iife means arrow function
(() => {
    console.log(`DB Conneceted two`)
})();

//passing arguments for arrow function
((num1,num2) => {
    console.log(num1+num2)
}
 )(3,4)