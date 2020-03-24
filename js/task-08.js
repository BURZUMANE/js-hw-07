'use strict'

const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const value = document.querySelector("input[type='number']");

const createBoxes = function(amount) {
    let result = ''
    let divWidth = 30;
    let divWidthCounter = 0;
    // FRAGMENT VERSION
    // let fragment = document.createDocumentFragment();
    // for(let i= 0; i < amount; i++){
    //     let randomColor = Math.floor(Math.random()*16777215).toString(16);
    //     let div = document.createElement('div');
    //     div.style.height = '30px'
    //     div.style.width = `${divWidth + divWidthCounter}px`
    //     div.style.color =`#${randomColor}`
    //     divWidthCounter += 10;
    //     fragment.appendChild(div);
    // };
    // console.log(fragment);
    // return fragment;


    // OLD VERSION
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
    boxes.insertAdjacentHTML('afterbegin', createBoxes(value.value));
    // console.log(value.value);
    // console.log(`${createBoxes(...value.value)} hello`);
    // boxes.append(createBoxes(value.value));

})

destroy.addEventListener('click', e => {
    boxes.innerHTML = ''
    value.value = 0;
});
