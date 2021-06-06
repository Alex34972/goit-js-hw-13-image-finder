export default class SearchApiImages {
  constructor() {
    this.searchImages = ``;
    this.page = 1;
  }
  fetchImages() {
    console.log(this);
    const url = ` https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchImages}&page=${this.page}&per_page=12&key=21948852-6fcb2a22057a93c1128c532ff`;
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        this.page += 1;
        return data.hits;
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

//Your API key: 21948852-6fcb2a22057a93c1128c532ff
