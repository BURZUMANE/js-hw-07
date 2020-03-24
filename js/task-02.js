'use strict'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsFragment = document.createDocumentFragment();
ingredients.forEach(function(ingredient) {
  let li = document.createElement('li');
  li.textContent = ingredient;
  ingredientsFragment.appendChild(li);
});

const ingredientsId = document.querySelector('#ingredients');
ingredientsId.append(ingredientsFragment);
