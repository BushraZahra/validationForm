const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('ConfirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
    //grt values from the user
    const usernameValue = username.value.trim();
    const EmailValue = Email.value.trim();
    const PasswordValue = Password.value.trim();
    const ConfirmPasswordValue = Password2.value.trim();
    
    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    }else{
        //add success class
        setSuccessFor(username);
    }
    if(EmailValue === ''){
        setErrorFor(Email, 'Email cannot be blank');
    }else if(!isEmail(EmailValue)){
        setErrorFor(Email, 'Email is not valid');
    }else{
        setSuccessFor(Email);
    }
    if(PasswordValue === ''){
        setErrorFor(Password, 'Password cannot be blank');
    }else{
        setSuccessFor(Password);
    }
    if(ConfirmPasswordValue === ''){
        setErrorFor(Password2, 'Password cannot be blank');
    }else if(PasswordValue !== ConfirmPasswordValue){
        setErrorFor(Password2, 'Passwords does not match');
    }else{
        setSuccessFor(Password2);
    }

}   
function setErrorFor(input, message){
    const content = input.parentElement; // .content
    const small = content.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    content.className = 'content error';
}
function setSuccessFor(input){
    const content = input.parentElement;
    content.className = 'content success';
}
function isEmail(Email){
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(Email);
}






