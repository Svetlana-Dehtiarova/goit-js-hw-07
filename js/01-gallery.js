import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(``);
}
console.log(createGalleryItems(galleryItems));

const galleryConteiner = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryItems(galleryItems);

galleryConteiner.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryConteiner.addEventListener(`click`, onGalleryConteinerClick);

function onGalleryConteinerClick(event) {
  event.preventDefault();
  if (event.target.closest('.gallery__link')) {
    const instance = basicLightbox.create(
      `<img src="${event.target.closest('img').dataset.source}" width="800" height="600">`,
      {
        onShow: instance => {
          document.addEventListener('keydown', onKeydownEsc);
        },
        onClose: instance => {
          document.removeEventListener('keydown', onKeydownEsc);
        },
      }
    );
    instance.show();

    function onKeydownEsc(event) {
      if (event.code === 'Escape') {
        instance.close();
        return;
      }
    }
  }
}
