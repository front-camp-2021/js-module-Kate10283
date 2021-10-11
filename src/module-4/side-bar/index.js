import FiltersList from '../filters-list/index.js';
import DoubleSlider from './doubleslider/index.js';

export default class SideBar {
  constructor (categoriesFilter = [], brandFilter = []) {
    this.categoriesFilter = categoriesFilter;
    this.brandFilter = brandFilter;
    this.category = new FiltersList({title: "Category", list: this.categoriesFilter});
    this.brand = new FiltersList({title: "Brand", list: this.brandFilter});
    this.slider = new DoubleSlider({min: 0, max: 85000});
    this.element = document.createElement("div");
    this.element.classList.add("filters");

    this.render();
  }

  getTemplate() {
    const line = `
<div class="filter__line-outer">
    <div class="filter__line">
        <hr />
    </div>
</div>`;

    return `
  <div class="filters">
    <div class="filters__header-outer">
        <div class="filters__header">
            <div class="filters__header-name">Filters</div>
            <button type="button" class="filters__header-show-btn"><i
                    class="fa fa-angle-double-left"></i></button>
        </div>
    </div>
    <div class="filters__block-outer">
        <div class="filters__block">
            <div class="filters__block-inner">
                ${this.slider.element.innerHTML}
                ${line}
                ${this.category.element.innerHTML}
                ${line}
                ${this.brand.element.innerHTML}
            </div>
        </div>
    </div>
    <div class="filters__btn">
        <button type="button" id="clearFilters">Clear all filters</button>
    </div>
</div>`
  }

  removeFilters() {
    this.element.innerHTML = "";
    this.element.innerHTML = this.getTemplate();
    const clearBtn = document.getElementById('clearFilters');
    clearBtn.addEventListener("click", () => {
      this.removeFilters();
    })
  }

  render() {
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
