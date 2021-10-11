export default class FiltersList {
  constructor({
    title = '',
    list = []
  } = {}) {
    this.title = title;
    this.list = list;

    this.addFilter();
  }

  addFilter() {
    this.render();
  }

  getTemplate() {
    let filterName =
      `<div class="filter__name">
      <div class="filter__name-inner">
        ${this.title}
      </div>
    </div>\n`;

    let filters = '';
    let check = "";

    for (let i = 0; i < this.list.length; i++) {

      if (this.list[i].checked) {
        check = "checked";
        console.log("check " + i);
      }

      filters +=
        `<div class="filter__input-outer">
        <input type="checkbox" id="${this.list[i].value}" name="${this.title}" value='${this.list[i].value}' ${check}><label
          for="${this.list[i].value}">${this.list[i].title}</label>
        <br>
      </div>\n`;
    }
    return filterName + filters;
  }

  render() {
    this.element = document.createElement("div");
    this.element.classList.add("filter-outer");
    const wrapper = document.createElement("div");
    wrapper.classList.add("filter");
    wrapper.innerHTML = this.getTemplate();
    this.element.append(wrapper);
  }

  removeFilter() {
    this.element.innerHTML = "";
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
