// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const liImg = galleryItems
  .map(
    elem => `<li class="gallery_item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image"
      src="${elem.preview}"
      alt="${elem.description}"/></a></li>`
  )
  .join('');
// Додавання розмітки в HTML.
gallery.innerHTML = liImg;
// ініціалізація SimpleLightbox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
