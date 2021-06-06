
import templGallery from '../templates/gallery-images.hbs';
import ImagesApiService from './apiService';

const refs = {
    input:document.querySelector(".search-form"),
    galleryMap:document.querySelector(".gallery"),
    loadMorBtn:document.querySelector(".load-more")
}
const imagesApiService = new ImagesApiService();

let debounce = require('lodash.debounce');
refs.input.addEventListener(`input`,debounce(onSearch,1000));
refs.loadMorBtn.addEventListener(`click`,onLoadMore);

function onSearch(e) {
    e.preventDefault();
    imagesApiService.query = e.target.value.trim();
    imagesApiService.resetPage();
    imagesApiService.fetchImages().then(renderGallery);
      
    };
function onLoadMore(){
    imagesApiService.fetchImages().then(renderGallery)
}    
function renderGallery(hits){
        refs.galleryMap.insertAdjacentHTML(`beforeend`, templGallery(hits));
    }