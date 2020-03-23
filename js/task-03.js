import images from './images-db.js';


const gallery = document.querySelector('#gallery');
gallery.classList.add('gallery');
// console.log(document.querySelector('#gallery'));
gallery.insertAdjacentHTML('afterbegin', renderCards(images));


function renderMarkup({url, alt}){
    const card = `<li class="gallery__item">
        <img src="${url}" alt="${alt}" class="card_img">
    </li>`

    return card;
}

function renderCards(images){
    return images.map(image => renderMarkup(image)).join('');
};

// console.log(renderCards(images));



// function renderCards({url, alt}){
//     const photCard = document.createElement('li');
//     photCard.classList.add('gallery__photo');
//     const photo = document.createElement('img');
//     photo.src = url;
//     photo.alt = alt;
//     photo.classList.add('card_img')
//     photCard.appendChild(photo);
//     return photCard;
// };

// const reduceCards = function(arr){
//     return arr.reduce((cards, card) =>{
//         let current = renderCards(card);
//         console.log(current);
//         cards.push(current);
//         return cards;
//     }, []);
// };


// const renderList = function(arr){
//     for(const elem of arr){
//         gallery.appendChild(elem);
//     };
// };

// renderList(reduceCards(images));