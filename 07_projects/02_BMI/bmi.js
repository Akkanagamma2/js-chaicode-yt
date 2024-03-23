const form = document.querySelector('form')
const result = document.querySelector('#results')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    
    if(height == 0 || height == '' || isNaN(height)){
        result.innerHTML = '<span>Please enter the valid height</span>'
    }else if(weight == 0 || weight == '' || isNaN(weight)){
        result.innerHTML = '<span>Please enter the valid weight</span>'
    }else{
        const bmi = (weight / ((height * height) / 10000)) .toFixed(2);
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}</span> is Under weight`
        }else if(18.6 >= bmi || bmi<24.9){
            result.innerHTML = `<span>${bmi}</span> is Normal weight`
        }else{
            result.innerHTML = `<span>${bmi}</span> is Over weight`
        }
        
    }

    
})
