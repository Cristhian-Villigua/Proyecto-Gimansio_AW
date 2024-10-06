const form = document.getElementById('login-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let isValid = true;

//valicacion del email
const emailInput = document.getElementById('email');
const emailError = document.querySelector('#email + .error-message');
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailInput.value.trim() === ''){
    emailError.textContent = 'El correo electrónico es obligatorio.';
    emailError.style.visibility = 'visible';
    isValid= false;
}else if(!emailValid.test(emailInput.value.trim())){
    emailError.textContent = 'El correo electrónico no es válido.';
    emailError.style.visibility = 'visible';
    isValid = false;
}else{
    emailError.textContent = '';
}

//validar password
const passInput = document.getElementById('pass');
const passError = document.querySelector('#pass + .error-message');

if(passInput.value.trim() === ''){
    passError.textContent = 'La contraseña es Obligatoria.';
    passError.style.visibility = 'visible';
    isValid = false;
}else{
    passError.textContent ='';
}

if(isValid){
    form.submit();
    window.location.href = '../cliente/index.html';
}
});