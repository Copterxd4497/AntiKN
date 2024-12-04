const Kong = document.getElementById('Kong');
const countDisplay = document.getElementById('count');
let isFirstImage = true;
let clickCount = 0;
let timer = null;
const RESET_DELAY = 100; // Faster reset delay

function userScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('bg-dark', window.scrollY > 50);
  });
}

document.addEventListener('DOMContentLoaded', userScroll);

const changeToSecondImage = () => (Kong.src = 'Char_images/Stupid.png');
const changeToOriginalImage = () => (Kong.src = 'Char_images/Kong adjust verstion.jpg');

Kong.addEventListener('mousedown', changeToSecondImage);
Kong.addEventListener('mouseup', changeToOriginalImage);
Kong.addEventListener('mouseleave', changeToOriginalImage);
Kong.addEventListener('touchstart', changeToSecondImage);
Kong.addEventListener('touchend', changeToOriginalImage);

const resetCount = () => {
  clickCount = 0;
  countDisplay.textContent = `${clickCount}`;
};

Kong.addEventListener('click', () => {
  clickCount++;
  countDisplay.textContent = `${clickCount}`;
  clearTimeout(timer);
  timer = setTimeout(resetCount, RESET_DELAY);
});
