// document.getElementById('registerLink').addEventListener('click', function() {
//     document.getElementById('registerOverlay').style.display = 'flex';
// });

// document.getElementById('closeBtn').addEventListener('click', function() {
//     document.getElementById('registerOverlay').style.display = 'none';
// });

// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var regUsername = document.getElementById('regUsername').value;
//     var regPassword = document.getElementById('regPassword').value;

//     // Here you can add your registration logic, for example, sending data to server-side script for registration process
//     // For simplicity, let's just display a message
//     alert('Registration Successful for ' + regUsername);
// });

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Here you can add your login logic, for example, sending data to server-side script for authentication
//     // For simplicity, let's just display a message
//     alert('Login Successful for ' + username);
// });


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBFgi-TEApyKEKPj8rvwFmXeocI94DOduk",
    authDomain: "login-author-verse.firebaseapp.com",
    projectId: "login-author-verse",
    storageBucket: "login-author-verse.appspot.com",
    messagingSenderId: "1078071818090",
    appId: "1:1078071818090:web:c1ab97cd2f89a65d001713"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



//submit button
const submit = document.getElementById('submit'); 
submit.addEventListener("click", function (event) { 
    event.preventDefault()

// //inputs
const email = document.getElementById('email').value;
 const password = document.getElementById('password').value; 

 signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Creating Account...")
    window.location.href = "/dashboard.html";
       // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})