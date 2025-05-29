// Hamburger navigation menu for mobile
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Optional: Auto-hide disabled project links
  document.querySelectorAll('.project-links .btn-disabled').forEach(btn => {
    btn.style.display = 'none';
  });

  // Form focus effect for accessibility
  document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', function () {
      this.parentElement.classList.remove('focus');
    });
  });
});