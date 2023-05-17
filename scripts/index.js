const registerBtn = document.querySelector('.btn_register_form');
const registerForm = document.querySelector('.register_form');
const registerFormCharacter = document.querySelector('#register_form');
/* const galleriBtn = document.querySelector('#galleri_btn'); */

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  registerFormCharacter.style.display = 'block';
});

/* galleriBtn.addEventListener('click', () => {
  window.location.href = 'http://google.com';
}); */
