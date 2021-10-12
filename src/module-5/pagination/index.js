export default class Pagination {
  element;
  start = 0;
  pageIndex = 0;

  constructor({
    totalPages = 10,
    currentPage = 1,
  } = {}) {
    this.totalPages = totalPages;
    this.currentPage = currentPage - 1;
    this.element = document.createElement("div");
    this.element.classList.add("pagination-outer");

    this.render();
  }

  getTemplate() {
    let pages = "";
    for (let i = 0; i < this.totalPages; i++) {
      if (this.currentPage == i)
        pages += `<button type="button" class="pagination_num current">${i + 1}</button>\n`;
      else
        pages += `<button type="button" class="pagination_num">${i + 1}</button>\n`;
    }
    return `
    <div class="pagination">
                <button class="pagination__arrow" id="pagination-left" type="button">
                    <i class="fa fa-angle-left"></i>
                </button>
                <div class="pagination__nums">
                    ${pages}
                </div>
                <button class="pagination__arrow" id="pagination-right" type="button">
                    <i class="fa fa-angle-right"></i>
                </button>
            </div>\n`;
  }

  render() {
    this.element.innerHTML = this.getTemplate();    
  }

  setListeners() {
    let leftArrow = document.getElementById("pagination-left");
    leftArrow.addEventListener("click", () => {
      this.goToPrevPage();
    })

    let rightArrow = document.getElementById("pagination-right");
    rightArrow.addEventListener("click", () => {
      this.goToNextPage();
    })

    let paginationNum = document.getElementsByClassName("pagination_num");
    for (let i = 0; i < paginationNum.length; i++) {
      paginationNum[i].addEventListener("click", (event) => {
        this.changePageOnClick(Number(event.target.innerHTML));
      })
    }
  }

  goToPrevPage() {
    if (this.currentPage !== 0) {
      this.currentPage -= 1;
    }
    else {
      this.currentPage = this.totalPages - 1;
    }
    this.render();
    this.setListeners();
  }

  goToNextPage() {
    if (this.currentPage !== 19) {
      this.currentPage += 1;
    }
    else {
      this.currentPage = 0;
    }
    this.render();
    this.setListeners();
  }

  changePageOnClick(num) {
    this.currentPage = num - 1;
    this.render();
    this.setListeners();
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
