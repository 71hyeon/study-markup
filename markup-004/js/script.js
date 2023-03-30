const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('.inputBox');

btnEl.addEventListener('click', () => {
  inputEl.classList.toggle('hidden');
});
