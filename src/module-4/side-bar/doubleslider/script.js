let sliderOne;
let sliderTwo;
let displayValOne;
let displayValTwo;
let minGap;
let sliderTrack;
let sliderMaxValue;

function startRemove() {
    if (document.getElementById('clearFilters')) {
        document.getElementById('clearFilters').addEventListener("click", () => {
            startRemove();
        })
    }

    sliderOne = document.getElementById("slider-1");
    sliderTwo = document.getElementById("slider-2");
    displayValOne = document.getElementById("range1");
    displayValTwo = document.getElementById("range2");
    minGap = 0;
    sliderTrack = document.querySelector(".slider-track");
    sliderMaxValue = document.getElementById("slider-1").max;
    slideOne();
    slideTwo();
}

window.onload = startRemove;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , rgba(111, 100, 248, 1) ${percent1}% , rgba(111, 100, 248, 1) ${percent2}%, #dadae5 ${percent2}%)`;
}
