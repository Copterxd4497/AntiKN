const Kong = document.getElementById('Kong');
let isFirstImage = true;
let interval;

function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);

const changeToSecondImage = () => {
  Kong.src = 'Char_images/Stupid.png';
};

const changeToOriginalImage = () => {
  Kong.src = 'Char_images/Kong adjust verstion.jpg';
};

Kong.addEventListener('mousedown', changeToSecondImage);
Kong.addEventListener('mouseup', changeToOriginalImage);
Kong.addEventListener('mouseleave', changeToOriginalImage);

Kong.addEventListener('touchstart', changeToSecondImage);
Kong.addEventListener('touchend', changeToOriginalImage);



window.addEventListener('load', function () {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }, 3000);
});


let clickCount = 0;
let timer = null;
const RESET_DELAY = 200;

const countDisplay = document.getElementById('count');

const resetCount = () => {
  clickCount = 0;
  countDisplay.textContent = `${clickCount}`;
};

Kong.addEventListener('click', () => {
  clickCount++;
  countDisplay.textContent = `${clickCount}`;

  // Clear the existing timer and start a new one
  if (timer) clearTimeout(timer);
  timer = setTimeout(resetCount, RESET_DELAY);
});

