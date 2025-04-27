const box = document.getElementById('animated-box');
const colorBtns = document.querySelectorAll('.color-btn');
const resetBtn = document.getElementById('reset-btn');

// Retrieve preference from localStorage
function loadPreference() {
  const color = localStorage.getItem('favoriteColor');
  if (color) {
    setBoxColor(color);
  }
}

// Set box color and animate
function setBoxColor(color) {
  box.style.background = color;
  box.classList.add('animated');
  setTimeout(() => box.classList.remove('animated'), 500);
}

// Store preference in localStorage
function savePreference(color) {
  localStorage.setItem('favoriteColor', color);
}

// Event: Color button click
colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.getAttribute('data-color');
    setBoxColor(color);
    savePreference(color);
  });
});

// Event: Reset button
resetBtn.addEventListener('click', () => {
  localStorage.removeItem('favoriteColor');
  setBoxColor('#52ab98');
});

// Initialize on load
loadPreference();
