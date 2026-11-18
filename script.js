// Minimal progressive enhancement: mobile nav toggle + footer year.
// The site is fully usable without JavaScript.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.getElementById('nav-list');

  function closeNav() {
    if (!navList || !toggle) return;
    navList.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the mobile menu after following a link.
    navList.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        closeNav();
      }
    });

    // Close with Escape, or by tapping/clicking outside the menu.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navList.classList.contains('open')) {
        closeNav();
        toggle.focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (navList.classList.contains('open') && !event.target.closest('.site-nav')) {
        closeNav();
      }
    });
  }

  var year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
