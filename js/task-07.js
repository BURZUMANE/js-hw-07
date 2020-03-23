'use strict'

const range = document.querySelector('#font-size-control');
const font = document.querySelector('#text');

range.addEventListener('input', e => {
    if(e.currentTarget.value == 72){
        alert('oooohhhh shit');
    }
    text.style.fontSize = `${e.currentTarget.value}px`;

});
