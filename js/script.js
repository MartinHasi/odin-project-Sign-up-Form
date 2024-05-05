const passwordValue = document.querySelector('#password');
const confirmValue = document.querySelector('#password_confirm');
const warning = document.querySelector('#password_warning');


function controlPassword()
{
    if(passwordValue.value !== confirmValue.value)
        {
            warning.style.display = 'block';
            passwordValue.style.border = '2px solid red';
            confirmValue.style.border = '2px solid red';
        }
        else
        {
            warning.style.display = 'none';
            passwordValue.style.border = '2px solid black';
            confirmValue.style.border = '2px solid black';

        }
}