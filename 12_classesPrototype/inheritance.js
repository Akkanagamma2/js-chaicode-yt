class user{
    constructor(username){
        this.username = username;
    }

    Registration(){
        return `${this.username} is registered`
    }
}

class profile extends user{
    constructor(username,email,age){
        super(username)
        this.email = email
        this.age = age
    }

    profileDetails(){
        return `${this.username} your profile is updated`
    }
}

const chai = new profile("chai","chai@gmail.com",23)
const masalachai = new user("masalachai")

console.log(chai.profileDetails())
console.log(chai.Registration())

console.log(masalachai.Registration())

// console.log(masalachai instanceof user)
console.log(masalachai instanceof profile)