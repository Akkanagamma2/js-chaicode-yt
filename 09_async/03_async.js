const start = document.getElementById("start")
const stop = document.getElementById("stop")
const body = document.querySelector('body')
let startColor = '';

const randmColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

start.addEventListener('click',function(){
    startColor = setInterval(() => {
        body.style.backgroundColor = randmColor()
    }, 1000);
    
})

stop.addEventListener('click',function(){
    clearInterval(startColor)
})
console.log(randmColor());
