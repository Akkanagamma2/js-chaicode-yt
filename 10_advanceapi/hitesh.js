const imgsrc = document.querySelector('img.src');
const login = document.getElementsByClassName('loginId');
console.log(login)
const follower = document.getElementsByClassName('followers');

const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();

let img = '';
let loginId = '';
let followers = '';
xhr.open('GET',requestUrl);

xhr.onreadystatechange = function(){
    const xhrObject = JSON.parse(xhr.response);
    img = xhrObject.avatar_url;
    loginId = xhrObject.login;    
    followers = xhrObject.followers;
    login.innerHTML = loginId;
    follower.innerHTML = followers;
    imgsrc.innerHTML = img
}
xhr.send()


// imgsrc.innerHTML = img;



