let school = {}; //literal
const highSchool = new Object(); //singelton by constructor

// console.log(school);
// console.log(highSchool);

school = {
    batch : 2022,
    id : "123abc",
    fullname : {
        username : {
            firstname : "akku",
            lastname : "patil"
        },
        surname : "malipatil"
    },
    marks : [90,92,89,77],
    fresher : true
}

// console.log(school);
// console.log(school.fullname.username.firstname);
// console.log(school.marks);

// console.log(Object.keys(school.fullname));
// console.log(Object.values(school));
// console.log(Object.entries(school.fullname));

//destructuring values
const {fresher} = school;
const {marks : result} = school;
const {username} = school.fullname;

console.log(fresher);
console.log(result);
console.log(username);

//JSON
// {
//     "name" : "js",
//     "platform" : "yutube",
//     "channel" : "code with chai",
//     "instuctor" : "Hitesh"
// }