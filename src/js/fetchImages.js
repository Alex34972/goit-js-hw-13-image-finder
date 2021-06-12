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
  const last = refs.galleryMap.lastElementChild;
  refs.galleryMap.insertAdjacentHTML(`beforeend`, templGallery(hits));
  onHidden();

 if (last!==null) {
  const next = last.nextElementSibling;
  next.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
})};
  if (hits.length<12) {
  return  refs.loadMorBtn.classList.add(`is-hidden`)
  } refs.loadMorBtn.classList.remove(`is-hidden`)
}
function clearInput() {
  refs.galleryMap.innerHTML = ``;
};
function onHidden () {
   const cards=document.querySelectorAll(".photo-card");
  cards.forEach((card) => {card.classList.add(`mapping`)});
};




//.photo-card.mapping {
//  opacity: 1;
 // transform: translateX(-50%);
//  
// transition: transform var(--animation-duration), opacity var(--timing-function);
//
//}
  