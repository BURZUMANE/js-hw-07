'use strict'

const validation = document.querySelector('#validation-input');
    
function validator(e) {
    validation.classList.remove('valid');
    validation.classList.remove('invalid');
    return (e.currentTarget.value.length === Number(validation.dataset.length))
    ? validation.classList.add('valid') 
    : validation.classList.add('invalid');
}
validation.addEventListener('blur', validator); 

