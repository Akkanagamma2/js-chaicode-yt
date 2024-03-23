const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');
// console.log(body);
const text = document.querySelector('h2');

buttons.forEach(function(button){
    button.addEventListener('mouseover',function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'purple'){
            body.style.backgroundColor = 'plum';
            alert('the background is changed congratulations!!!');
        }
    })

    button.addEventListener('mouseout',function(e){
        if(e.target.id != 'grey'){
            text.style.color = 'grey';
        }
    })

    
})