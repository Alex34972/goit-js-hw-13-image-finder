import templGallery from "../templates/gallery-images.hbs";
import ImagesApiService from "./apiService";

const refs = {
  input: document.querySelector(".search-form"),
  galleryMap: document.querySelector(".gallery"),
  loadMorBtn: document.querySelector(`[data-action="load-more"]`),
};
const imagesApiService = new ImagesApiService();

let debounce = require("lodash.debounce");
refs.input.addEventListener(`input`, debounce(onSearch, 1000));
refs.loadMorBtn.addEventListener(`click`, onLoadMore);

function onSearch(e) {
  e.preventDefault();
  clearInput();
  imagesApiService.query = e.target.value.trim();
  imagesApiService.resetPage();
  if (imagesApiService.query !== ``) {
    imagesApiService.fetchImages().then(renderGallery);
  }
}
function onLoadMore() {
  if (imagesApiService.query !== ``) {
    imagesApiService.fetchImages().then(renderGallery);
  }
}
function renderGallery(hits) {
  refs.galleryMap.insertAdjacentHTML(`beforeend`, templGallery(hits));
  const last = refs.galleryMap.lastElementChild;
  last.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}
function clearInput() {
  refs.galleryMap.innerHTML = ``;
}
