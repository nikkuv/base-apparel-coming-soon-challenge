const form = document.querySelector('.email-bar');
const input = document.querySelector('#email');
const errorIcon = document.querySelector('.error-icon');
const errorMsg = document.querySelector('.error-msg');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const getEmail = input.value;

    if(!validateEmail(getEmail)){
        errorIcon.classList.add('error');
        errorMsg.classList.add('error');
    }
    else{
        errorIcon.classList.remove('error');
        errorMsg.classList.remove('error');
    }
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}