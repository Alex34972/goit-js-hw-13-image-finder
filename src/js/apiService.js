 const API_KEY = `21948852-6fcb2a22057a93c1128c532ff`;
 const BASE_URL = `https://pixabay.com/api`;
 export default class SearchApiImages {
  constructor() {
    this.searchImages = ``;
    this.page = 1;
  }
  fetchImages() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchImages}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then((responce) => responce.json())
      .then(({hits}) => {
        this.page += 1;
        return hits;
      });
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchImages;
  }
  set query(newImages) {
    this.searchImages = newImages;
  }
}


