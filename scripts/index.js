const registerBtn = document.querySelector('.btn-register-form');
const registerForm = document.querySelector('.register-form');
const registerFormCharacter = document.querySelector('#register-form');


registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    registerFormCharacter.style.display = 'block';
})