function userName(name){
    this.name = name
}
function setDetails(name,age,job){
    userName.call(this,name) 
    this.age = age;
    this.job = job;
}

const detail = new setDetails("akku",23,"Software Engineer")
console.log(detail)