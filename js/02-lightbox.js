import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join(``);
}
console.log(createGalleryItems(galleryItems));

const galleryConteiner = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryItems(galleryItems);
galleryConteiner.insertAdjacentHTML('afterbegin', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
