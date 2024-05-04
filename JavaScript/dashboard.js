
   
    document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
  });
  
  document.getElementById("registerBtn").addEventListener("click", function() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
  });
  
  document.querySelectorAll(".form-container form").forEach(function(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      // You can add code here to handle form submission, like AJAX requests for authentication
      // For simplicity, let's just show the dashboard
      document.querySelector(".navbar").style.display = "none";
      document.getElementById("dashboard").style.left = "0";
    });
  });
  
  document.getElementById("logoutBtn").addEventListener("click", function() {
    document.getElementById("dashboard").style.left = "-200px";
    document.querySelector(".navbar").style.display = "block";
  });
  
    
 