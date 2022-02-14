document.getElementById('login-submit').addEventListener('click', function(){const emailField = document.getElementById('user-email')
const userEmail = emailField.value;
console.log(userEmail);

// get password value
const passwordField = document.getElementById('user-password')
const userPassword = passwordField.value;
console.log(userPassword);

if(userEmail == 'admin' && userPassword == 'admin'){
    window.location.href = 'banking.html';
}
});