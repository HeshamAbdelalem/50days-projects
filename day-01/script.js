console.log('connecteddd');

const imgs = document.querySelectorAll('.pic');

imgs.forEach((img) =>
  img.addEventListener('click', () => img.classList.toggle('active'))
);
