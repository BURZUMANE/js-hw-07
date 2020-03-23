let count = 0;

const counter = document.querySelector('#value');
const decrease = document.querySelector('button[data-action="decrement"]');
const increase = document.querySelector('button[data-action="increment"]');

decrease.addEventListener('click', ()=> {
    return counter.textContent = count -= 1;
});
increase.addEventListener('click', ()=> {
    return counter.textContent = count += 1;
})

// const counterObj = {
//     countValue: 0,
//     counter: document.querySelector('#value'),
//     decrease : document.querySelector('button[data-action="decrement"]'),
//     increase :document.querySelector('button[data-action="increment"]'),
//     increase(){
//         return this.increase.addEventListener('click', ()=> {
//             return this.counter.textContent = this.countValue += 1;
//         })
//     },

// }