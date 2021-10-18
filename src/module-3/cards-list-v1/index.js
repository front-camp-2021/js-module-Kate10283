export default class CardsList {
  constructor({ data = [], Component = {} }) {
    this.data = data;
    this.Component = Component;
    this.element = document.createElement("div");
    this.element.classList.add("cards");

    this.card = [];

    for (let i = 0; i < this.data.length; i++) {
      this.card[i] = new Component(data[i]);
    }

    this.render();
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = "";
    for (let i = 0; i < this.card.length; i++) {
      wrapper.appendChild(this.card[i].element);
    }
    this.element.innerHTML += wrapper.innerHTML;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }

  update(data = []) {
    this.data = data;
    this.element.innerHTML = "";

    this.card = [];

    for (let i = 0; i < this.data.length; i++) {
      this.card[i] = new this.Component(data[i]);
    }

    this.render();
  }
}
