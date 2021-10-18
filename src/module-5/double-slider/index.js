export default class DoubleSlider {
  element;

  constructor({
    min = 100,
    max = 200,
    formatValue = value => value,
    selected = {
      from: min,
      to: max
    },
    precision = 0,
    filterName = ''
  } = {}) {
    this.min = min;
    this.max = max;
    this.filterName = filterName;
    this.selected = selected;
    
    this.render();
  }

  getTemplate() {
    return `
    <div class="filter-outer">
        <div class="slider filter">
            <div class="slider-wrapper">
                <div class="filter__name"> ${this.filterName} </div>
            </div>
            <div class="slider-block">
                <span class="range">$
                    <span id="range1">
                      ${this.selected.from}
                    </span>
                </span>

                <div class="container">
                    <div class="slider-track"></div>
                    <input id="slider-1" class="${this.filterName}" type="range" min="${this.min}" 
                    max="${this.max}" value="${this.selected.from}" oninput="slideOne()">
                    <input id="slider-2" class="${this.filterName}" type="range" min="${this.min}" 
                    max="${this.max}" value="${this.selected.to}" oninput="slideTwo()">
                </div>
                <span class="range">$
                    <span id="range2">
                      ${this.selected.to}
                    </span>
                </span>
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
