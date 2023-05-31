import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const liArr = [];
let a = null;

galleryItems.forEach(image => {
  a = document.createElement('a');
  const img = document.createElement('img');

  a.setAttribute('href', image.original);
  a.classList.add('gallery__item');
  img.classList.add('gallery__image');
  img.src = image.preview;
  img.alt = image.description;

  a.append(img);
  liArr.push(a);
});
galleryEl.append(...liArr);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'outside',
  captionDelay: 250,
  disableScroll: true,
});

a.addEventListener('click', event => {
  event.preventDefault();
  lightbox.open(event.target);
});
