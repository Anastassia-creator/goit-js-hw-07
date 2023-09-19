import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryLi = galleryItems.map(({preview, original, description}) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`).join('');


gallery.insertAdjacentHTML("beforeend", galleryLi);

const lightboxModal = new SimpleLightbox('.gallery a',
{
    caption:true,
    captionsData:'alt',
    captionDelay:250,
});
console.log(galleryItems)