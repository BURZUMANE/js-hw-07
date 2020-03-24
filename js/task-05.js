'use strict'

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
function changeName(e) {
    if(e.currentTarget.value === ''){
        return nameOutput.textContent = 'незнакомец'
    }
    nameOutput.textContent = `${e.currentTarget.value}` 
}
nameInput.addEventListener('input', changeName);

