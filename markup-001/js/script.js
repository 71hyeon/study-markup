const imgs = document.querySelectorAll('.imgs');

imgs.forEach(img => {
  img.addEventListener('click', () => {
    imgs.forEach(img => img.classList.remove('active'));

    img.classList.add('active');
  });
});
