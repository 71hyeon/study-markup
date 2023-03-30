const progress = document.querySelectorAll('.circle');

const prevBtn = document.querySelector('.btn');
const nextBtn = document.querySelector('.btn:last-child');

let circleIndex = 0;

nextBtn.addEventListener('click', () => {
  circleIndex++;
  handleBtnDisable();
  progress.forEach((circle, index) => {
    if (index === circleIndex) {
      circle.classList.add('active');
    }
  });
});

prevBtn.addEventListener('click', () => {
  progress.forEach((circle, index) => {
    if (index === circleIndex) {
      circle.classList.remove('active');
    }
  });
  circleIndex--;
  handleBtnDisable();
});

function handleBtnDisable() {
  if (circleIndex === 0) {
    prevBtn.disabled = true;
  } else if (circleIndex === 3) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
