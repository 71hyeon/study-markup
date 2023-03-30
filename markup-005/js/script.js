const loading = document.querySelector('.loading');
const bg = document.querySelector('.container');

let i = 0;
let j = 100;
const upPercent = setInterval(() => {
  i++;
  j--;
  if (i <= 100) {
    loading.innerText = `${i}%`;
    loading.style.opacity = `${j}%`;
    // bg.style.filter = `blur(${j}px)`;
  } else {
    loading.innerText = '';
    clearInterval(upPercent);
  }
}, 25);
