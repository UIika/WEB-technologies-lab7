import { images } from './images.js';

const divRef = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items.map(
        (item) => `<div class="gallery_item">
                        <li class="gallery__item">
                        <a class="gallery__link" href="${item.original}">
                            <img
                                class="gallery__image"
                                src="${item.preview}"
                                data-source="${item.original}"
                                alt="${item.description}"
                                title="${item.description}"
                            />
                        </a>
                    </div>`
    ).join('');
}

const galleryMarkup = createGalleryMarkup(images);

divRef.innerHTML = galleryMarkup;

divRef.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    instance.show();
}