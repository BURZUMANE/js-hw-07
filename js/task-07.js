'use strict'

const range = document.querySelector('#font-size-control');
const font = document.querySelector('#text');
function changeFontSize(e) {
    text.style.fontSize = `${e.currentTarget.value}px`;
}
range.addEventListener('input', changeFontSize);
