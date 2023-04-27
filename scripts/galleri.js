let galleri = document.querySelectorAll('.galleri');
let galleriContainer = document.querySelector('.galleri_container');

galleri.forEach((item) => {
  item.addEventListener('click', () => {
    galleri.forEach((elem) => {
      elem.classList.remove('active');
    });
    item.classList.add('active');
  });
});