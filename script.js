// script.js
const colorChangeButton = document.getElementById('color-change-button');

colorChangeButton.addEventListener('click', () => {
  // Change the background color to a random color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
