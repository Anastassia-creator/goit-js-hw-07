import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryLi = galleryItems.map(({preview, original, description}) =>
`<li data-preview=${preview} class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}/>
  </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryLi);

gallery.addEventListener("click", onClick)

function onClick (evt) {
    // evt.preventDefoult();
    const dataPreview = evt.target.dataset.source;
    const img = evt.target.alt;
    const instance = basicLightbox.create(`
    <div>
    <img src="${dataPreview}" alt=""${img}/>
    </div>
    `) 
    instance.show()
}
console.log(galleryItems)



// galleryEl.insertAdjacentElement('beforeend', galleryLi);

// galleryLi.addEventListener("click", onClick);
// function onClick (evt) {
//     if(evt.Target === evt.currentTarget){
//         return
//     }
// }