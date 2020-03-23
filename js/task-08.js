'use strict'

const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const value = document.querySelector("input[type='number']");

console.log(value);

const createBoxes = function(amount) {
    let result = ''
    let divWidth = 30;
    let divWidthCounter = 0;
    for(let i= 0; i < amount; i++){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        result += `
        <div style="height: 30px;width:${divWidth + divWidthCounter}px;background-color:#${randomColor};">
        </div>
        `
        divWidthCounter += 10;
    }
    return result;
};

create.addEventListener('click', e => {
    boxes.innerHTML = '';
    boxes.insertAdjacentHTML('afterbegin', createBoxes(value.value))
})

destroy.addEventListener('click', e => {
    boxes.innerHTML = ''
});