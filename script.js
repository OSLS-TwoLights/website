document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.main-nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.serve-card, .experience-content, .experience-wheel, ' +
    '.signal-noise-content, .planning-left, .planning-right, ' +
    '.team-member, .closing-cta h2, .closing-cta p'
  ).forEach(function (el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  var toggle = document.querySelector('.mobile-menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('mobile-open');
      toggle.classList.toggle('active');
    });
  }
});
