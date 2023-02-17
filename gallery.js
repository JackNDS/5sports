const images = document.querySelectorAll('.column img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const close = document.querySelector('.close');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentIndex = 0;

// Display lightbox
function displayImage(index) {
  currentIndex = index;
  lightboxImage.src = images[index].src;
  lightbox.style.display = 'block';
}

// Hide lightbox
function hideImage() {
  lightbox.style.display = 'none';
}

// Navigate to next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  lightboxImage.src = images[currentIndex].src;
}

// Navigate to previous image
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  lightboxImage.src = images[currentIndex].src;
}

// Event listeners
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    displayImage(index);
  });
});

close.addEventListener('click', hideImage);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideImage();
  } else if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    prevImage();
  }
});

prevArrow.addEventListener('click', prevImage);
nextArrow.addEventListener('click', nextImage);
