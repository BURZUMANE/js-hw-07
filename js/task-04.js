let count = 0;

const counter = document.querySelector('#value');
const decrease = document.querySelector('button[data-action="decrement"]');
const increase = document.querySelector('button[data-action="increment"]');

function increment() {
    return counter.textContent = count -= 1;
}
function decrement() {
    return counter.textContent = count -= 1;
}

decrease.addEventListener('click', decrement);
increase.addEventListener('click', increment);

