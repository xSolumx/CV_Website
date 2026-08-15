const root = document.documentElement;
const header = document.querySelector('[data-header]');
const themeButton = document.querySelector('[data-theme-button]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

const setThemeLabel = () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  themeButton?.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
  themeButton?.setAttribute('title', `Switch to ${nextTheme} theme`);
};

setThemeLabel();

themeButton?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  setThemeLabel();
});

const closeMenu = () => {
  nav?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  nav?.classList.toggle('is-open', willOpen);
  document.body.style.overflow = willOpen ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelector('[data-year]').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
