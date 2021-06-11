import templGallery from "../templates/gallery-images.hbs";
import ImagesApiService from "./apiService";
import getRefs from "./get-refs";

const refs = getRefs();
const imagesApiService = new ImagesApiService();

refs.searchForm.addEventListener(`submit`, onSearch);
refs.loadMorBtn.addEventListener(`click`, onLoadMore);

function onSearch(e) {
  e.preventDefault();
  clearInput();
  imagesApiService.query = e.target.query.value.trim();
  imagesApiService.resetPage();
  if (imagesApiService.query !== ``) {
    imagesApiService.fetchImages().then(renderGallery);

  } 
}
function onLoadMore() {
  if (imagesApiService.query !== ``) {
    imagesApiService.incrementPage();
    imagesApiService.fetchImages().then(renderGallery);
    
  } 
}
function renderGallery(hits) {
  refs.galleryMap.insertAdjacentHTML(`beforeend`, templGallery(hits));
  
  const last = refs.galleryMap.lastElementChild;
  last.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
  if (hits.length<12) {
  return  refs.loadMorBtn.classList.add(`is-hidden`)
  } refs.loadMorBtn.classList.remove(`is-hidden`)
}
function clearInput() {
  refs.galleryMap.innerHTML = ``;
};



//const cards=document.querySelectorAll(".photo-card");
  //console.log(cards);
  //const cardsNew =  cards.map((card) => {return card.classList.add(`is-hidden`)});
  //console.log(cardsNew)

  //scrollEl = document.querySelector(".gallery-item:last-child");