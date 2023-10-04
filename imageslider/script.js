const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const imageWidth = images[0].clientWidth;

let index = 0;

function nextSlide() {
  index++;
  if (index === images.length) {
    index = 0;
  }
  updateSlider();
}

function previousSlide() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(${-index * imageWidth}px)`;
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
