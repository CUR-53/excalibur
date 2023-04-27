let gelleriSection = document.querySelector('.galleri_section');
let galleriContainer = document.querySelectorAll('.galleri_container');

galleriSection.forEach((item) => {
  item.addEventListener('click', () => {
    galleriSection.classList.add('active');
  });
});

galleriContainer.addEventListener('click', () => {
  galleriContainer.classList.remove('active');
});
