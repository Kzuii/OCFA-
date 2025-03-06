// Toggle hamburger menu on mobile
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
  // Toggle the .active class to show/hide nav links
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});
