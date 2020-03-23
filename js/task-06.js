'use strict'

const validation = document.querySelector('#validation-input');
    
validation.addEventListener('blur', e => {
    validation.classList.remove('valid');
    validation.classList.remove('invalid');
    return (e.currentTarget.value.length == validation.dataset.length)
    ? validation.classList.add('valid') 
    : validation.classList.add('invalid');
}); 

