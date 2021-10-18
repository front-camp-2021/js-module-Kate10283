export default class DoubleSlider {
  element;

  constructor({
    min = 0,
    max = 0,
    precision = 0
  } = {}) {
    this.min = min;
    this.max = max;
    this.precision = precision;

    this.render();
  }

  getTemplate() {
    return `
    <div class="filter-outer">
        <div class="slider filter">
            <div class="slider-wrapper">
                    <div class="filter__name"> Slider </div>
                    <div class="values filter__name">
                        <span id="range1">
                            ${this.min}
                        </span>
                        <span> &dash; </span>
                        <span id="range2">
                            ${this.max}
                        </span>
                    </div>
            </div>
            <div class="container">
                <div class="slider-track"></div>
                <input type="range" min="${this.min}" max="${this.max}" value="${this.precision}" id="slider-1"
                    oninput="slideOne()">
                <input type="range" min="${this.min}" max="${this.max}" value="${this.max}" id="slider-2"
                    oninput="slideTwo()">
            </div>
        </div>
    </div>`
  }

  render() {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }

  removeFilter() {
    this.element.innerHTML = "";
    this.element.innerHTML = this.getTemplate();
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
}
