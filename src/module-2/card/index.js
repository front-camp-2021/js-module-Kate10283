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

  getTemplate () {
    return `<div class="card" data-element="body">
  <div class="card-inner">
      <div class="card__img">
          <img src="${this.images[0]}" alt="magic-mouse">
      </div>
      <div class="card__rate__price-outer">
          <div class="card__rate">
              <div class="card__rate-inner">
                  ${this.rating} <i class='far fa-star'></i>
              </div>
          </div>
          <div class="card__price">
              $${this.price}
          </div>
      </div>
      <div class="card__header-outer">
          <div class="card__header">
              ${this.title}
          </div>
      </div>
      <div class="card__text">
          Redesigned from scratch and completely revised.
      </div>
      <div class="card__text">
          ${this.category}
      </div>
      <div class="card__text">
         ${this.brand}
      </div>
  </div>
  <div class="card__btns">
      <button type="button" class="card__wishlist">
          <i class="far fa-heart"></i> WISHLIST
      </button>
      <button type="button" class="card__add">
          <i class='fas fa-cart-plus'></i>
          ADD TO CART
      </button>
  </div>
</div>`
  }

  render() {
    this.element = document.createElement("div");
    this.element.innerHTML = this.getTemplate();
  }

  remove() {
    if(this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
