const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const themeToggle = document.querySelector('.theme-toggle');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☾' : '☼';
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});
