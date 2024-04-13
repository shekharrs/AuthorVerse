document.getElementById('registerLink').addEventListener('click', function() {
    document.getElementById('registerOverlay').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('registerOverlay').style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;

    // Here you can add your registration logic, for example, sending data to server-side script for registration process
    // For simplicity, let's just display a message
    alert('Registration Successful for ' + regUsername);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you can add your login logic, for example, sending data to server-side script for authentication
    // For simplicity, let's just display a message
    alert('Login Successful for ' + username);
});
