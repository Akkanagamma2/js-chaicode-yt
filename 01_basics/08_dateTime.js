let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth() + 1);
// console.log(date.getFullYear());
// console.log(date.toJSON());

// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());

let newDate = new Date(2023,0,1,15,7,23);
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleTimeString());

let dob = new Date("2000-11-19");
console.log(dob);

let timeStamp = Date.now();
console.log(timeStamp/1000); //to convert into seconds

console.log(date.toLocaleString('default',{
    weekday: "long",
    timeZoneName : 'longOffset'
}))




