const url =` https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=21948852-6fcb2a22057a93c1128c532ff`;

function fetchImages(images) {
    return fetch(url).then(
      (res) => {
        return res.json();
      }
    );
  }
  export default { fetchImages };

  //Your API key: 21948852-6fcb2a22057a93c1128c532ff