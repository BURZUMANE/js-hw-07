import images from './images-db.js';


// WRAPPER STYLES CLASS
const gallery = document.querySelector('#gallery');

function renderMarkup({
    url,
    alt
}) {
    const card = `<li class="gallery__item">
        <img src="${url}" alt="${alt}" class="card_img">
    </li>`

    return card;
}

function renderCards(images) {
    return images.map(image => renderMarkup(image)).join('');
};

gallery.insertAdjacentHTML('afterbegin', renderCards(images));