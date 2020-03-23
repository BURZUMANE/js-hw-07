// TASK O1.1
const categoriesArray = [...document.querySelectorAll('.item')];
// TASK O1.2
for(const elem of categoriesArray){
    console.log(`Категория: ${elem.firstElementChild.innerHTML}`);
    console.log(`Количество элементов:  ${elem.querySelector('ul').querySelectorAll('li').length}`);
};

