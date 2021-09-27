export default class Card {
  element;

  constructor ({
    id = '',
    images = [],
    title = '',
    rating = 0,
    price = 0,
    category = '',
    brand = ''
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  render() {
    this.element = document.createElement("div");
    let id = document.createElement("p");
    id.innerHTML = this.id;
    let image = document.createElement("img");
    image.src = this.images[0];
    let rate = document.createElement("p");
    rate.innerHTML = this.rating;
    let price = document.createElement("p");
    price.innerHTML = this.price;
    let title = document.createElement("p");
    title.innerHTML = this.title;
    let category = document.createElement("p");
    category.innerHTML = this.category;
    let brand = document.createElement("p");
    brand.innerHTML = this.brand;
    this.element.append(id, image, rate, price, title, category, brand);
  }

  destroy() {
    this.element.remove();
  }
}
