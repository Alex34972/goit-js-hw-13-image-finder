import templeCard from '../templates/card-images.hbs';
import templGallery from '../templates/gallery-images.hbs';
import IMAGE from './apiService';

const refs = {
    input:document.querySelector(".search-form"),
    galleryMap:document.querySelector(".gallery")
}
let debounce = require('lodash.debounce');
refs.input.addEventListener(`input`,debounce(onSearch,500));
function onSearch(e) {
    e.preventDefault();
    const images = e.target.value.trim();
    console.log(images)
    if (isNaN(images) === true) {
        IMAGE.fetchImages(images)
      .then(renderGallery)
    }
    };
function renderGallery(images){
        const marcup = templGallery(images);
        refs.galleryMap.innerHTML = marcup;
    }