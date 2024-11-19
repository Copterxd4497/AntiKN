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
  Kong.src = 'Char_images/vice director_page-0001.jpg';
};

const changeToOriginalImage = () => {
  Kong.src = 'Char_images/Kong_page-0001.jpg';
};

Kong.addEventListener('mousedown', changeToSecondImage);
Kong.addEventListener('mouseup', changeToOriginalImage);
Kong.addEventListener('mouseleave', changeToOriginalImage);

Kong.addEventListener('touchstart', changeToSecondImage);
Kong.addEventListener('touchend', changeToOriginalImage);