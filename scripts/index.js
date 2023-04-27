const registerBtn = document.querySelector('.btn-register-form');
const registerForm = document.querySelector('.register-form');
const registerFormCharacter = document.querySelector('#register-form');
/* const galleriBtn = document.querySelector('#galleri_btn'); */

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  registerFormCharacter.style.display = 'block';
});

/* galleriBtn.addEventListener('click', () => {
  window.location.href = 'http://google.com';
}); */
