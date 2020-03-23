'use strict'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


// Creating new nodes
const newLi = document.querySelector('#categories').appendChild(document.createElement("li"));
newLi.classList.add('items');
// Appending children
newLi.appendChild(document.createElement("h2")).textContent = "Ингредиенты"
newLi.appendChild(document.createElement("ul")).id = 'ingredients';


const ingredientsId = document.querySelector('#ingredients');
console.log(ingredientsId);

for(const elem of ingredients){
    ingredientsId.appendChild(document.createElement('li')).textContent = elem;
}