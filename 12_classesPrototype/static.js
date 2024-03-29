class user{
    constructor(name){
        this.name = name
    }

    static createID(){
        return `123`
    }
}

const userDetail = new user("patil");
// console.log(userDetail.createID())  //creates error it will not contain function called createID bcz its static not accessible

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email;
        
    }

    details(){
        console.log(`${this.name} `)
    }
}

const chai = new teacher("chai","chai@gmail.com")
console.log(chai.createID())