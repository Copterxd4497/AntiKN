const Kong = document.getElementById('Kong');
const countDisplay = document.getElementById('count');
const navbar = document.querySelector('.navbar');
let clickCount = 0;
let timer = null;
const RESET_DELAY = 500; // Adjust reset delay for faster response
const sound = document.getElementById("clickSound");

//add sound
document.getElementById("Kong").addEventListener("click", () => {
  sound.play();
});

// Preload images
const preloadedImages = [
  'Char_images/Stupid.png',
  'Char_images/Kong adjust verstion.jpg',
];
preloadedImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

// Navbar scroll behavior
const handleScroll = () => {
  navbar.classList.toggle('bg-dark', window.scrollY > 50);
};
window.addEventListener('scroll', handleScroll);

// Image change functions
const changeToSecondImage = () => (Kong.src = 'Char_images/Stupid.png');
const changeToOriginalImage = () => (Kong.src = 'Char_images/Kong adjust verstion.jpg');

// Unified pointer events for responsiveness
Kong.addEventListener('pointerdown', changeToSecondImage);
Kong.addEventListener('pointerup', changeToOriginalImage);
Kong.addEventListener('pointerleave', changeToOriginalImage);

// Reset counter
const resetCount = () => {
  clickCount = 0;
  countDisplay.textContent = `${clickCount}`;
};



// Click counter functionality
Kong.addEventListener('click', () => {
  clickCount++;
  countDisplay.textContent = `${clickCount}`;
  if (timer) clearTimeout(timer);
  timer = setTimeout(resetCount, RESET_DELAY);
});

