const menuEl = document.querySelector('.btn--menu');
const closeEl = document.querySelector('.btn--close');

const circleEl = document.querySelector('.menu');
const contentEl = document.querySelector('.content');

menuEl.addEventListener('click', () => {
  circleEl.classList.remove('returnForm');
  circleEl.classList.add('rotation');
  contentEl.classList.remove('returnForm');
  contentEl.classList.add('rotation');
});

closeEl.addEventListener('click', () => {
  circleEl.classList.remove('rotation');
  circleEl.classList.add('returnForm');
  contentEl.classList.remove('rotation');
  contentEl.classList.add('returnForm');
});
